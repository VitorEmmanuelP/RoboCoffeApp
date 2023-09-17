import { View, Text, TextInput } from "react-native";
import React from "react";
import {
  ProfileImage,
  Wrapper,
  WrapperButton,
  WrapperContent,
  WrapperHeader,
  WrapperImage,
  WrapperInputs,
} from "./styles";
import { styles } from "../../common/styles";
import { MaterialIcons } from "@expo/vector-icons";
import TextField from "../../components/TextInput";
import Button from "../../components/Button";
import { useNavigation } from "@react-navigation/native";
import { StackTypes } from "../../core/routes";

const Login = () => {
  const navigation = useNavigation<StackTypes>();
  return (
    <Wrapper>
      <WrapperHeader>
        <WrapperImage>
          <ProfileImage source={require("../../common/images/logo.png")} />
        </WrapperImage>
      </WrapperHeader>
      <WrapperContent>
        <WrapperInputs>
          <TextField placeholder="Email" iconRight="person" />
        </WrapperInputs>
        <WrapperInputs>
          <TextField placeholder="Password" iconRight="lock" hidePassword />
        </WrapperInputs>
        <WrapperButton>
          <Button
            variant="outlined"
            text="Entrar"
            onPress={() => {
              navigation.navigate("Home");
            }}
          />
        </WrapperButton>
        <WrapperButton>
          <Button
            variant="underlined"
            text="Esqueceu a senha?"
            onPress={() => {}}
          />
        </WrapperButton>
      </WrapperContent>
    </Wrapper>
  );
};

export default Login;
