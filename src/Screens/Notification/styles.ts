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
  margin-top: 20px;
  align-self: center;
  align-items: center;
  justify-content: space-around;
  padding: 20px;
  background-color: ${styles.colors.base_white};
`;
export const IdText = styled.Text`
  font-size: 30px;
  font-weight: 400;
  color: ${styles.colors.brow_700};
`;
export const WrapperDateAndTime = styled.View`
  position: absolute;
  top: 0;
  right: 0;
`;
export const DateAndTime = styled.Text`
  font-size: 12px;
  font-weight: 400;
  color: ${styles.colors.gray_700};
  margin: 5px 25px;
`;

export const Texto = styled(Text)`
  font-size: 15px;
  font-weight: 400;
  padding: 0px 20px;
  color: black;
`;
