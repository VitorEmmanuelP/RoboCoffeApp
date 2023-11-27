import { Text, TouchableWithoutFeedback, View } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import styled from "styled-components/native";

export const Wrapper = styled(View)``;
export const WrapperTouchable = styled(TouchableWithoutFeedback)``;

export const WrapperBox = styled(View)`
  border-bottom-width: 1px;
`;

export const WrapperDatePicker = styled(View)`
  flex-direction: row;
  align-items: center;
  padding: 5px 10px 5px 0px;
`;

export const Texto = styled(Text)`
  font-size: 12px;

  font-weight: 400;
  letter-spacing: 0.15px;
  color: rgb(201, 207, 207);
`;

export const TextoDatePicker = styled(Text)`
  font-size: 16px;
  font-weight: 400;

  letter-spacing: 0.15px;
  color: rgb(105, 119, 119);
  padding-right: 20px;
`;

export const Icon = styled(MaterialCommunityIcons).attrs({
  size: 20,
  color: "rgb(201, 207, 207)",
})``;
