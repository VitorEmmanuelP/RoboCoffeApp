import { View, Text } from "react-native";
import React from "react";
import {
  Wrapper,
  WrapperContente,
  WrapperTextInput,
  WrapperTextInputs,
} from "./styles";
import Header from "../../components/Header";
import TextField from "../../components/TextInput";
import Button from "../../components/Button";

const AddTerrain = () => {
  return (
    <Wrapper>
      <Header onLogOut onBack text="Add. Terreiro" />
      <WrapperContente>
        <WrapperTextInputs>
          <WrapperTextInput>
            <TextField placeholder="Nome do terreiro" />
          </WrapperTextInput>
          <WrapperTextInput>
            <TextField placeholder="Ip do terreiro" />
          </WrapperTextInput>
        </WrapperTextInputs>

        <Button text="Adicionar " variant="add" onPress={() => {}} />
      </WrapperContente>
    </Wrapper>
  );
};

export default AddTerrain;
