import { View, Text } from "react-native";
import React from "react";
import {
  DateAndTime,
  IdText,
  Texto,
  Wrapper,
  WrapperContente,
  WrapperDateAndTime,
} from "./styles";
import Header from "../../components/Header";

const Notification = () => {
  return (
    <Wrapper>
      <Header onLogOut text="Notification" />
      <WrapperContente>
        <WrapperDateAndTime>
          <DateAndTime>10:30, 10/09/23</DateAndTime>
        </WrapperDateAndTime>
        <IdText>1D</IdText>
        <Texto>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Texto>
      </WrapperContente>
    </Wrapper>
  );
};

export default Notification;
