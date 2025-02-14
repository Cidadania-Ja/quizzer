import { ScrollViewProps, StatusBarProps } from "react-native";
import { SafeAreaViewProps } from "react-native-safe-area-context";

export interface KeyboardAvoidScrollViewHandlerOptions {
  scrollViewRef?: any;
  scrollViewProps?: ScrollViewProps;
  safeAreaViewProps?: SafeAreaViewProps;
  statusBarProps?: StatusBarProps;
  children: JSX.Element[] | JSX.Element;
}
