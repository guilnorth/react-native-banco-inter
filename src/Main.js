import React from "react";
import { StatusBar } from "react-native";
import { StyleSheet } from "react-native";
import AppRoutes from "./navigation/AppRoutes";

export default function App() {
  return (
    <>
      <StatusBar
        translucent
        barStyle="light-content"
        backgroundColor="#f96502"
      />
      <AppRoutes />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center"
  }
});
