import { View, Text } from "react-native";
import React from "react";
import { Texto, Wrapper, WrapperButton, WrapperContente } from "./styles";
import Header from "../../components/Header";
import Button from "../../components/Button";

const Report = () => {
  return (
    <Wrapper>
      <Header onLogOut text="Report" />
      <WrapperContente>
        <Texto>Creator: Vitor Emmanuel</Texto>
        <Texto>Which Terrain: All</Texto>
        <Texto>Date and Time: 10/09/2023 - 16:00</Texto>
        <Texto>Time Running: 4h</Texto>
        <Texto>Type: PDF</Texto>
        <WrapperButton>
          <Button variant="add" text="Download PDF" onPress={() => {}} />
        </WrapperButton>
      </WrapperContente>
    </Wrapper>
  );
};

export default Report;
