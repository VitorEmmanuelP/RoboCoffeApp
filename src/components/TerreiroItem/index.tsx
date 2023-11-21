import React from "react";
import { Icons, IdText, Wrapper, WrapperText } from "./styles";
import Tag from "../Tag";
import { useNavigation } from "@react-navigation/native";
import { StackTypes } from "../../core/routes";

const TerreiroItem = ({
  id,
  status,
  onPress,
}: {
  id: string;
  status: string;
  onPress: () => void;
}) => {
  const statusText = status.toUpperCase();

  return (
    <Wrapper
      onPress={() => {
        onPress();
      }}
    >
      <IdText>{id}</IdText>
      <WrapperText>
        <Tag variant={statusText} size="SMALL" />
      </WrapperText>

      <Icons tamanho={30} name="keyboard-arrow-right" />
    </Wrapper>
  );
};

export default TerreiroItem;
