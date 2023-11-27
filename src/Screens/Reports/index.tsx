import React, { useEffect, useState } from "react";
import { Wrapper, WrapperButton, WrapperContente } from "./styles";
import Header from "../../components/Header";
import Button from "../../components/Button";
import { ActivityIndicator, FlatList, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackTypes } from "../../core/routes";
import { useAppSelector } from "../../storage/redux/store";
import {
  selectProfileUrl,
  selectUserDados,
} from "../../storage/redux/app/appSlice";
import { collection, onSnapshot } from "firebase/firestore";
import { FirebaseDataBase } from "../../config";
import TextField from "../../components/TextInput";
import ResportItem from "../../components/ResportItem";

const Reports = () => {
  const navigation = useNavigation<StackTypes>();
  const image = useAppSelector(selectProfileUrl);
  const dadosUser = useAppSelector(selectUserDados);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");

  const [relatoriosDados, setRelatoriosDados] = useState<any[]>([]);

  const filteredDados = relatoriosDados.filter((obj) => {
    return obj.terreno?.toLowerCase().startsWith(search?.toLowerCase());
  });

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        setRelatoriosDados((prev) => [...prev, { idUser: dadosUser.id }]);
        const dataBaseRef = collection(
          FirebaseDataBase,
          `profileData/${dadosUser.id}/relatorios`
        );

        if (isMounted) {
          const unsubscribe = onSnapshot(dataBaseRef, {
            next: (snapshot) => {
              const listData: any[] = [];
              snapshot.docs.forEach((docs) => {
                listData.push({ id: docs.id, ...docs.data() });
              });
              setRelatoriosDados(listData);
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
      <Header onLogOut text="Reports" image={image} />
      <WrapperContente>
        {isLoading ? (
          <ActivityIndicator size={50} />
        ) : (
          <View
            style={{ gap: 20, justifyContent: "center", alignItems: "center" }}
          >
            <TextField
              placeholder="Procurar"
              value=""
              onChangeText={setSearch}
            />
            <FlatList
              data={filteredDados}
              showsVerticalScrollIndicator={false}
              ItemSeparatorComponent={() => {
                return <View style={{ height: 10 }} />;
              }}
              renderItem={({ item }) => {
                return <ResportItem dados={item} />;
              }}
            />
          </View>
        )}
      </WrapperContente>
      <WrapperButton>
        <Button
          variant="filled"
          text="Criar Relatório"
          onPress={() => {
            navigation.navigate("CriarRelatorio");
          }}
        />
      </WrapperButton>
    </Wrapper>
  );
};

export default Reports;
