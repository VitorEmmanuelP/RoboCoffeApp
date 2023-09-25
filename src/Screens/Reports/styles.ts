import styled from "styled-components/native";
import { styles } from "../../common/styles";
import { TouchableHighlight, TouchableOpacity, Text } from "react-native";

export const Wrapper = styled.View`
  flex: 1;
  background-color: ${styles.colors.screen_color};
`;
export const WrapperContente = styled.View`
  width: 90%;
  height: 45%;
  border-radius: 10px;
  margin-top: 20px;
  align-self: center;
  align-items: center;
  justify-content: space-around;
  padding: 20px;

  background-color: ${styles.colors.base_white};
`;
export const WrapperButton = styled.View`
  align-items: center;
  margin-top: 20px;
`;
