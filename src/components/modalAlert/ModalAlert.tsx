import React, { useMemo, useState } from "react";
import { Modal } from "react-native";
import Svg, { Path } from "react-native-svg";

import {
  Button,
  TextButton,
  Wrapper,
  WrapperContent,
  WrapperRow,
  WrapperText,
} from "./ModalAlert.styles";
import { type ModalProps } from "./ModalAlert.types";

export const ModalAlert: React.FC<ModalProps> = ({
  visible,
  buttonRight,
  buttonLeft,
  onClose,
  children,
}) => {
  const [show, setShow] = useState(visible);

  useMemo(() => {
    setShow(visible);
  }, [visible]);

  const handleModalClose = () => {
    setShow((prev) => !prev);
    onClose();
  };

  return (
    <Modal visible={show} transparent>
      <Wrapper>
        <WrapperContent>
          <InfoIcon />
          <WrapperText>{children}</WrapperText>
          <WrapperRow>
            <Button
              testID="leftButtonTestId"
              backColor="#9A9A9A"
              onPress={() => {
                buttonLeft.onPress();
                handleModalClose();
              }}
            >
              <TextButton>{buttonLeft.text}</TextButton>
            </Button>
            <Button
              testID="rightButtonTestId"
              backColor="#00875F"
              onPress={() => {
                buttonRight.onPress();
                handleModalClose();
              }}
            >
              <TextButton>{buttonRight.text}</TextButton>
            </Button>
          </WrapperRow>
        </WrapperContent>
      </Wrapper>
    </Modal>
  );
};

const InfoIcon = () => {
  return (
    <Svg width="48" height="47" viewBox="0 0 48 47" fill="none">
      <Path
        d="M21.8828 16.4688H26.5703V11.7812H21.8828M24.2266 42.25C13.8906 42.25 5.47656 33.8359 5.47656 23.5C5.47656 13.1641 13.8906 4.75 24.2266 4.75C34.5625 4.75 42.9766 13.1641 42.9766 23.5C42.9766 33.8359 34.5625 42.25 24.2266 42.25ZM24.2266 0.0625C21.1487 0.0625 18.101 0.668729 15.2574 1.84657C12.4138 3.02442 9.83012 4.75081 7.65375 6.92719C3.25836 11.3226 0.789063 17.284 0.789062 23.5C0.789063 29.716 3.25836 35.6774 7.65375 40.0728C9.83012 42.2492 12.4138 43.9756 15.2574 45.1534C18.101 46.3313 21.1487 46.9375 24.2266 46.9375C30.4426 46.9375 36.404 44.4682 40.7994 40.0728C45.1948 35.6774 47.6641 29.716 47.6641 23.5C47.6641 20.4221 47.0578 17.3744 45.88 14.5309C44.7021 11.6873 42.9757 9.10356 40.7994 6.92719C38.623 4.75081 36.0393 3.02442 33.1957 1.84657C30.3521 0.668729 27.3044 0.0625 24.2266 0.0625ZM21.8828 35.2188H26.5703V21.1562H21.8828V35.2188Z"
        fill="#3779D8"
      />
    </Svg>
  );
};
