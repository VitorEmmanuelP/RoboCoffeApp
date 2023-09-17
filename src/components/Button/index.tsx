import React, { useState } from "react";

import { Texto, Wrapper } from "./styles";
import { ButtonProps } from "./types";
import { TouchableOpacity } from "react-native";
const Button = ({ variant, text, onPress }: ButtonProps) => {
  return (
    <Wrapper variant={variant} onPress={onPress}>
      <Texto variant={variant} adjustsFontSizeToFit numberOfLines={1}>
        {text}
      </Texto>
    </Wrapper>
  );
};

export default Button;
