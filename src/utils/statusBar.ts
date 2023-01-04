import { Platform } from "react-native";
import { getStatusBarHeight as iPhoneStatusBar } from "react-native-iphone-x-helper";

export const getStatusBarHeight = () => {
  if (Platform.OS === "ios") {
    return iPhoneStatusBar();
  }
  return 0;
};
