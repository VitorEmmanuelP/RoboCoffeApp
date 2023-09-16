import { View, Text } from "react-native";
import React from "react";
import {
  ProfileImage,
  TextHeader,
  WrapperHeader,
  WrapperImage,
  WrapperText,
  WrapperTouchable,
} from "./styles";
import { HeaderProps } from "./types";

const Header = ({ text }: HeaderProps) => {
  return (
    <WrapperHeader>
      <WrapperTouchable>
        <WrapperImage>
          <ProfileImage source={require("../../common/images/profile.png")} />
        </WrapperImage>
      </WrapperTouchable>
      <WrapperText>
        <TextHeader adjustsFontSizeToFit numberOfLines={1}>
          {text}
        </TextHeader>
      </WrapperText>
    </WrapperHeader>
  );
};

export default Header;
