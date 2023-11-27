import React from "react";
import * as ImagePicker from "expo-image-picker";

import { Texto, Title, Wrapper, WrapperContente, WrapperText } from "./styles";
import Header from "../../components/Header";
import Button from "../../components/Button";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";

import { doc, updateDoc } from "firebase/firestore";
import { FirebaseDataBase, FirebaseStorage } from "../../config";
import setProfileData from "../../storage/login/setProfileData";
import { useAppDispatch, useAppSelector } from "../../storage/redux/store";
import {
  selectProfileUrl,
  selectUserDados,
  setProfileUrl,
} from "../../storage/redux/app/appSlice";

const Profile = () => {
  const image = useAppSelector(selectProfileUrl);
  const userDados = useAppSelector(selectUserDados);
  const dispatch = useAppDispatch();

  const handleImagePick = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,

      allowsEditing: false,

      quality: 1,
    });
    if (result.assets) {
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
            const dataBaseRef = doc(
              FirebaseDataBase,
              `profileData/${userDados.id}`
            );

            try {
              await updateDoc(dataBaseRef, {
                profileUrl: downLoad,
              });
              dispatch(setProfileUrl(downLoad));

              console.log("Campo 'on' atualizado com sucesso!");
            } catch (error) {
              console.error("Erro ao atualizar campo 'on':", error);
            }
            setProfileData({ ...userDados, profileUrl: downLoad });
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
            {userDados.terrenos} terreiros
          </Texto>
        </WrapperText>
        <WrapperText>
          <Title>CNPJ</Title>
          <Texto adjustsFontSizeToFit numberOfLines={1}>
            {userDados.cnpj}
          </Texto>
        </WrapperText>
      </WrapperContente>
    </Wrapper>
  );
};

export default Profile;
