import { TextInputProps as Props } from "react-native";

export type TextInputProps = Props & {
  iconRight?: string;
  placeholder: string;
  hidePassword?: boolean;
};
