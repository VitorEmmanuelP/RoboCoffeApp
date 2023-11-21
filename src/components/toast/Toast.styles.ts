import { MaterialIcons } from "@expo/vector-icons";

import styled from "styled-components/native";
import { styles } from "../../common/styles";

export const Wrapper = styled.View`
  background-color: ${styles.colors.base_white};
  border-radius: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 15px 35px;
`;

export const Texto = styled.Text`
  color: ${({ color }: { color: string }) => color};
  padding-right: 8px;
`;

export const Icon = styled(MaterialIcons).attrs(() => ({
  size: 18,
}))`
  padding-right: 8px;
`;
