import { View, FlatList, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import { Wrapper, WrapperButton, WrapperContente } from "./styles";
import { useNavigation } from "@react-navigation/native";

import Header from "../../components/Header";
import TerreiroItem from "../../components/TerreiroItem";
import Button from "../../components/Button";
import { collection, getDocs, onSnapshot, updateDoc } from "firebase/firestore";
import { FirebaseDataBase } from "../../config";
import { StackTypes } from "../../core/routes";
import { useAppSelector } from "../../storage/redux/store";
import {
  selectProfileUrl,
  selectUserDados,
} from "../../storage/redux/app/appSlice";
import TextField from "../../components/TextInput";
const Terreiros = () => {
  const navigation = useNavigation<StackTypes>();
  const [terreiroDados, seTerreirosDados] = useState<any[]>([]);
  const image = useAppSelector(selectProfileUrl);
  const [search, setSearch] = useState("");

  const filteredDados = terreiroDados.filter((obj) => {
    return obj.idTerreiro?.toLowerCase().startsWith(search?.toLowerCase());
  });

  const [isLoading, setIsLoading] = useState(true);
  const [allOff, setAllOff] = useState(true);

  const dadosUser = useAppSelector(selectUserDados);
  const turnOffAll = async () => {
    try {
      const dataBaseRef = collection(
        FirebaseDataBase,
        `profileData/${dadosUser.id}/terrenos`
      );

      const snapshot = await getDocs(dataBaseRef);

      for (const doc of snapshot.docs) {
        const docRef = doc.ref;

        try {
          await updateDoc(docRef, {
            status: allOff ? "off" : "ok",
            on: allOff ? false : true,
          });
        } catch (error) {
          console.error(
            `Erro ao atualizar campo 'on' para o documento com ID ${doc.id}:`,
            error
          );
        }
      }
    } catch (error) {
      console.error("Erro ao obter documentos da coleção:", error);
    }
  };

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        seTerreirosDados((prev) => [...prev, { idUser: dadosUser.id }]);
        const dataBaseRef = collection(
          FirebaseDataBase,
          `profileData/${dadosUser.id}/terrenos`
        );

        if (isMounted) {
          const unsubscribe = onSnapshot(dataBaseRef, {
            next: (snapshot) => {
              const listData: any[] = [];
              snapshot.docs.forEach((docs) => {
                if (docs.data().status !== "off") {
                  setAllOff(true);
                } else {
                  setAllOff(false);
                }
                listData.push({ id: docs.id, ...docs.data() });
              });
              seTerreirosDados(listData);
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
      <Header onLogOut onBack text="Terreiros" image={image} />
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
              data={filteredDados}
              showsVerticalScrollIndicator={false}
              renderItem={({ item }) => {
                return (
                  <View style={{ marginBottom: 10 }}>
                    <TerreiroItem
                      id={item.idTerreiro}
                      status={item.status}
                      onPress={() => {
                        navigation.navigate("Terreiro", {
                          data: {
                            id: item.id,
                            idTerreiro: item.idTerreiro,
                            on: item.on,
                            status: item.status,
                          },
                        });
                      }}
                    />
                  </View>
                );
              }}
            />
          </View>
        )}
      </WrapperContente>
      <WrapperButton>
        <Button
          text={allOff ? "Deligar Todos" : "Ligar Todos"}
          variant={allOff ? "remove" : "filled"}
          onPress={() => {
            turnOffAll();
          }}
        />
      </WrapperButton>
    </Wrapper>
  );
};

export default Terreiros;
