import { Platform } from "react-native";
import { PlatformTypes } from "../enums/platform.enum";

export const isIOS: boolean = Platform.OS === PlatformTypes.Ios;
export const isAndroid: boolean = Platform.OS === PlatformTypes.Android;
