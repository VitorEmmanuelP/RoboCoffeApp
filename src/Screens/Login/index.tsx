import {
  View,
  Text,
  TextInput,
  ActivityIndicator,
  StyleSheet,
  Modal,
  StatusBar,
} from "react-native";
import React, { useContext, useState } from "react";
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
import { UserInfoContext } from "../../contexts/userInfo";
import { LoadingModal } from "../../components/Loading";

const Login = () => {
  const navigation = useNavigation<StackTypes>();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { saveUserDados } = useContext(UserInfoContext);

  const [loading, setLoading] = useState(false);

  const getData = async (id: string) => {
    try {
      const dataBaseRef = collection(FirebaseDataBase, `/profileData`);

      return new Promise((resolve, reject) => {
        const unsubscribe = onSnapshot(dataBaseRef, {
          next: (snapshot) => {
            const listData = [];
            snapshot.docs.forEach((doc) => {
              if (doc.id === id) {
                listData.push(doc.data());
              }
            });
            unsubscribe();

            resolve(listData);
          },
          error: (error) => {
            reject(error);
          },
        });
      });
    } catch (error) {
      throw error;
    }
  };

  const loginCheck = async () => {
    if (email && password) {
      try {
        const response = await signInWithEmailAndPassword(
          FirebaseAuth,
          email,
          password
        );

        setLoading(true);
        if (response.user) {
          const infoUser = await getData(response.user.uid);
          setProfileData(infoUser);
          setLoading(false);

          navigation.replace("Tabs");
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
        console.log(error);

        showToast({
          text: "Erro",
          border: true,
          color: styles.colors.red_100,
          iconName: "close",
          position: "bottom",
          durations: 2000,
        });
      }
      setLoading(false);
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
      <StatusBar
        backgroundColor={
          loading ? "rgba(2,59,40,255)" : styles.colors.green_400
        }
      />
      <LoadingModal isVisible={loading} />
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
            text={"Esqueceu a senha?"}
            onPress={getData}
          />
        </WrapperButton>
      </WrapperContent>
    </Wrapper>
  );
};

export default Login;
