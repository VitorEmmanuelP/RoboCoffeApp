import { View, Text, Image } from "react-native";
import React from "react";
import { styles } from "../../common/styles";
import {
  ProfileImage,
  TextHeader,
  Wrapper,
  WrapperHeader,
  WrapperImage,
  WrapperTouchable,
} from "./styles";
import Header from "../../components/Header";

const Home = () => {
  return (
    <Wrapper>
      <Header text="Home" />
    </Wrapper>
  );
};

export default Home;
