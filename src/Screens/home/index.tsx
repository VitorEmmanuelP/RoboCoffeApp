import { View, Text, Image } from "react-native";
import React from "react";
import { styles } from "../../common/styles";
import { useNavigation } from "@react-navigation/native";

import Header from "../../components/Header";
import {
  Texto,
  Wrapper,
  WrapperButton,
  WrapperContent,
  WrapperSol,
  WrapperStatus,
} from "./styles";
import { StackTypes } from "../../core/routes";
import Button from "../../components/Button";
import Tag from "../../components/Tag";

const Home = () => {
  const navigation = useNavigation<StackTypes>();

  return (
    <Wrapper>
      <Header
        text="Home"
        onLogOut={() => {
          navigation.navigate("Login");
        }}
      />
      <WrapperContent>
        <WrapperSol />
        <WrapperStatus>
          <Texto>STATUS:</Texto>
          <Tag variant="ALERT" />
        </WrapperStatus>

        <WrapperButton>
          <Button
            variant="filled"
            text="Adicionar Terreiro"
            onPress={() => {}}
          />
        </WrapperButton>
        <WrapperButton>
          <Button
            variant="filled"
            text="Controlar Estações"
            onPress={() => {}}
          />
        </WrapperButton>
      </WrapperContent>
    </Wrapper>
  );
};

export default Home;
