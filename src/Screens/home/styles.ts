import styled from "styled-components/native";
import { styles } from "../../common/styles";
import { TouchableHighlight, TouchableOpacity, Text } from "react-native";

export const Wrapper = styled.View`
  flex: 1;
  background-color: ${styles.colors.screen_color};
`;
export const WrapperSol = styled.View`
  margin-top: 25px;
  margin-bottom: 25px;
  align-items: center;
`;
export const WrapperStatus = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 15px;
`;
export const TextTime = styled(Text)`
  font-size: 40px;
  font-weight: 400;
  color: ${styles.colors.brow_700};
  position: absolute;
  transform: translateY(110px);
`;
export const Texto = styled(Text)`
  font-size: 25px;
  font-weight: 400;

  color: ${styles.colors.brow_700};

  margin-right: 40px;
`;
export const WrapperContent = styled.View`
  align-items: center;
`;
export const WrapperButton = styled.View`
  margin-top: 20px;
`;
