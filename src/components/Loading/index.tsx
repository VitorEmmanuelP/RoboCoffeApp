import React from "react";
import { ActivityIndicator, Modal, View, Text, StyleSheet } from "react-native";
import { styles } from "../../common/styles";

export const LoadingModal = ({ isVisible }: { isVisible: boolean }) => {
  return (
    <Modal transparent visible={isVisible}>
      <View style={estilo.modalContainer}>
        <View style={estilo.modalContent}>
          <ActivityIndicator size={50} color={styles.colors.green_400} />
          <Text style={{ marginTop: 30, fontWeight: "bold" }}>Loading...</Text>
        </View>
      </View>
    </Modal>
  );
};

const estilo = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    borderRadius: 15,

    backgroundColor: "white",
    width: 200,
    height: 200,
  },
});
