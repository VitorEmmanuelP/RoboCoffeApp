import React, { useEffect, useState } from "react";
import { Wrapper, WrapperButton, WrapperContente } from "./styles";
import Header from "../../components/Header";
import Button from "../../components/Button";
import { SelectList } from "react-native-dropdown-select-list";
import { useAppSelector } from "../../storage/redux/store";
import {
  selectProfileUrl,
  selectUserDados,
} from "../../storage/redux/app/appSlice";
import { addDoc, collection, getDocs, onSnapshot } from "firebase/firestore";
import { FirebaseDataBase } from "../../config";
import { showToast } from "../../components/toast/Toast";
import { styles } from "../../common/styles";
import { KeyboardAvoidingView } from "react-native";

const CriarRelatorio = () => {
  const image = useAppSelector(selectProfileUrl);
  const dadosUser = useAppSelector(selectUserDados);

  const [selected, setSelected] = useState("");

  const [date, setDate] = useState("");
  const [terreiroDados, setTerreiroDados] = useState<any[]>([]);

  const [dataDados, setDataDados] = useState<any[]>([]);

  type Dados = {
    id: string;
    criador: string;
    funcionamento: string;
    data: string;
    idTerreno: string;
  };

  const searchDatas = async (id: string) => {
    try {
      const dataBaseRef = collection(
        FirebaseDataBase,
        `profileData/${dadosUser.id}/terrenos/${id}/relatorios`
      );

      onSnapshot(dataBaseRef, {
        next: (snapshot) => {
          const listData: any[] = [];
          snapshot.docs.forEach((docs) => {
            listData.push({ key: docs.id, value: docs.data().data });
          });
          setDataDados(listData);
        },

        error: (error) => {
          console.error("Erro ao obter dados do Firestore:", error);
        },
      });
    } catch (error) {}
  };

  useEffect(() => {
    try {
      setTerreiroDados((prev) => [...prev, { idUser: dadosUser.id }]);
      const dataBaseRef = collection(
        FirebaseDataBase,
        `profileData/${dadosUser.id}/terrenos`
      );

      onSnapshot(dataBaseRef, {
        next: (snapshot) => {
          const listData: any[] = [];
          snapshot.docs.forEach((docs) => {
            listData.push({ key: docs.id, value: docs.data().idTerreiro });
          });
          setTerreiroDados(listData);
        },

        error: (error) => {
          console.error("Erro ao obter dados do Firestore:", error);
        },
      });
    } catch (error) {}
  }, []);

  const handleAdd = async () => {
    if (date !== "" && selected !== "") {
      const dataBaseRef = collection(
        FirebaseDataBase,
        `profileData/${dadosUser.id}/terrenos/${selected}/relatorios/`
      );

      const allReports = collection(
        FirebaseDataBase,
        `profileData/${dadosUser.id}/relatorios`
      );

      try {
        const querySnapshot = await getDocs(dataBaseRef);
        let dados: Dados | undefined;

        querySnapshot.forEach((doc) => {
          if (doc.id === date) {
            dados = doc.data() as Dados;
          }
        });

        if (dados) {
          await addDoc(allReports, {
            criador: dados.criador,
            funcionamento: dados.funcionamento,
            data: dados.data,
            terreno: dados.idTerreno,
          });
        } else {
          showToast({
            text: "Não deixe nenhum campo vazio",
            border: true,
            color: styles.colors.red_100,
            iconName: "close",
            position: "bottom",
            durations: 2000,
          });
          return;
        }

        showToast({
          text: "Terreno adicinado com sucesso",
          border: true,
          color: styles.colors.green_400,
          iconName: "check",
          position: "bottom",
          durations: 2000,
        });
      } catch (error) {
        console.error("Erro ao atualizar campo 'on':", error);
      }
    } else {
      showToast({
        text: "Não deixe nenhum campo vazio",
        border: true,
        color: styles.colors.red_100,
        iconName: "close",
        position: "bottom",
        durations: 2000,
      });
    }
  };

  return (
    <Wrapper>
      <Header onBack onLogOut text="Criar Relatorio" image={image} />
      <WrapperContente>
        <KeyboardAvoidingView style={{ flex: 1, alignItems: "center" }}>
          <SelectList
            placeholder="Selecionar Terreiro"
            searchPlaceholder="Procurar..."
            boxStyles={{ width: 200, marginBottom: 10 }}
            dropdownStyles={{ height: 150, marginBottom: 20 }}
            setSelected={(val: string) => {
              searchDatas(val);
              setSelected(val);
            }}
            data={terreiroDados}
            save="key"
          />
          <SelectList
            placeholder="Selecionar Data"
            searchPlaceholder="Procurar..."
            boxStyles={{ width: 200, marginBottom: 10 }}
            dropdownStyles={{ height: 100, marginBottom: 20 }}
            setSelected={(val: string) => {
              setDate(val);
            }}
            data={dataDados}
            save="key"
          />

          <WrapperButton>
            <Button text="Criar" variant="add" onPress={handleAdd} />
          </WrapperButton>
        </KeyboardAvoidingView>
      </WrapperContente>
    </Wrapper>
  );
};

export default CriarRelatorio;
