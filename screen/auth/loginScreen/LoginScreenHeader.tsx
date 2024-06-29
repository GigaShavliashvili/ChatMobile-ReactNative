import { ThemedText } from "@/components/ThemedText";
import { globalStyle } from "@/constants/GlobalStyles";
import { useLenScheme } from "@/hooks/useLenScheme";
import { useThemeColor } from "@/hooks/useThemeColor";
import React from "react";
import { Image, StyleSheet, Text, View, useColorScheme } from "react-native";

const LoginScreenHeader = () => {
  const colorScheme = useColorScheme();
  const len = useLenScheme();
  const signUpColor = useThemeColor({}, "link");
  const loginScreenLogo =
    colorScheme === "dark"
      ? require("@/assets/logos/LogoIpsumeDark.png")
      : require("@/assets/logos/LogoIpsumeLight.png");
  return (
    <View style={[styles.wrapper]}>
      <Image source={loginScreenLogo} style={{ alignSelf: "center" }} />
      <ThemedText style={[{ width: 200 }]} type="title">
        {len.loginHeader1}
      </ThemedText>
      <View style={[globalStyle.flexRow, { gap: 6 }]}>
        <ThemedText type="defaultSemiBold">{len.loginHeader2}</ThemedText>
        <Text style={{ color: signUpColor, textDecorationLine: "underline" }}>
          {len.signUp}
        </Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    paddingTop: 0,
    gap: 12,
    paddingHorizontal: 24,
    paddingBottom: 12,
    display: "flex",
  },
});

export default LoginScreenHeader;
