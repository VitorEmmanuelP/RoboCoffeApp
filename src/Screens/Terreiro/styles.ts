import styled from "styled-components/native";
import { styles } from "../../common/styles";
import { TouchableHighlight, TouchableOpacity, Text } from "react-native";

type TextColor = {
  colorText: string;
  opacity: boolean;
};

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
export const WrapperStatus = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const WrapperSwitch = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const Texto = styled(Text)<TextColor>`
  font-size: 25px;
  font-weight: 400;
  padding: 0px 20px;
  color: black;
  opacity: ${({ opacity }: { opacity: boolean }) => (opacity ? 1 : 0.5)};
`;
export const TextoLigado = styled(Text)<TextColor>`
  font-size: 25px;
  font-weight: 400;

  color: #00b37e;
  opacity: ${({ opacity }: { opacity: boolean }) => (opacity ? 1 : 0.5)};
`;
export const TextoDesligado = styled(Text)<TextColor>`
  font-size: 25px;
  font-weight: 400;

  color: #c94444;
  opacity: ${({ opacity }: { opacity: boolean }) => (opacity ? 1 : 0.5)};
`;
