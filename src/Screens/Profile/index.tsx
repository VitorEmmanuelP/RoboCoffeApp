import { View, Text } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import * as ImagePicker from "expo-image-picker";

import { Texto, Title, Wrapper, WrapperContente, WrapperText } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { StackTypes } from "../../core/routes";
import Header from "../../components/Header";
import { UserInfoContext } from "../../contexts/userInfo";
import { getProfileData } from "../../storage/login/getProfileData";
import { LoadingModal } from "../../components/Loading";
import Button from "../../components/Button";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";

import { addDoc, collection, onSnapshot } from "firebase/firestore";
import { FirebaseStorage } from "../../config";

const Profile = () => {
  const navigation = useNavigation<StackTypes>();
  const [image, setImage] = useState("");
  const [userDados, setuserDados] = useState<{
    nome: string;
    empresa: string;
    cnpj: string;
    terreiros: string;
  }>();
  const [loading, setLoading] = useState(true);
  const [response, setResponse] = useState<any>(null);

  useEffect(() => {
    handleData();
  }, []);

  const handleData = async () => {
    const dados = await getProfileData();
    if (dados) {
      console.log(dados);
      const parserDados = JSON.parse(dados);
      setuserDados(parserDados[0]);
      setLoading(false);
    }
  };

  const handleImagePick = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,

      allowsEditing: false,

      quality: 1,
    });
    if (result.assets) {
      setImage(result.assets[0].uri);

      const response = await fetch(result.assets[0].uri);

      const blob = await response.blob();

      const storageRef = ref(FirebaseStorage, "images/" + new Date().getTime());

      const uploadTask = uploadBytesResumable(storageRef, blob);

      uploadTask.on(
        "state_changed",
        (snapshot) => {},
        () => {},
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downLoad) => {
            console.log(downLoad);
          });
        }
      );
    }
  };

  return (
    <Wrapper>
      <Header
        text="Vitor Emmanuel"
        onBack
        onLogOut
        image={image}
        onProfile={handleImagePick}
      />
      {!loading && userDados && (
        <WrapperContente>
          <WrapperText>
            <Title>Nome</Title>
            <Texto adjustsFontSizeToFit numberOfLines={1}>
              {userDados.nome}
            </Texto>
          </WrapperText>
          <WrapperText>
            <Title>Empresa</Title>
            <Texto adjustsFontSizeToFit numberOfLines={1}>
              {userDados.empresa}
            </Texto>
          </WrapperText>
          <WrapperText>
            <Title>QT. DE TERREIROS</Title>
            <Texto adjustsFontSizeToFit numberOfLines={1}>
              {userDados.terreiros} terreiros
            </Texto>
          </WrapperText>
          <WrapperText>
            <Title>CNPJ</Title>
            <Texto adjustsFontSizeToFit numberOfLines={1}>
              {userDados.cnpj}
            </Texto>
            <Button text="dwada" variant="add" onPress={handleImagePick} />
          </WrapperText>
        </WrapperContente>
      )}
    </Wrapper>
  );
};

export default Profile;
