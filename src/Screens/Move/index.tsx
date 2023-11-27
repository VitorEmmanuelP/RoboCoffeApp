import React, { useState } from "react";
import TextInput from "../../components/TextInput";
import Header from "../../components/Header";
import Button from "../../components/Button";
import axios from "axios";
import { WrapperContent } from "./styles";
import { showToast } from "../../components/toast/Toast";
import { styles } from "../../common/styles";
import { addDoc, collection } from "firebase/firestore";
import { FirebaseDataBase } from "../../config";
import { useAppSelector } from "../../storage/redux/store";
import { selectUserDados } from "../../storage/redux/app/appSlice";
import { type RouteProp, useRoute } from "@react-navigation/native";
import { StackNavigation } from "../../core/routes/routes.types";

const Move = () => {
  const [input, setInput] = useState("");
  type TerreiroRouteProp = RouteProp<StackNavigation, "Move">;
  const route = useRoute<TerreiroRouteProp>();
  const dadosUser = useAppSelector(selectUserDados);
  const data = route.params.data;

  const getCurrentDateTime = () => {
    const currentDate = new Date();

    // Get day and month with leading zeros if needed
    const day = String(currentDate.getDate()).padStart(2, "0");
    const month = String(currentDate.getMonth() + 1).padStart(2, "0"); // Adding 1 because months are zero-based

    // Get hours and minutes with leading zeros if needed
    const hours = String(currentDate.getHours()).padStart(2, "0");
    const minutes = String(currentDate.getMinutes()).padStart(2, "0");

    // Format the date components into the desired string format
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

  const dateTime = getCurrentDateTime();
  const dataHoras = getCurrentDate();

  const feact = async (url: string) => {
    try {
      const a = await axios.get(url);

      const dataBaseRef = collection(
        FirebaseDataBase,
        `profileData/${dadosUser.id}/terrenos/${data.id}/relatorios`
      );
      const terreiroRef = collection(
        FirebaseDataBase,
        `profileData/${dadosUser.id}/notifications/`
      );
      try {
        await addDoc(dataBaseRef, {
          criador: dadosUser.nome,
          funcionamento: "1 minuto",
          data: getCurrentDateTime(),
          idTerreno: data.idTerreiro,
        });

        await addDoc(terreiroRef, {
          data: dateTime,
          idTerreiro: data.idTerreiro,
          text: `Às ${dataHoras}, o  veículo identificado como ${data.idTerreiro} foram acionados, dando início a uma sequência meticulosa de verificações e atividades que compõem sua rotina diária, garantindo seu funcionamento impecável e confiável.`,
          title: "Terreno Criado",
        });
      } catch (err) {
        showToast({
          text: "Error",
          border: true,
          color: styles.colors.red_100,
          iconName: "close",
          position: "bottom",
          durations: 2000,
        });
        return;
      }

      showToast({
        text: "Chamada para movimentação enviada",
        border: true,
        color: styles.colors.green_400,
        iconName: "check",
        position: "bottom",
        durations: 2000,
      });
    } catch (error) {
      console.error("Erro ao atualizar campo 'on':", error);
    }
  };

  return (
    <>
      <Header text="Home" onLogOut onBack image={dadosUser.profileUrl} />

      <WrapperContent>
        <TextInput placeholder="Coloque o IP" onChangeText={setInput} />
        <Button text="Move" variant="filled" onPress={() => feact(input)} />
      </WrapperContent>
    </>
  );
};

export default Move;
