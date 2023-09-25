import { View, Text } from "react-native";
import React, { useMemo, useState } from "react";
import {
  Texto,
  Wrapper,
  WrapperButton,
  WrapperContente,
  WrapperSelected,
} from "./styles";
import Header from "../../components/Header";
import Button from "../../components/Button";
import { SelectList } from "react-native-dropdown-select-list";
import { RadioGroup } from "react-native-radio-buttons-group";
import { KeyboardAvoidingView } from "react-native";

const CriarRelatorio = () => {
  const [selected, setSelected] = useState("");
  const radioButtons = useMemo(
    () => [
      {
        id: "1", // acts as primary key, should be unique and non-empty string
        label: "Option 1",
        value: "option1",
      },
      {
        id: "2",
        label: "Option 2",
        value: "option2",
      },
    ],
    []
  );
  const [selectedId, setSelectedId] = useState();

  const data = [
    { key: "1", value: "Mobiles", disabled: true },
    { key: "2", value: "Appliances" },
    { key: "3", value: "Cameras" },
    { key: "4", value: "Computers", disabled: true },
    { key: "5", value: "Vegetables" },
    { key: "6", value: "Diary Products" },
    { key: "7", value: "Drinks" },
  ];
  return (
    <Wrapper>
      <Header onLogOut text="Criar Relatorio" />
      <WrapperContente>
        <KeyboardAvoidingView style={{ flex: 1, alignItems: "center" }}>
          <SelectList
            placeholder="Selecionar Terreiro"
            searchPlaceholder="Search"
            boxStyles={{ width: 200, marginVertical: 20 }}
            setSelected={(val: string) => setSelected(val)}
            data={data}
            save="value"
          />

          <SelectList
            placeholder="Selecionar Data"
            searchPlaceholder="Search"
            boxStyles={{ width: 200, marginVertical: 20 }}
            setSelected={(val: string) => setSelected(val)}
            data={data}
            save="value"
          />

          <RadioGroup
            containerStyle={{ flexDirection: "row" }}
            radioButtons={radioButtons}
            onPress={setSelectedId}
            selectedId={selectedId}
          />
          <WrapperButton>
            <Button text="Adicionar " variant="add" onPress={() => {}} />
          </WrapperButton>
        </KeyboardAvoidingView>
      </WrapperContente>
    </Wrapper>
  );
};

export default CriarRelatorio;
