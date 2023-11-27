import React from "react";
import { Texto, Wrapper, WrapperButton, WrapperContente } from "./styles";
import Header from "../../components/Header";
import Button from "../../components/Button";
import { useAppSelector } from "../../storage/redux/store";
import { selectProfileUrl } from "../../storage/redux/app/appSlice";
import { type RouteProp, useRoute } from "@react-navigation/native";
import { StackNavigation } from "../../core/routes/routes.types";

const Report = () => {
  const image = useAppSelector(selectProfileUrl);
  type TerreiroRouteProp = RouteProp<StackNavigation, "ReportItem">;
  const route = useRoute<TerreiroRouteProp>();

  const dados = route.params.data;

  return (
    <Wrapper>
      <Header onBack onLogOut text="Report" image={image} />
      <WrapperContente>
        <Texto>Criador: {dados.criador}</Texto>
        <Texto>Terrenos: {dados.terreno}</Texto>
        <Texto>Data: {dados.data}</Texto>
        <Texto>Tempo de funcionamente: {dados.funcionamento}</Texto>

        <WrapperButton>
          <Button variant="add" text="Download PDF" onPress={() => {}} />
        </WrapperButton>
      </WrapperContente>
    </Wrapper>
  );
};

export default Report;
