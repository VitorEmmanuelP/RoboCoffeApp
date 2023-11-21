// App.jsx
import Toast, { type ToastConfigParams } from "react-native-toast-message";

import { Icon, Wrapper, Texto } from "./Toast.styles";
import { styles } from "../../common/styles";
import { IconProps, TomatoToastProps } from "./Toast.types";

export const toastConfig = {
  CustomToast: ({ text1, props }: ToastConfigParams<TomatoToastProps>) => (
    <Wrapper
      style={props.border && { borderWidth: 1, borderColor: props.color }}
    >
      <Icon name={props.iconName} color={props.color} />
      <Texto color={props.color}>{text1}</Texto>
    </Wrapper>
  ),
};

export const showToast = ({
  text,
  color,
  iconName,
  durations = 2000,
  position,
  border,
}: IconProps) => {
  Toast.show({
    type: "CustomToast",
    props: { iconName, color, border },
    text1: text,
    autoHide: true,

    visibilityTime: durations,
    position,
  });
};
