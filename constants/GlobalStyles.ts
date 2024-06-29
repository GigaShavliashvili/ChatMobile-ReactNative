import { StyleSheet } from "react-native";

export const globalStyle = StyleSheet.create({
  fullScreen: {
    paddingTop: 0,
    flex: 1,
  },
  flexRow: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  flexColumn: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
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
    alignItems: "center",
  },

  boxShadows: {
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 2,
    elevation: 5,
  },
  uppercase: {
    textTransform: "uppercase",
  },
});
