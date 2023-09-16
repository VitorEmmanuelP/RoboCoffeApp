import styled from "styled-components/native";
import { styles } from "../../common/styles";
import { TouchableHighlight, TouchableOpacity } from "react-native";

export const Wrapper = styled.View`
  flex: 1;
  background-color: ${styles.colors.gray_700};
`;

export const WrapperHeader = styled.View`
  height: 35%;
  align-items: center;
  background-color: ${styles.colors.gray_500};
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
`;
export const WrapperTouchable = styled(TouchableOpacity)``;

export const WrapperImage = styled.View`
  height: 150px;
  width: 150px;
  margin-top: 20px;
  margin-bottom: 20px;
`;
export const TextHeader = styled.Text`
  font-size: 50px;
  font-weight: 400;
  color: ${styles.colors.TEXT_COLOR};
`;

export const ProfileImage = styled.Image`
  width: 100%;
  height: 100%;
`;
