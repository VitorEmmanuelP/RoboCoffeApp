import { View, Text } from "react-native";
import React from "react";
import { Texto, Wrapper } from "./styles";
import { TagProps } from "./types";

const Tag = ({ variant, size }: TagProps) => {
  return (
    <Wrapper variant={variant} size={size}>
      <Texto>
        {variant === "OK"
          ? "OK"
          : variant === "OFF"
          ? "OFF"
          : variant === "ERROR"
          ? "ERROR"
          : "ALERT"}
      </Texto>
    </Wrapper>
  );
};

export default Tag;
