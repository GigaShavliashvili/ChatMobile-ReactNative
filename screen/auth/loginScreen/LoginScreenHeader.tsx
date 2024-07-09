import { ThemedText } from "@/components/ThemedText";
import { globalStyle } from "@/constants/GlobalStyles";
import { useLenScheme } from "@/hooks/useLenScheme";
import { useThemeColor } from "@/hooks/useThemeColor";
import { router } from "expo-router";
import React from "react";
import { Image, StyleSheet, Text, View, useColorScheme } from "react-native";

const LoginScreenHeader: React.FC<{ isLoginPage?: boolean }> = ({
  isLoginPage,
}) => {
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
      <ThemedText style={[{ width: 300 }]} type="title">
        {!isLoginPage ? len.registerHeader1 : len.loginHeader1}
      </ThemedText>
      <View style={[globalStyle.flexRow, { gap: 6 }]}>
        <ThemedText type="defaultSemiBold">
          {!isLoginPage ? len.registerHeader2 : len.loginHeader2}
        </ThemedText>
        <Text
          onPress={() => {
            router.push(!isLoginPage ? "/login" : "/register");
          }}
          style={{ color: signUpColor, textDecorationLine: "underline" }}
        >
          {!isLoginPage ? len.signIn : len.signUp}
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
