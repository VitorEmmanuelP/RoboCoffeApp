import styled, { css } from "styled-components/native";
import { styles } from "../../common/styles";
import { TouchableHighlight, TouchableOpacity, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { WrapperProps } from "./types";

export const Wrapper = styled.TouchableOpacity`
  width: 310px;
  height: 80px;
  padding: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  border: 1.5px solid ${styles.colors.gray_400};
  background-color: ${styles.colors.screen_color};
  border-radius: 15px;
`;
export const WrapperText = styled.View`
  margin: 10px;
  width: 200px;
  height: 65px;
  margin-top: 30px;
  align-items: center;
`;
export const WrapperDateAndTime = styled.View`
  position: absolute;
  bottom: 0;
  right: 0;
`;

export const IdText = styled.Text`
  font-size: 30px;
  font-weight: 400;
  color: ${styles.colors.green_700};
  margin: 0px 10px;
`;
export const DateAndTime = styled.Text`
  font-size: 12px;
  font-weight: 400;
  color: ${styles.colors.red_100};
  margin: 5px 25px;
`;

export const Texto = styled.Text`
  font-size: 25px;
  font-weight: 400;
  color: ${styles.colors.brow_800};
`;

export const Icons = styled(MaterialIcons).attrs(
  ({ tamanho }: { tamanho: number }) => ({
    size: tamanho,
    color: styles.colors.gray_400,
  })
)`
  margin: 10px;
`;
