import styled from "styled-components/native";
import { styles } from "../../common/styles";

export const Wrapper = styled.View`
  flex: 1;
  background-color: ${styles.colors.gray_600};
`;
export const WrapperHeader = styled.View`
  height: 310px;
  background-color: ${styles.colors.gray_400};
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
`;
export const WrapperContent = styled.View`
  width: 100%;
  align-items: center;
`;
export const WrapperInputs = styled.View`
  margin-top: 30px;
  align-items: center;
`;
export const WrapperButton = styled.View`
  margin-top: 60px;
`;

export const TextField = styled.TextInput``;

export const WrapperImage = styled.View`
  align-items: center;
`;
export const ProfileImage = styled.Image`
  width: 300px;
  height: 250px;
`;
