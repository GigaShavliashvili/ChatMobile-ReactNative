import { Colors } from "@/constants/Colors";
import { globalStyle } from "@/constants/GlobalStyles";
import React from "react";
import { StyleSheet, Text, View, ViewProps } from "react-native";

interface IDivider extends ViewProps {
  text?: string;
  textColor?: string;
}
const Divider: React.FC<IDivider> = (props) => {
  if (props.text) {
    return (
      <View style={[globalStyle.flexRow, { gap: 8 }]}>
        <View style={[styles.divider, { flex: 1 }]} />
        <Text style={{ color: props.textColor ?? Colors.light.text2 }}>
          {props.text}
        </Text>
        <View style={[styles.divider, { flex: 1 }]} />
      </View>
    );
  }
  return <View style={styles.divider} />;
};

const styles = StyleSheet.create({
  divider: {
    width: "100%",
    alignItems: "center",
    height: 1,
    backgroundColor: Colors.light.stroke,
  },
});
export default Divider;
