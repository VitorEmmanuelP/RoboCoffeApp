import styled from "styled-components/native";
import { styles } from "../../common/styles";
import { TouchableHighlight, TouchableOpacity, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

export const Wrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 5px 30px;
  padding: 3px 10px;
  border: 1.5px solid ${styles.colors.BORDER_COLOR};
  width: 300px;
  border-radius: 4px;
`;

export const WrapperRight = styled.View`
  width: 90%;
  flex-direction: row;
`;
export const WrapperLeft = styled.View``;

export const WrapperTouchable = styled(TouchableOpacity)``;

export const Input = styled.TextInput`
  width: 90%;
  color: ${styles.colors.brow_700};
`;

export const Icons = styled(MaterialIcons).attrs({
  size: 24,
  color: styles.colors.brow_700,
})`
  margin-right: 10px;
`;

export const ShowIcon = styled(Entypo).attrs({
  size: 24,
  color: styles.colors.brow_700,
})`
  margin-right: 5px;
`;
