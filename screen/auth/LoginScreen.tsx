import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import StyledInput from "@/components/inputs/TextInput";
import { globalStyle } from "@/constants/GlobalStyles";
import { Image, SafeAreaView, TextInput, useColorScheme } from "react-native";

const LoginScreen = () => {
  const colorScheme = useColorScheme();
  const loginScreenBg =
    colorScheme === "dark"
      ? require("@/assets/images/loginScreenBackgrounddark.png")
      : require("@/assets/images/loginScreenBackgroundlight.png");
  return (
    <ThemedView style={[globalStyle.fullScreen]}>
      <Image source={loginScreenBg} style={globalStyle.fullScreenBg} />
      <SafeAreaView
        style={[globalStyle.center, globalStyle.fullScreen, { margin: 20 }]}
      >
        <ThemedText>Login</ThemedText>
        <StyledInput placeholder="enter login" />
        <ThemedText>password</ThemedText>
        <StyledInput placeholder="enter password" />
      </SafeAreaView>
    </ThemedView>
  );
};
export default LoginScreen;
