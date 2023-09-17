import styled from "styled-components/native";
import { styles } from "../../common/styles";
import { TouchableHighlight, TouchableOpacity, Text } from "react-native";

export const Wrapper = styled.View`
  flex: 1;
  background-color: ${styles.colors.gray_600};
`;
export const WrapperSol = styled.View`
  width: 200px;
  height: 200px;
  background-color: ${styles.colors.green_700};
`;
export const WrapperStatus = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 15px;
`;
export const Texto = styled(Text)`
  font-size: 25px;
  font-weight: 400;
  font-family: "Inder-Regular";
  color: ${styles.colors.brow_700};

  margin-right: 40px;
`;
export const WrapperContent = styled.View`
  align-items: center;
`;
export const WrapperButton = styled.View`
  margin-top: 20px;
`;
