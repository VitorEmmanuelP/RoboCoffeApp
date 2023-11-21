export type TomatoToastProps = {
  text: string;
  iconName: string;
  color: string;
  border: boolean;
};

export type IconProps = {
  text: string;
  iconName: string;
  color: string;
  durations?: number;
  border: boolean;
  position: "bottom" | "top";
};
