import { Colors } from "@/constants/Colors";
import { globalStyle } from "@/constants/GlobalStyles";
import { useThemeColor } from "@/hooks/useThemeColor";
import React, { useState } from "react";
import {
  StyleProp,
  StyleSheet,
  TextInput,
  TextInputProps,
  TextStyle,
  View,
} from "react-native";
import { ThemedText } from "../ThemedText";
import EyeInputComp from "./EyeInputComp";
interface StyledInputProps extends TextInputProps {
  label: string;
  labelStyle?: StyleProp<TextStyle>;
  inputStyle?: StyleProp<TextStyle>;
}

const StyledInput = (props: StyledInputProps) => {
  const [show, setShow] = useState(true);
  return (
    <View style={[globalStyle.flexColumn, { gap: 4 }]}>
      <ThemedText style={[props.labelStyle]}>{props.label}</ThemedText>
      <TextInput
        style={[
          styles.input,
          { color: useThemeColor({}, "text") },
          props.inputStyle,
        ]}
        {...props}
        secureTextEntry={show && props.secureTextEntry}
      />
      {props.secureTextEntry && <EyeInputComp show={show} setShow={setShow} />}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 46,
    width: "100%",
    borderColor: Colors.light.stroke,
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 14,
    paddingRight: 14,
  },
});
export default StyledInput;
