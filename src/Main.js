import React from "react";
import { StyleSheet } from "react-native";
import AppRoutes from "./navigation/AppRoutes";

export default function App() {
  return <AppRoutes />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
