import styled from "styled-components/native";
import { styles } from "../../common/styles";
import {
  TouchableHighlight,
  TouchableOpacity,
  Text,
  KeyboardAvoidingView,
  View,
} from "react-native";

export const Wrapper = styled.View`
  flex: 1;
  background-color: ${styles.colors.screen_color};
`;

export const WrapperContente = styled.View`
  width: 90%;
  height: 55%;
  border-radius: 10px;
  margin-top: 20px;
  align-self: center;
  align-items: center;

  padding: 20px;
  background-color: ${styles.colors.base_white};
`;
export const WrapperSelected = styled(Text)`
  margin: 20px 0px;
`;
export const Texto = styled(Text)`
  font-size: 17px;
  font-weight: 400;

  color: black;
`;
export const WrapperButton = styled.View`
  align-items: center;

  margin: 50px 0px;
`;
