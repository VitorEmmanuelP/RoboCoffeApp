import React, { useState } from "react";
import { TouchableOpacity, View, Text } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";

const DatePicker = ({ onClose }: { onClose: (date: string) => void }) => {
  const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);
  const [date, setDate] = useState("");

  const showDatePicker = () => {
    setIsDatePickerVisible(true);
  };

  const hideDatePicker = () => {
    setIsDatePickerVisible(false);
  };

  const handleConfirm = (date: any) => {
    const dateObj = new Date(date);
    const day = dateObj.getDate();
    const month = dateObj.getMonth() + 1;
    const year = dateObj.getFullYear();
    const formattedDate = `${day < 10 ? "0" + day : day}/${
      month < 10 ? "0" + month : month
    }/${year}`;
    setDate(formattedDate);
    onClose(formattedDate);
    hideDatePicker();
  };

  return (
    <View>
      <TouchableOpacity onPress={showDatePicker}>
        <View
          style={{
            paddingHorizontal: 20,
            paddingVertical: 15,
            alignItems: "center",
            width: 200,
            borderRadius: 10,
            borderColor: "black",
            borderWidth: 0.5,
          }}
        >
          <Text>{date === "" ? "Selecione uma data" : date}</Text>
        </View>
      </TouchableOpacity>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        locale="pt_BR"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </View>
  );
};

export default DatePicker;
