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
  margin: 5px 0px;
  border-radius: 10px;

  ${({ variant }: ButtonProps) =>
    variant === "filled" &&
    css`
      height: 60px;
      width: 248px;
      background-color: ${styles.colors.green_400};
    `}
  ${({ variant }: ButtonProps) =>
    variant === "outlined" &&
    css`
      background-color: transparent;
    `}
  ${({ variant }: ButtonProps) =>
    variant === "underlined" &&
    css`
      height: 40px;
    `}
  ${({ variant }: ButtonProps) =>
    variant === "add" &&
    css`
      height: 60px;
      width: 248px;
      background-color: transparent;
      border-width: 1.5px;
      border-color: ${styles.colors.green_700};
    `}
  ${({ variant }: ButtonProps) =>
    variant === "remove" &&
    css`
      height: 60px;
      width: 248px;
      background-color: transparent;
      border-width: 1.5px;
      border-color: ${styles.colors.red_100};
    `}
`;
export const Texto = styled(Text)<ButtonProps>`
  font-weight: bold;
  text-transform: uppercase;
  color: ${styles.colors.base_white};
  ${({ variant }: ButtonProps) =>
    variant === "underlined" &&
    css`
      font-size: 12px;
      color: ${styles.colors.green_700};

      text-decoration: underline;
    `}

  ${({ variant }: ButtonProps) =>
    variant === "add" &&
    css`
      font-size: 15px;

      color: ${styles.colors.green_700};
    `}
  ${({ variant }: ButtonProps) =>
    variant === "filled" &&
    css`
      font-size: 15px;
    `}
  ${({ variant }: ButtonProps) =>
    variant === "remove" &&
    css`
      font-size: 15px;
      color: ${styles.colors.red_100};
    `}
`;
