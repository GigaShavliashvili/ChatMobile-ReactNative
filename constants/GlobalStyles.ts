import { StyleSheet } from "react-native";

export const globalStyle = StyleSheet.create({
  fullScreen: {
    paddingTop: 0,
    flex: 1,
  },
  fullScreenBg: {
    resizeMode: "cover",
    position: "absolute",
    zIndex: -1,
    top: 0,
    width: "100%",
    height: "100%",
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
  borderRadiusS: {
    borderRadius: 4,
  },
  borderRadiusM: {
    borderRadius: 8,
  },
  borderRadiusL: {
    borderRadius: 12,
  },
});
