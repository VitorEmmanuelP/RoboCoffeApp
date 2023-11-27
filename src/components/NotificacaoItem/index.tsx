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

type NotificationProps = {
  dados: {
    id: string;
    title: string;
    idTerreiro: string;
    text: string;
    data: string;
  };
};

const NotificacaoItem = ({ dados }: NotificationProps) => {
  const navigation = useNavigation<StackTypes>();
  return (
    <Wrapper
      onPress={() => {
        navigation.navigate("Notification", { data: dados });
      }}
    >
      <IdText>{dados.idTerreiro}</IdText>
      <WrapperText>
        <Texto numberOfLines={2}>{dados.title}</Texto>
      </WrapperText>
      <WrapperDateAndTime>
        <DateAndTime>{dados.data}</DateAndTime>
      </WrapperDateAndTime>
      <Icons tamanho={30} name="keyboard-arrow-right" />
    </Wrapper>
  );
};

export default NotificacaoItem;
