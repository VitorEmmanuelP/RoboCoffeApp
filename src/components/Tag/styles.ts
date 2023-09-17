import styled, { css } from "styled-components/native";
import { styles } from "../../common/styles";
import { TouchableHighlight, TouchableOpacity, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { TagProps } from "./types";

export const Wrapper = styled.View<TagProps>`
  width: 130px;
  height: 50px;
  align-items: center;
  justify-content: center;
  padding: 0px 18px;
  border-radius: 10px;

  ${({ variant }: TagProps) =>
    variant === "OK" &&
    css`
      background-color: ${styles.colors.green_700};
    `}
  ${({ variant }: TagProps) =>
    variant === "OFF" &&
    css`
      background-color: ${styles.colors.blue_700};
    `}
  ${({ variant }: TagProps) =>
    variant === "ERROR" &&
    css`
      background-color: ${styles.colors.red_100};
    `}
  ${({ variant }: TagProps) =>
    variant === "ALERT" &&
    css`
      background-color: ${styles.colors.yellow_100};
    `}
`;
export const Texto = styled(Text)`
  font-size: 25px;
  font-weight: 400;
  font-family: "Inder-Regular";
  color: ${styles.colors.base_white};
`;
