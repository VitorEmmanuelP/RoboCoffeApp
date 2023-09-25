import React from "react";
import { Wrapper, WrapperButton, WrapperContente } from "./styles";
import Header from "../../components/Header";
import Reporte from "../../components/ResportItem";
import Button from "../../components/Button";
import { FlatList, View } from "react-native";
import ResportItem from "../../components/ResportItem";
import { useNavigation } from "@react-navigation/native";
import { StackTypes } from "../../core/routes";

const Reports = () => {
  const navigation = useNavigation<StackTypes>();

  return (
    <Wrapper>
      <Header onLogOut text="Reports" />
      <WrapperContente>
        <FlatList
          data={[0, 1, 2, 3, 4, 5]}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => {
            return <View style={{ height: 10 }} />;
          }}
          renderItem={() => {
            return <ResportItem />;
          }}
        />
      </WrapperContente>
      <WrapperButton>
        <Button
          variant="filled"
          text="Criar Relatório"
          onPress={() => {
            navigation.navigate("CriarRelatorio");
          }}
        />
      </WrapperButton>
    </Wrapper>
  );
};

export default Reports;
