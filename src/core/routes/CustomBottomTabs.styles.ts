import { View } from "react-native";

import { styles } from "../../common/styles";
import styled from "styled-components/native";
import { type EdgeInsets } from "react-native-safe-area-context";

type TextStyleProp = { focused: boolean };
export type WrapperProps = {
  insets: EdgeInsets;
};

export const Wrapper = styled.View<WrapperProps>`
  flex-direction: row;
  justify-content: space-around;
  padding: 5px 10px;
  background-color: ${styles.colors.green_400};
`;
export const WrapperTabBar = styled.View`
  align-items: center;
  justify-content: space-between;

  margin: 10px;
`;
export const WrapperTab = styled.View`
  align-items: center;
  justify-content: center;
`;
export const Texto = styled.Text<TextStyleProp>`
  color: ${({ focused }: { focused: boolean }) =>
    focused ? styles.colors.base_white : styles.colors.gray_400};
  margin-top: 5px;
  font-size: 10px;
  text-transform: uppercase;
`;
