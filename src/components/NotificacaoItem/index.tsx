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
import { useNavigation } from "@react-navigation/native";
import { StackTypes } from "../../core/routes";
const NotificacaoItem = () => {
  const navigation = useNavigation<StackTypes>();
  return (
    <Wrapper
      onPress={() => {
        navigation.navigate("Notification");
      }}
    >
      <IdText>1A</IdText>
      <WrapperText>
        <Texto adjustsFontSizeToFit numberOfLines={2}>
          Lorem Ipsum is simply dummy text of the printi...
        </Texto>
      </WrapperText>
      <WrapperDateAndTime>
        <DateAndTime>10:30, 10/09/23</DateAndTime>
      </WrapperDateAndTime>
      <Icons tamanho={30} name="keyboard-arrow-right" />
    </Wrapper>
  );
};

export default NotificacaoItem;
