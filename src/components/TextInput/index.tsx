import { View, Text, TextInput } from "react-native";
import React, { useState } from "react";
import { styles } from "../../common/styles";
import { MaterialIcons } from "@expo/vector-icons";
import {
  Icons,
  Input,
  ShowIcon,
  Wrapper,
  WrapperLeft,
  WrapperRight,
  WrapperTouchable,
} from "./styles";
import { TextInputProps } from "./types";

const TextField = ({
  iconRight,
  placeholder,
  hidePassword,
}: TextInputProps) => {
  const [show, setShow] = useState(false);
  return (
    <Wrapper>
      <WrapperRight>
        {iconRight && <Icons name={iconRight} />}
        <Input
          secureTextEntry={hidePassword ? !show : false}
          inputMode={hidePassword && "decimal"}
          keyboardType={hidePassword && "decimal-pad"}
          placeholder={placeholder}
          placeholderTextColor={styles.colors.brow_700}
        />
      </WrapperRight>

      {hidePassword && (
        <WrapperTouchable onPress={() => setShow((prev) => !prev)}>
          <ShowIcon name={show ? "eye" : "eye-with-line"} />
        </WrapperTouchable>
      )}
    </Wrapper>
  );
};

export default TextField;
