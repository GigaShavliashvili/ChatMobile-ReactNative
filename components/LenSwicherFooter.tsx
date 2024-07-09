import React from "react";
import Divider from "./divider/Divider";
import { Text, TouchableOpacity, View } from "react-native";
import { Colors } from "@/constants/Colors";
import { globalStyle } from "@/constants/GlobalStyles";
import { useLenScheme } from "@/hooks/useLenScheme";
import { useLenStore } from "@/globalStore/globalStore";
import { Ionicons } from "@expo/vector-icons";
import { useThemeColor } from "@/hooks/useThemeColor";

const LenSwicherFooter = () => {
  const leng = useLenScheme();
  const { len, setLen } = useLenStore();
  const iconcolor = useThemeColor({}, "tabIconDefault");
  return (
    <Divider
      text={
        <TouchableOpacity
          onPress={() => {
            setLen(len == "en" ? "geo" : "en");
          }}
        >
          <View style={[globalStyle.flexRow, { gap: 6 }]}>
            <Text
              style={{
                color: len == "geo" ? Colors.light.main : Colors.light.text2,
              }}
            >
              {leng.en}
            </Text>
            <Ionicons color={iconcolor} name="language" size={24} />
            <Text
              style={{
                color: len == "en" ? Colors.light.main : Colors.light.text2,
              }}
            >
              {leng.geo}
            </Text>
          </View>
        </TouchableOpacity>
      }
      textColor={Colors.dark.main}
    />
  );
};

export default LenSwicherFooter;
