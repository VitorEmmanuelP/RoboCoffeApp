import React from "react";
import { Wrapper, WrapperContente } from "./styles";
import Header from "../../components/Header";
import Notificacao from "../../components/NotificacaoItem";
import { FlatList, View } from "react-native";
import NotificacaoItem from "../../components/NotificacaoItem";

const Notification = () => {
  return (
    <Wrapper>
      <Header onLogOut text="Notifications" />
      <WrapperContente>
        <FlatList
          data={[0, 1, 2, 3, 4, 5]}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => {
            return <View style={{ height: 10 }} />;
          }}
          renderItem={() => {
            return <NotificacaoItem />;
          }}
        />
      </WrapperContente>
    </Wrapper>
  );
};

export default Notification;
