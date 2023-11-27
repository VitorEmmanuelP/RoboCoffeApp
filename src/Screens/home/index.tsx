import { Image } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import Header from "../../components/Header";
import {
  TextTime,
  Texto,
  Wrapper,
  WrapperButton,
  WrapperContent,
  WrapperSol,
  WrapperStatus,
} from "./styles";
import { StackTypes } from "../../core/routes";
import Button from "../../components/Button";
import Tag from "../../components/Tag";
import Svg, { Path } from "react-native-svg";
import { useAppSelector } from "../../storage/redux/store";
import { selectProfileUrl } from "../../storage/redux/app/appSlice";

const Home = () => {
  const navigation = useNavigation<StackTypes>();
  const [currentTime] = useState(new Date());

  const image = useAppSelector(selectProfileUrl);

  const formattedTime = currentTime.toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <Wrapper>
      <Header text="Home" onLogOut image={image} />
      <WrapperContent>
        <WrapperSol>
          <Svg width="303" height="146" viewBox="0 0 303 146" fill="none">
            <Path
              d="M1.00281 145.752C1.00284 -50.2477 302.003 -44.7476 302.003 145.752"
              stroke="#7C7C8A"
            />
          </Svg>

          <Image
            source={require("../../common/images/sol.png")}
            style={{
              width: 50,
              height: 50,
              position: "absolute",
              transform: [{ translateX: 0 }, { translateY: -25 }],
            }}
          />

          <TextTime>{formattedTime}</TextTime>
        </WrapperSol>

        <WrapperStatus>
          <Texto>STATUS:</Texto>
          <Tag variant="OK" size="BIG" />
        </WrapperStatus>

        <WrapperButton>
          <Button
            variant="filled"
            text="Adicionar Terreiro"
            onPress={() => {
              navigation.navigate("AddTerrain");
            }}
          />
        </WrapperButton>
        <WrapperButton>
          <Button
            variant="filled"
            text="Controlar Estações"
            onPress={() => {
              navigation.navigate("Terreiros");
            }}
          />
        </WrapperButton>
      </WrapperContent>
    </Wrapper>
  );
};

export default Home;
