import React from "react";
import { Keyboard, StatusBar, TouchableWithoutFeedback } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { SafeAreaView } from "../../../assets/styles";
import { KeyboardAvoidScrollViewHandlerOptions } from "./types";

export function KeyboardAvoidScrollViewHandler({
  statusBarProps,
  scrollViewRef,
  scrollViewProps,
  safeAreaViewProps,
  children,
}: KeyboardAvoidScrollViewHandlerOptions): JSX.Element {
  const innerRef = scrollViewRef || React.useRef<KeyboardAwareScrollView>(null);

  return (
    <>
      <StatusBar
        translucent
        animated
        barStyle={"light-content"}
        {...statusBarProps}
      />

      <SafeAreaView {...safeAreaViewProps}>
        <KeyboardAwareScrollView
          innerRef={(ref) => {
            innerRef.current = ref;
          }}
          style={{
            flex: 1,
          }}
          contentContainerStyle={{ flexGrow: 1 }}
          {...scrollViewProps}
        >
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <>{children}</>
          </TouchableWithoutFeedback>
        </KeyboardAwareScrollView>
      </SafeAreaView>
    </>
  );
}
