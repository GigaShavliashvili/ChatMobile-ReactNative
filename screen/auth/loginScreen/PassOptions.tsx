import { ThemedText } from "@/components/ThemedText";
import Checkbox from "@/components/checkbox/Checkbox";
import { Colors } from "@/constants/Colors";
import { globalStyle } from "@/constants/GlobalStyles";
import { useLenScheme } from "@/hooks/useLenScheme";
import React from "react";
import { View } from "react-native";

const PassOptions: React.FC<{
  toggleCheckbox: () => void;
  isChecked: boolean;
}> = (props) => {
  const len = useLenScheme();
  return (
    <View
      style={[
        globalStyle.flexRow,
        { justifyContent: "space-between", padding: 4 },
      ]}
    >
      <Checkbox
        label={len.remember}
        toggleCheckbox={props.toggleCheckbox}
        isChecked={props.isChecked}
      />
      <ThemedText style={{ color: Colors.dark.main }}>
        {len.forgortPass}
      </ThemedText>
    </View>
  );
};

export default PassOptions;
