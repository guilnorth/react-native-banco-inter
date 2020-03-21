import React from "react";
import { View } from "react-native";
import { TouchButton, ButtonText, ViewContainer } from "./styles";

export default function Login() {
  return (
    <ViewContainer>
      <TouchButton>
        <ButtonText>Login page</ButtonText>
      </TouchButton>
    </ViewContainer>
  );
}
