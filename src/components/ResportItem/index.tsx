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
const ResportItem = () => {
  const navigation = useNavigation<StackTypes>();

  return (
    <Wrapper
      onPress={() => {
        navigation.navigate("ReportItem");
      }}
    >
      <ProfileImage source={require("../../common/images/reportIcon.png")} />

      <WrapperText>
        <Texto adjustsFontSizeToFit numberOfLines={1}>
          12/09/2023 - 13:00.
        </Texto>
      </WrapperText>

      <Icons tamanho={30} name="keyboard-arrow-right" />
    </Wrapper>
  );
};

export default ResportItem;
