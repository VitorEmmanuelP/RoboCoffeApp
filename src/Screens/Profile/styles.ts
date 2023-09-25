import styled from "styled-components/native";
import { styles } from "../../common/styles";
import { TouchableHighlight, TouchableOpacity, Text } from "react-native";

export const Wrapper = styled.View`
  flex: 1;
  background-color: ${styles.colors.screen_color};
`;

export const WrapperContente = styled.View`
  width: 90%;
  height: 55%;
  border-radius: 10px;
  margin-top: 10px;
  align-self: center;
  align-items: center;
  justify-content: space-around;
  padding: 20px;
  background-color: ${styles.colors.base_white};
`;
export const WrapperText = styled.View`
  align-items: center;
  padding: 20px 0px;
`;
export const Title = styled.Text`
  font-size: 25px;
  font-weight: 400;
  color: ${styles.colors.brow_800};
`;
export const Texto = styled.Text`
  font-size: 20px;
  font-weight: 400;
  color: ${styles.colors.brow_700};
`;
