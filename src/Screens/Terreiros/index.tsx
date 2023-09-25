import { View, Text, FlatList } from "react-native";
import React from "react";
import { Texto, Title, Wrapper, WrapperContente, WrapperText } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { StackTypes } from "../../core/routes";
import Header from "../../components/Header";
import ReportItem from "../../components/NotificacaoItem";
import Reporte from "../../components/ResportItem";
import TerreiroItem from "../../components/TerreiroItem";
import Button from "../../components/Button";
const Terreiros = () => {
  const navigation = useNavigation<StackTypes>();

  return (
    <Wrapper>
      <Header onLogOut onBack text="Terreiros" />
      <WrapperContente>
        <FlatList
          data={[0, 1, 2, 3, 4, 5]}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => {
            return <View style={{ height: 10 }} />;
          }}
          renderItem={() => {
            return <TerreiroItem />;
          }}
        />
        <Button text="Deligar Todos" variant="remove" onPress={() => {}} />
      </WrapperContente>
    </Wrapper>
  );
};

export default Terreiros;
