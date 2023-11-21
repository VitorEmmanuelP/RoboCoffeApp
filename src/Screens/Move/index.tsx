import { View, Text } from "react-native";
import React, { useState } from "react";
import TextInput from "../../components/TextInput";
import Header from "../../components/Header";
import Button from "../../components/Button";
import axios from "axios";
import { addDoc, collection } from "firebase/firestore";
import { FirebaseDataBase, RealTimeDataBase } from "../../config";
import { ref, set, onValue, update } from "firebase/database";
import { WrapperContent } from "./styles";

const Move = () => {
  const [faixa, setFaixa] = useState("");
  const [input, setInput] = useState("");

  const [responseData, setResponseData] = useState(null);

  const feact = async (url: string) => {
    console.log(url);
    try {
      const a = await axios.get(url);
      setResponseData(a.data);
    } catch (err) {
      console.log(err);
    }
  };

  // const MoveRight = async (data) => {
  //   try {
  //     const collectionRef = ref(RealTimeDataBase, "Comandos");

  //     update(collectionRef, { Direita: "on" });
  //     // onValue(collectionRef, (snap) => {
  //     //   const data = snap.val();
  //     //   console.log(data);
  //     // });
  //
  //     console.log("Documento adicionado com ID: ");
  //   } catch (error) {
  //     console.error("Erro ao escrever no Firestore: ", error);
  //   }
  // };
  //
  // const Moveleft = async (data) => {
  //   try {
  //     const collectionRef = ref(RealTimeDataBase, "Comandos");
  //
  //     update(collectionRef, { Esquerda: "on" });
  //     // onValue(collectionRef, (snap) => {
  //     //   const data = snap.val();
  //     //   console.log(data);
  //     // });

  //     console.log("Documento adicionado com ID: ");
  //   } catch (error) {
  //     console.error("Erro ao escrever no Firestore: ", error);
  //   }
  // };
  //
  // const handlerFun = async (func) => {
  //   await func();
  // };

  return (
    <View>
      <Header text="Home" onLogOut onBack />

      <WrapperContent>
        <TextInput placeholder="Seact" onChangeText={setInput} />
        <Button text="Direita" variant="filled" onPress={() => feact(input)} />
        <Button text="Esquerda" variant="filled" onPress={() => feact(input)} />
        <Text>{responseData}</Text>
      </WrapperContent>
    </View>
  );
};

export default Move;
