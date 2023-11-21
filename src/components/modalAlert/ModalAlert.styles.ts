import styled from "styled-components/native";

import { type ButtonProps } from "./ModalAlert.types";

export const Wrapper = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
  padding-bottom: 70px;
`;
export const WrapperContent = styled.View`
  width: 90%;
  height: 200px;
  align-items: center;
  justify-content: space-around;
  background-color: white;
  border-radius: 5px;
`;

export const WrapperText = styled.View`
  width: 95%;
  align-items: center;
`;

export const WrapperRow = styled.View`
  flex-direction: row;
  width: 100%;

  justify-content: space-around;
`;

export const Button = styled.TouchableOpacity<ButtonProps>`
  align-items: center;
  justify-content: center;
  background-color: ${({ backColor }) => backColor};
  width: 40%;
  height: 40px;
  border-radius: 5px;
`;
export const TextButton = styled.Text`
  color: white;

  font-size: 14px;
  font-weight: 700;
`;
