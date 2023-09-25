import { View, Text, TextInput } from "react-native";
import React, { useState } from "react";
import {
  ProfileImage,
  Wrapper,
  WrapperButton,
  WrapperContent,
  WrapperHeader,
  WrapperImage,
  WrapperInputs,
} from "./styles";
import { styles } from "../../common/styles";
import { MaterialIcons } from "@expo/vector-icons";
import TextField from "../../components/TextInput";
import Button from "../../components/Button";
import { useNavigation } from "@react-navigation/native";
import { StackTypes } from "../../core/routes";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import { FirebaseAuth, FirebaseDataBase } from "../../config";
import { showToast } from "../../components/toast/Toast";
import { collection, onSnapshot } from "firebase/firestore";
import setProfileData from "../../storage/login/setProfileData";
import { getProfileData } from "../../storage/login/getProfileData";

const Login = () => {
  const navigation = useNavigation<StackTypes>();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [datas, setDatas] = useState();

  const getData = async () => {
    const dataBaseRef = collection(FirebaseDataBase, "profileData");

    const data = onSnapshot(dataBaseRef, {
      next: (snapshot) => {
        const listData = [];

        snapshot.docs.forEach((docs) => {
          listData.push({ id: docs.id, ...docs.data() });
        });
        setDatas(listData);
      },
    });
    console.log(datas);
    return () => data();
  };

  const loginCheck = async () => {
    if (email && password) {
      try {
        const response = await signInWithEmailAndPassword(
          FirebaseAuth,
          email,
          password
        );

        if (response.user) {
          await getData();

          await setProfileData(datas);

          // navigation.replace("Home");
          showToast({
            text: "Conectado",
            border: true,
            color: styles.colors.green_400,
            iconName: "close",
            position: "bottom",
            durations: 1000,
          });
        }
      } catch (error) {
        showToast({
          text: "Erro",
          border: true,
          color: styles.colors.red_100,
          iconName: "close",
          position: "bottom",
          durations: 2000,
        });
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
      <WrapperHeader>
        <WrapperImage>
          <ProfileImage source={require("../../common/images/logo.png")} />
        </WrapperImage>
      </WrapperHeader>
      <WrapperContent>
        <WrapperInputs>
          <TextField
            placeholder="Email"
            iconRight="person"
            value={email}
            onChangeText={setEmail}
          />
        </WrapperInputs>
        <WrapperInputs>
          <TextField
            placeholder="Password"
            iconRight="lock"
            hidePassword
            value={password}
            onChangeText={setPassword}
          />
        </WrapperInputs>
        <WrapperButton>
          <Button variant="add" text="Entrar" onPress={loginCheck} />
        </WrapperButton>
        <WrapperButton>
          <Button
            variant="underlined"
            text="Esqueceu a senha?"
            onPress={getData}
          />
          <Button
            variant="underlined"
            text="AAAEsqueceu a senha?"
            onPress={async () => {
              const a = await getProfileData();
              console.log(a);
            }}
          />
        </WrapperButton>
      </WrapperContent>
    </Wrapper>
  );
};

export default Login;
