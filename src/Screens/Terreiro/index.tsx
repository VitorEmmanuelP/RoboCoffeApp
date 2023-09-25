import { View, Text } from "react-native";
import { Switch } from "react-native";

import React, { useState } from "react";
import {
  IdText,
  Texto,
  TextoDesligado,
  TextoLigado,
  Wrapper,
  WrapperContente,
  WrapperStatus,
  WrapperSwitch,
} from "./styles";
import { useNavigation } from "@react-navigation/native";
import { StackTypes } from "../../core/routes";
import Header from "../../components/Header";
import Tag from "../../components/Tag";
import { styles } from "../../common/styles";
import Button from "../../components/Button";
const Terreiro = () => {
  const navigation = useNavigation<StackTypes>();
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <Wrapper>
      <Header onLogOut onBack text="Terreiro" />
      <WrapperContente>
        <IdText>1D</IdText>
        <WrapperStatus>
          <Texto colorText={styles.colors.base_white} opacity={!isEnabled}>
            STATUS:
          </Texto>
          <Tag variant="ALERT" size="BIG" />
        </WrapperStatus>
        <WrapperSwitch>
          <TextoDesligado opacity={!isEnabled}>Desligado</TextoDesligado>
          <Switch
            style={{
              marginLeft: 20,
              marginRight: 20,
            }}
            trackColor={{ false: "#D6D3D3", true: "#D6D3D3" }}
            thumbColor={
              isEnabled ? styles.colors.green_400 : styles.colors.red_100
            }
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
          <TextoLigado opacity={isEnabled}>Ligado</TextoLigado>
        </WrapperSwitch>
        <Button variant="remove" text="Apagar" onPress={() => {}} />
      </WrapperContente>
    </Wrapper>
  );
};

export default Terreiro;
