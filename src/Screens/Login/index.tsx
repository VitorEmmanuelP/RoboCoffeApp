import {
  View,
  Text,
  TextInput,
  ActivityIndicator,
  StyleSheet,
  Modal,
  StatusBar,
} from "react-native";
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

  const [loading, setLoading] = useState(false);

  const getData = async () => {
    const dataBaseRef = collection(FirebaseDataBase, "profileData");
    const listData = [];
    const data = onSnapshot(dataBaseRef, {
      next: (snapshot) => {
        snapshot.docs.forEach((docs) => {
          console.log("VIOTR ", docs.data());
          listData.push({ id: docs.id, ...docs.data() });
        });
      },
    });

    return listData;
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
          const infoUser = await getData();

          await setProfileData(infoUser);
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
            text="Esqueceu a senha?"
            onPress={getData}
          />
        </WrapperButton>
      </WrapperContent>
    </Wrapper>
  );
};

export default Login;

const LoadingModal = ({ isVisible }: { isVisible: boolean }) => {
  return (
    <Modal transparent visible={isVisible}>
      <View style={ad.modalContainer}>
        <View style={ad.modalContent}>
          <ActivityIndicator size={50} color={styles.colors.green_400} />
          <Text style={{ marginTop: 30, fontWeight: "bold" }}>Loading...</Text>
        </View>
      </View>
    </Modal>
  );
};
const ad = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    borderRadius: 15,

    backgroundColor: "white",
    width: 200,
    height: 200,
  },
});
