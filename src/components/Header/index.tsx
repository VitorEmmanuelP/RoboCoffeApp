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
import { MaterialIcons } from "@expo/vector-icons";
import { styles } from "../../common/styles";

const Header = ({ text }: HeaderProps) => {
  return (
    <WrapperHeader>
      <WrapperIcon>
        <Icons tamanho={30} name="keyboard-arrow-left" />
        <Icons tamanho={25} name="logout" />
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
