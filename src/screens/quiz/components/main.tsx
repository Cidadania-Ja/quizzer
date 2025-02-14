import React from "react";
import { ButtonText, NextButton, PreviousButton } from "./styles";

export const ButtonNext = ({ label, onPress, ...props }) => (
  <NextButton onPress={onPress} {...props}>
    <ButtonText>{label}</ButtonText>
  </NextButton>
);

export const ButtonPrevious = ({ label, onPress, ...props }) => (
  <PreviousButton onPress={onPress} {...props}>
    <ButtonText>{label}</ButtonText>
  </PreviousButton>
);
