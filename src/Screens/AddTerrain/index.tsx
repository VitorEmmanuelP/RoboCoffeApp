import React, { useState } from "react";
import {
  Wrapper,
  WrapperContente,
  WrapperTextInput,
  WrapperTextInputs,
} from "./styles";
import Header from "../../components/Header";
import TextField from "../../components/TextInput";
import Button from "../../components/Button";
import { useAppDispatch, useAppSelector } from "../../storage/redux/store";
import {
  selectProfileUrl,
  selectUserDados,
  setUserDados,
} from "../../storage/redux/app/appSlice";
import {
  doc,
  addDoc,
  collection,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { FirebaseDataBase } from "../../config";
import { showToast } from "../../components/toast/Toast";
import { styles } from "../../common/styles";

const AddTerrain = () => {
  const [nomeTerreno, setNomeTerreno] = useState("");
  const [ipTerreno, setIpTerreno] = useState("");

  const image = useAppSelector(selectProfileUrl);
  const dadosUser = useAppSelector(selectUserDados);
  const dispatch = useAppDispatch();

  const getCurrentDateTime = () => {
    const currentDate = new Date();

    const day = String(currentDate.getDate()).padStart(2, "0");
    const month = String(currentDate.getMonth() + 1).padStart(2, "0");

    const hours = String(currentDate.getHours()).padStart(2, "0");
    const minutes = String(currentDate.getMinutes()).padStart(2, "0");

    const formattedDate = `${hours}:${minutes} - ${day}/${month}/${currentDate.getFullYear()}`;

    return formattedDate;
  };

  const getCurrentDate = () => {
    const currentDate = new Date();

    const hours = String(currentDate.getHours()).padStart(2, "0");
    const minutes = String(currentDate.getMinutes()).padStart(2, "0");

    const formattedDate = `${hours}:${minutes}`;

    return formattedDate;
  };

  const data = getCurrentDate();
  const dateTime = getCurrentDateTime();

  const handleAdd = async () => {
    if (ipTerreno !== "" && nomeTerreno !== "") {
      const dataBaseRef = collection(
        FirebaseDataBase,
        `profileData/${dadosUser.id}/terrenos`
      );

      const profile = doc(FirebaseDataBase, `profileData/${dadosUser.id}`);

      try {
        await addDoc(dataBaseRef, {
          idTerreiro: nomeTerreno,
          ip: ipTerreno,
          on: false,
          status: "off",
        });

        const terreiroRef = collection(
          FirebaseDataBase,
          `profileData/${dadosUser.id}/notifications/`
        );

        await addDoc(terreiroRef, {
          data: dateTime,
          idTerreiro: nomeTerreno,
          text: `Às ${data}, o  veículo identificado como ${nomeTerreno} foi adicionado, a coleção de terrenos de ${dadosUser.nome}.`,
          title: "Terreno Criado",
        });

        const allTerrenos = collection(
          FirebaseDataBase,
          `profileData/${dadosUser.id}/terrenos`
        );

        const size = (await getDocs(allTerrenos)).size;

        await updateDoc(profile, {
          terrenos: size,
        });

        dispatch(setUserDados({ ...dadosUser, terrenos: size.toString() }));

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
      <Header onLogOut onBack text="Add. Terreiro" image={image} />
      <WrapperContente>
        <WrapperTextInputs>
          <WrapperTextInput>
            <TextField
              placeholder="Nome do terreiro"
              value={nomeTerreno}
              onChangeText={setNomeTerreno}
            />
          </WrapperTextInput>
          <WrapperTextInput>
            <TextField
              placeholder="Ip do terreiro"
              value={ipTerreno}
              onChangeText={setIpTerreno}
            />
          </WrapperTextInput>
        </WrapperTextInputs>

        <Button text="Adicionar " variant="add" onPress={handleAdd} />
      </WrapperContente>
    </Wrapper>
  );
};

export default AddTerrain;
