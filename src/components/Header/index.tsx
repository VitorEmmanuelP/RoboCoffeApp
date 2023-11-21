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
import { StackTypes } from "../../core/routes";
import { useNavigation } from "@react-navigation/native";

const Header = ({ text, onBack, onLogOut, onProfile, image }: HeaderProps) => {
  const navigation = useNavigation<StackTypes>();

  const handleProfleClick = () => {
    if (onProfile) {
      onProfile();
    } else {
      navigation.navigate("Profile");
    }
  };
  const handleOnBack = () => {
    navigation.goBack();
  };
  const handleOnLogOut = () => {
    navigation.replace("Login");
  };
  return (
    <WrapperHeader>
      <WrapperIcon onBack={onBack}>
        {onBack && (
          <WrapperTouchable onPress={handleOnBack}>
            <Icons tamanho={30} name="keyboard-arrow-left" />
          </WrapperTouchable>
        )}
        {onLogOut && (
          <WrapperTouchable onPress={handleOnLogOut}>
            <Icons tamanho={25} name="logout" />
          </WrapperTouchable>
        )}
      </WrapperIcon>
      <WrapperImage>
        <WrapperTouchable onPress={handleProfleClick}>
          <ProfileImage
            source={
              image
                ? { uri: image }
                : require("../../common/images/profile.png")
            }
          />
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
