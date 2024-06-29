import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useThemeColor } from "@/hooks/useThemeColor";
import { View } from "react-native";

interface IEyeInputComp {
  show: boolean;
  setShow: (val: boolean) => void;
}
const EyeInputComp: React.FC<IEyeInputComp> = (props) => {
  return (
    <View
      onTouchEnd={() => {
        props.setShow(!props.show);
      }}
      style={{
        position: "absolute",
        right: 16,
        top: "50%",
        marginTop: 4,
        bottom: "auto",
      }}
    >
      <Ionicons
        name={props.show ? "eye-off" : "eye"}
        size={22}
        style={{
          color: useThemeColor({}, "icon"),
        }}
      />
    </View>
  );
};

export default EyeInputComp;
