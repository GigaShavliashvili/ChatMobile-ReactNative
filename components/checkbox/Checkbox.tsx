import { useThemeColor } from "@/hooks/useThemeColor";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import { ThemedText } from "../ThemedText";

interface ICheckBox {
  toggleCheckbox: () => void;
  isChecked: boolean;
  label: string;
}
const Checkbox: React.FC<ICheckBox> = (props) => {
  const color = useThemeColor({}, "text2");
  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <TouchableOpacity onPress={props.toggleCheckbox}>
        <View
          style={{
            height: 14,
            width: 14,
            borderWidth: 1,
            borderColor: color,
            borderRadius: 4,
            justifyContent: "center",
            alignItems: "center",
            marginRight: 8,
          }}
        >
          {props.isChecked && (
            <View
              style={{
                backgroundColor: color,
                height: 10,
                width: 10,
                borderRadius: 2,
              }}
            />
          )}
        </View>
      </TouchableOpacity>
      <ThemedText>{props.label}</ThemedText>
    </View>
  );
};
export default Checkbox;
