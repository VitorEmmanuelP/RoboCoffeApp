import { View, Text } from "react-native";
import React from "react";
import {
  DateAndTime,
  Icons,
  IdText,
  ProfileImage,
  Texto,
  Wrapper,
  WrapperDateAndTime,
  WrapperText,
} from "./styles";
import { useNavigation } from "@react-navigation/native";
import { StackTypes } from "../../core/routes";
type Dados = {
  dados: {
    id: string;
    criador: string;
    funcionamento: string;
    data: string;
    terreno: string;
  };
};

const ResportItem = ({ dados }: Dados) => {
  const navigation = useNavigation<StackTypes>();

  return (
    <Wrapper
      onPress={() => {
        navigation.navigate("ReportItem", { data: dados });
      }}
    >
      <ProfileImage source={require("../../common/images/reportIcon.png")} />

      <WrapperText>
        <Texto adjustsFontSizeToFit numberOfLines={1}>
          {dados.terreno} - {dados.data}
        </Texto>
      </WrapperText>

      <Icons tamanho={30} name="keyboard-arrow-right" />
    </Wrapper>
  );
};

export default ResportItem;
