import { View, Text } from "react-native";
import React from "react";
import {
  Icons,
  ProfileImage,
  TextHeader,
  WrapperHeader,
  WrapperIcon,
  WrapperImage,
  WrapperText,
  WrapperTouchable,
} from "./styles";
import { HeaderProps } from "./types";

const Header = ({ text, onBack, onLogOut }: HeaderProps) => {
  return (
    <WrapperHeader>
      <WrapperIcon>
        {
          <WrapperTouchable onPress={onBack}>
            {onBack && <Icons tamanho={30} name="keyboard-arrow-left" />}
          </WrapperTouchable>
        }
        <WrapperTouchable onPress={onLogOut}>
          <Icons tamanho={25} name="logout" />
        </WrapperTouchable>
      </WrapperIcon>
      <WrapperImage>
        <WrapperTouchable>
          <ProfileImage source={require("../../common/images/profile.png")} />
        </WrapperTouchable>
      </WrapperImage>
      <WrapperText>
        <TextHeader adjustsFontSizeToFit numberOfLines={1}>
          {text}
        </TextHeader>
      </WrapperText>
    </WrapperHeader>
  );
};

export default Header;
