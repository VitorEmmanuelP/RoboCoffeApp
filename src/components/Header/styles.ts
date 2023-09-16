import styled from "styled-components/native";
import { styles } from "../../common/styles";
import { TouchableHighlight, TouchableOpacity, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export const WrapperHeader = styled.View`
  height: 35%;
  background-color: ${styles.colors.gray_500};
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
`;
export const WrapperIcon = styled.View`
  flex-direction: row;
  justify-content: space-between;
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
`;
export const WrapperText = styled.View`
  width: 100%;
  align-items: center;
`;

export const TextHeader = styled(Text)`
  font-size: 50px;
  font-weight: 400;
  color: ${styles.colors.TEXT_COLOR};
`;

export const Icons = styled(MaterialIcons).attrs(
  ({ tamanho }: { tamanho: number }) => ({
    size: tamanho,
    color: styles.colors.gray_200,
  })
)`
  margin: 10px 10px 0px 10px;
`;
