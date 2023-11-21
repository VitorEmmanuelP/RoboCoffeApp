export type ButtonProps = {
  variant: "filled" | "outlined" | "underlined" | "add" | "remove";
  text: string;
  onPress: () => void;
};
