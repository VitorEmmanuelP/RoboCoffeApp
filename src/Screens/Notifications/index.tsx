import React, { useEffect, useState } from "react";
import { Wrapper, WrapperContente } from "./styles";
import Header from "../../components/Header";
import { ActivityIndicator, FlatList, View } from "react-native";
import { useAppSelector } from "../../storage/redux/store";
import {
  selectProfileUrl,
  selectUserDados,
} from "../../storage/redux/app/appSlice";
import { collection, onSnapshot } from "firebase/firestore";
import { FirebaseDataBase } from "../../config";
import TextField from "../../components/TextInput";
import NotificacaoItem from "../../components/NotificacaoItem";

const Notification = () => {
  const image = useAppSelector(selectProfileUrl);
  const dadosUser = useAppSelector(selectUserDados);

  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");

  const [notificationsDados, setNotificationsDados] = useState<any[]>([]);

  const filteredDados = notificationsDados.filter((obj) => {
    return obj.idTerreiro?.toLowerCase().startsWith(search?.toLowerCase());
  });

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        setNotificationsDados((prev) => [...prev, { idUser: dadosUser.id }]);
        const dataBaseRef = collection(
          FirebaseDataBase,
          `profileData/${dadosUser.id}/notifications`
        );

        if (isMounted) {
          const unsubscribe = onSnapshot(dataBaseRef, {
            next: (snapshot) => {
              const listData: any[] = [];
              snapshot.docs.forEach((docs) => {
                listData.push({ id: docs.id, ...docs.data() });
              });
              setNotificationsDados(listData);
              setIsLoading(false);
            },

            error: (error) => {
              console.error("Erro ao obter dados do Firestore:", error);
              setIsLoading(false);
            },
          });

          return () => {
            unsubscribe();
          };
        }
      } catch (error) {
        console.error("Erro ao obter dados do usuário:", error);
        setIsLoading(false);
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <Wrapper>
      <Header onLogOut text="Notifications" image={image} />
      <WrapperContente>
        {isLoading ? (
          <ActivityIndicator size={50} />
        ) : (
          <View
            style={{ gap: 20, justifyContent: "center", alignItems: "center" }}
          >
            <TextField
              placeholder="Procurar"
              value={search}
              onChangeText={setSearch}
            />
            <FlatList
              data={filteredDados} //
              showsVerticalScrollIndicator={false}
              ItemSeparatorComponent={() => {
                return <View style={{ height: 10 }} />;
              }}
              renderItem={({ item }) => {
                return <NotificacaoItem dados={item} />;
              }}
            />
          </View>
        )}
      </WrapperContente>
    </Wrapper>
  );
};

export default Notification;
