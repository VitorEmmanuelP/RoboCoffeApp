import { View, Text } from "react-native";
import React from "react";
import {
  DateAndTime,
  IdText,
  Texto,
  Wrapper,
  WrapperContente,
  WrapperDateAndTime,
  WrapperText,
} from "./styles";
import Header from "../../components/Header";
import { useAppSelector } from "../../storage/redux/store";
import { selectProfileUrl } from "../../storage/redux/app/appSlice";
import { StackNavigation } from "../../core/routes/routes.types";
import { type RouteProp, useRoute } from "@react-navigation/native";

const Notification = () => {
  const image = useAppSelector(selectProfileUrl);
  type TerreiroRouteProp = RouteProp<StackNavigation, "Notification">;
  const route = useRoute<TerreiroRouteProp>();

  const dados = route.params.data;

  return (
    <Wrapper>
      <Header onBack onLogOut text="Notification" image={image} />
      <WrapperContente>
        <WrapperDateAndTime>
          <DateAndTime>{dados.data}</DateAndTime>
        </WrapperDateAndTime>
        <WrapperText>
          <IdText>{dados.title}</IdText>
          <Texto>{dados.text}</Texto>
        </WrapperText>
      </WrapperContente>
    </Wrapper>
  );
};

export default Notification;
