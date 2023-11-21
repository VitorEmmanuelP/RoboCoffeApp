import { View, Text, FlatList, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import {
  Texto,
  Title,
  Wrapper,
  WrapperButton,
  WrapperContente,
  WrapperText,
} from "./styles";
import { useNavigation } from "@react-navigation/native";

import Header from "../../components/Header";
import ReportItem from "../../components/NotificacaoItem";
import Reporte from "../../components/ResportItem";
import TerreiroItem from "../../components/TerreiroItem";
import Button from "../../components/Button";
import {
  collection,
  doc,
  getDocs,
  onSnapshot,
  updateDoc,
} from "firebase/firestore";
import { getProfileData } from "../../storage/login/getProfileData";
import { FirebaseDataBase } from "../../config";
import { StackTypes } from "../../core/routes";
const Terreiros = () => {
  const navigation = useNavigation<StackTypes>();
  const [terreiroDados, seTerreirosDados] = useState<any[]>([]);

  const [isLoading, setIsLoading] = useState(true);
  const [allOff, setAllOff] = useState(true);

  const handleData = async () => {
    const dados = await getProfileData();

    if (dados) {
      const parserDados = JSON.parse(dados);
      return parserDados[0];
    }
  };
  const turnOffAll = async () => {
    try {
      const dadosUser = await handleData();
      const dataBaseRef = collection(
        FirebaseDataBase,
        `profileData/${dadosUser.id}/terrenos`
      );

      const snapshot = await getDocs(dataBaseRef); // Obter todos os documentos na coleção

      for (const doc of snapshot.docs) {
        const docRef = doc.ref; // Obter a referência do documento

        try {
          await updateDoc(docRef, {
            status: allOff ? "off" : "ok",
            on: allOff ? false : true,
          }); // Atualiza o campo 'on' para 'false'
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
        const dadosUser = await handleData();
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
                  console.log("aa");
                } else {
                  console.log("bb");
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
      <Header onLogOut onBack text="Terreiros" />
      <WrapperContente>
        {isLoading ? (
          <ActivityIndicator size={50} />
        ) : (
          <FlatList
            data={terreiroDados}
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
        <Button
          text="Move"
          variant="filled"
          onPress={() => {
            navigation.navigate("Move");
          }}
        />
      </WrapperButton>
    </Wrapper>
  );
};

export default Terreiros;
