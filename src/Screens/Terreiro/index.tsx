import React, { useState } from "react";
import { StatusBar, Switch, Text } from "react-native";

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
import { doc, updateDoc, deleteDoc } from "firebase/firestore";
import { FirebaseDataBase } from "../../config";
import { ModalAlert } from "../../components/modalAlert/ModalAlert";
import { useAppSelector } from "../../storage/redux/store";
import {
  selectProfileUrl,
  selectUserDados,
} from "../../storage/redux/app/appSlice";
import { showToast } from "../../components/toast/Toast";

const Terreiro = () => {
  type TerreiroRouteProp = RouteProp<StackNavigation, "Terreiro">;
  const route = useRoute<TerreiroRouteProp>();
  const navigation = useNavigation<StackTypes>();

  const { data } = route.params;
  const [isEnabled, setIsEnabled] = useState(data.on);
  const [visible, setVisible] = useState(false);
  const image = useAppSelector(selectProfileUrl);

  const dadosUser = useAppSelector(selectUserDados);

  const deleteTerreiro = async () => {
    const dataBaseRef = doc(
      FirebaseDataBase,
      `profileData/${dadosUser.id}/terrenos/${data.id}`
    );

    await deleteDoc(dataBaseRef);

    navigation.goBack();
    showToast({
      text: "Deletado com sucesso",
      border: true,
      color: styles.colors.red_100,
      iconName: "close",
      position: "bottom",
      durations: 1000,
    });
  };

  const toggleSwitch = async () => {
    const dataBaseRef = doc(
      FirebaseDataBase,
      `profileData/${dadosUser.id}/terrenos/${data.id}`
    );

    try {
      await updateDoc(dataBaseRef, {
        on: !isEnabled,
        status: !isEnabled ? "ok" : "off",
      });
      console.log("Campo 'on' atualizado com sucesso!");
    } catch (error) {
      console.error("Erro ao atualizar campo 'on':", error);
    }
    setIsEnabled((previousState) => !previousState);
  };

  return (
    <Wrapper>
      <StatusBar
        backgroundColor={
          visible ? "rgba(2,59,40,255)" : styles.colors.green_400
        }
      />
      <Header onLogOut onBack text="Terreiro" image={image} />
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
          buttonRight={{
            text: "DELETAR",
            onPress: () => {
              deleteTerreiro();
            },
          }}
          onClose={() => {
            setVisible((prev) => !prev);
          }}
        >
          <Text>Deseja realmente deletar o terreno?</Text>
        </ModalAlert>
        <Button
          text="Move"
          variant="filled"
          onPress={() => {
            navigation.navigate("Move", {
              data: { id: data.id, idTerreiro: data.idTerreiro },
            });
          }}
        />
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
