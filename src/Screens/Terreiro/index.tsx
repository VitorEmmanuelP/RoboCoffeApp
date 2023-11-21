import React, { useEffect, useState } from "react";
import { Text } from "react-native";

import {
  IdText,
  Texto,
  TextoDesligado,
  TextoLigado,
  Wrapper,
  WrapperContente,
  WrapperStatus,
  WrapperSwitch,
} from "./styles";
import { useNavigation } from "@react-navigation/native";
import { StackTypes } from "../../core/routes";
import Header from "../../components/Header";
import Tag from "../../components/Tag";
import { styles } from "../../common/styles";
import Button from "../../components/Button";
import { StackNavigation } from "../../core/routes/routes.types";
import { type RouteProp, useRoute } from "@react-navigation/native";
import { Switch } from "react-native";
import { collection, doc, setDoc, updateDoc } from "firebase/firestore";
import { FirebaseDataBase } from "../../config";
import { getProfileData } from "../../storage/login/getProfileData";
import { ModalAlert } from "../../components/modalAlert/ModalAlert";

const Terreiro = () => {
  type TerreiroRouteProp = RouteProp<StackNavigation, "Terreiro">;
  const route = useRoute<TerreiroRouteProp>();

  const { data } = route.params || "groupCreate";
  const [isEnabled, setIsEnabled] = useState(data.on);
  const [visible, setVisible] = useState(false);

  const [dadosUser, setDadosUser] = useState();

  const handleData = async () => {
    const dados = await getProfileData();

    if (dados) {
      const parserDados = JSON.parse(dados);
      setDadosUser(parserDados[0].id);
    }
  };

  useEffect(() => {
    handleData();
  }, []);

  const toggleSwitch = async () => {
    const dataBaseRef = doc(
      FirebaseDataBase,
      `profileData/${dadosUser}/terrenos/${data.id}`
    );

    try {
      await updateDoc(dataBaseRef, {
        on: !isEnabled,
        status: !isEnabled ? "ok" : "off",
      }); // Atualiza o campo 'on' para 'false'
      console.log("Campo 'on' atualizado com sucesso!");
    } catch (error) {
      console.error("Erro ao atualizar campo 'on':", error);
    }
    setIsEnabled((previousState) => !previousState);
  };

  return (
    <Wrapper>
      <Header onLogOut onBack text="Terreiro" />
      <WrapperContente>
        <IdText>{data.idTerreiro}</IdText>
        <WrapperStatus>
          <Texto colorText={styles.colors.base_white} opacity={!isEnabled}>
            STATUS:
          </Texto>
          <Tag variant={data.status.toUpperCase()} size="BIG" />
        </WrapperStatus>
        <WrapperSwitch>
          <TextoDesligado opacity={!isEnabled}>Desligado</TextoDesligado>
          <Switch
            style={{
              marginLeft: 20,
              marginRight: 20,
            }}
            trackColor={{ false: "#D6D3D3", true: "#D6D3D3" }}
            thumbColor={
              isEnabled ? styles.colors.green_400 : styles.colors.red_100
            }
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
          <TextoLigado opacity={isEnabled}>Ligado</TextoLigado>
        </WrapperSwitch>
        <ModalAlert
          visible={visible}
          buttonLeft={{ text: "CANCELAR", onPress: () => {} }}
          buttonRight={{ text: "DELETAR", onPress: () => {} }}
          onClose={() => {
            setVisible((prev) => !prev);
          }}
        >
          <Text>Deseja realmente deletar o terreno?</Text>
        </ModalAlert>
        <Button
          variant="remove"
          text="Apagar"
          onPress={() => {
            setVisible((prev) => !prev);
          }}
        />
      </WrapperContente>
    </Wrapper>
  );
};

export default Terreiro;
