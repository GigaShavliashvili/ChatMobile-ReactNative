import { Colors } from "@/constants/Colors";
import { globalStyle } from "@/constants/GlobalStyles";
import { useThemeColor } from "@/hooks/useThemeColor";
import React, { ReactElement } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from "react-native";
interface IButton {
  TouchableProps?: TouchableOpacityProps;
  text: string;
  icon?: ReactElement;
  iconRight?: boolean;
  type?: "primary" | "secondary";
}
const Button: React.FC<IButton> = (props) => {
  const styles = StyleSheet.create({
    button: {
      backgroundColor: props.type == "secondary" ? "#FFFF" : Colors.dark.main, // Example color, you can change this
      paddingHorizontal: 20,
      paddingVertical: 14,
      borderRadius: 10,
    },
    buttonText: {
      color: props.type == "secondary" ? useThemeColor({}, "text2") : "#FFFF",
      fontSize: 16,
      fontWeight: "bold",
    },
  });
  return (
    <TouchableOpacity
      style={[
        styles.button,
        props.type != "secondary"
          ? globalStyle.boxShadows
          : { borderColor: Colors.dark.stroke, borderWidth: 1 },
      ]}
      {...props.TouchableProps}
    >
      <View
        style={[
          {
            alignSelf: "center",
            gap: 6,
            display: "flex",
            alignItems: "center",
            flexDirection: props.iconRight ? "row-reverse" : "row",
          },
        ]}
      >
        {props.icon}
        <Text style={styles.buttonText}>{props.text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;
