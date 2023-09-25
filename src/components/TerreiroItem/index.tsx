import { View, Text } from "react-native";
import React from "react";
import {
  DateAndTime,
  Icons,
  IdText,
  Texto,
  Wrapper,
  WrapperDateAndTime,
  WrapperText,
} from "./styles";
import Tag from "../Tag";
import { useNavigation } from "@react-navigation/native";
import { StackTypes } from "../../core/routes";

const TerreiroItem = () => {
  const navigation = useNavigation<StackTypes>();

  return (
    <Wrapper
      onPress={() => {
        navigation.navigate("Terreiro");
      }}
    >
      <IdText>1A</IdText>
      <WrapperText>
        <Tag variant="OK" size="SMALL" />
      </WrapperText>

      <Icons tamanho={30} name="keyboard-arrow-right" />
    </Wrapper>
  );
};

export default TerreiroItem;
