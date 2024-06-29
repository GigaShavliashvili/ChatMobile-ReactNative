import React from "react";
import { TextInput, StyleSheet } from "react-native";

const StyledInput = (props: any) => {
  return (
    <TextInput
      style={[styles.input, props.style]} // Merge component style with custom style
      placeholder={props.placeholder}
      onChangeText={props.onChangeText}
      value={props.value}
      secureTextEntry={props.secureTextEntry}
      keyboardType={props.keyboardType}
      autoCapitalize={props.autoCapitalize}
      autoCorrect={props.autoCorrect}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: "100%",
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    paddingRight: 10,
    marginVertical: 10,
  },
});

export default StyledInput;
