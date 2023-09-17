import styled, { css } from "styled-components/native";
import { styles } from "../../common/styles";
import { TouchableHighlight, TouchableOpacity, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { ButtonProps } from "./types";

export const Wrapper = styled(TouchableOpacity)<ButtonProps>`
  align-items: center;
  justify-content: center;
  padding: 0px 18px;
  border-radius: 10px;

  ${({ variant }: ButtonProps) =>
    variant === "filled" &&
    css`
      height: 60px;
      width: 248px;
      background-color: ${styles.colors.gray_400};
    `}
  ${({ variant }: ButtonProps) =>
    variant === "outlined" &&
    css`
      background-color: transparent;
    `}
  ${({ variant }: ButtonProps) => variant === "underlined" && css``}
`;
export const Texto = styled(Text)<ButtonProps>`
  font-size: 30px;
  font-weight: 400;
  font-family: "Inder-Regular";
  color: ${styles.colors.brow_700};
  ${({ variant }: ButtonProps) =>
    variant === "underlined" &&
    css`
      font-size: 10px;
      text-decoration: underline;
    `}
`;
