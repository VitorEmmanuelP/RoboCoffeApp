import styled, { css } from "styled-components/native";
import { styles } from "../../common/styles";
import { TouchableHighlight, TouchableOpacity, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { WrapperProps } from "./types";

export const WrapperHeader = styled.View`
  height: 310px;
  background-color: ${styles.colors.green_400};
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
`;
export const WrapperIcon = styled.View<WrapperProps>`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-left: 0px;
  ${({ onBack }: WrapperProps) =>
    !onBack &&
    css`
      margin-left: auto;
    `}
`;
export const WrapperTouchable = styled(TouchableOpacity)`
  align-items: center;
`;

export const WrapperImage = styled.View`
  height: 150px;
  align-items: center;
  margin-bottom: 20px;
`;
export const ProfileImage = styled.Image`
  width: 150px;
  height: 150px;

  border-radius: 100px;
`;
export const WrapperText = styled.View`
  width: 100%;
  align-items: center;
`;

export const TextHeader = styled(Text)`
  font-size: 40px;
  font-weight: bold;

  color: ${styles.colors.base_white};
`;

export const Icons = styled(MaterialIcons).attrs(
  ({ tamanho }: { tamanho: number }) => ({
    size: tamanho,
    color: styles.colors.gray_200,
  })
)`
  margin: 10px 10px 0px 10px;
`;
