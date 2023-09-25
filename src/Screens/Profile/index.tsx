import { View, Text } from "react-native";
import React from "react";
import { Texto, Title, Wrapper, WrapperContente, WrapperText } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { StackTypes } from "../../core/routes";
import Header from "../../components/Header";
const Profile = () => {
  const navigation = useNavigation<StackTypes>();

  return (
    <Wrapper>
      <Header text="Vitor Emmanuel" onBack onLogOut />
      <WrapperContente>
        <WrapperText>
          <Title>Nome</Title>
          <Texto adjustsFontSizeToFit numberOfLines={1}>
            Vitor Emmanuel Pereira de Mesquita
          </Texto>
        </WrapperText>
        <WrapperText>
          <Title>Empresa</Title>
          <Texto adjustsFontSizeToFit numberOfLines={1}>
            Braga Francisco Neto
          </Texto>
        </WrapperText>
        <WrapperText>
          <Title>QT. DE TERREIROS</Title>
          <Texto adjustsFontSizeToFit numberOfLines={1}>
            10 terreiros
          </Texto>
        </WrapperText>
        <WrapperText>
          <Title>CNPJ</Title>
          <Texto adjustsFontSizeToFit numberOfLines={1}>
            00. 000. 00/0001-00
          </Texto>
        </WrapperText>
      </WrapperContente>
    </Wrapper>
  );
};

export default Profile;
