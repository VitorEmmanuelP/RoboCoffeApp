export type ModalProps = {
  visible: boolean;
  buttonRight: { text: string; onPress: () => void };
  buttonLeft: { text: string; onPress: () => void };
  onClose: () => void;
  children: React.ReactNode;
};

export type ButtonProps = {
  backColor: string;
};
