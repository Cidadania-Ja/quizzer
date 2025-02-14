import React from "react";
import { StatusBar } from "react-native";
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from "react-native-safe-area-context";
import { SafeAreaView } from "../../../assets/styles";
import { SafeAreaHandlerOptions } from "./types";

export function SafeAreaHandler({
  children,
  style,
}: SafeAreaHandlerOptions): JSX.Element {
  return (
    <>
      <StatusBar translucent animated barStyle={"light-content"} />

      <SafeAreaProvider initialMetrics={initialWindowMetrics}>
        <SafeAreaView style={style}>{children}</SafeAreaView>
      </SafeAreaProvider>
    </>
  );
}
