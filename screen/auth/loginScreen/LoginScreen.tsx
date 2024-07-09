import Button from "@/components/Button/Button";
import LenSwicherFooter from "@/components/LenSwicherFooter";
import { ThemedView } from "@/components/ThemedView";
import HalfContainer from "@/components/containers/HalfContainer";
import Divider from "@/components/divider/Divider";
import StyledInput from "@/components/inputs/TextInput";
import { globalStyle } from "@/constants/GlobalStyles";
import { useLenScheme } from "@/hooks/useLenScheme";
import { useThemeColor } from "@/hooks/useThemeColor";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import { Alert, Image, SafeAreaView, View, useColorScheme } from "react-native";
import LoginScreenHeader from "./LoginScreenHeader";
import PassOptions from "./PassOptions";

const LoginScreen = () => {
  const colorScheme = useColorScheme();
  const len = useLenScheme();
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };
  const loginScreenBg =
    colorScheme === "dark"
      ? require("@/assets/images/loginScreenBackgrounddark.png")
      : require("@/assets/images/loginScreenBackgroundlight.png");

  return (
    <ThemedView style={[globalStyle.fullScreen]}>
      <Image source={loginScreenBg} style={globalStyle.fullScreenBg} />
      <SafeAreaView>
        <LoginScreenHeader isLoginPage />
        <HalfContainer style={{ gap: 16 }}>
          <View>
            <View style={{ gap: 16 }}>
              <StyledInput
                label={len.login}
                placeholder={len.enter + " " + len.login}
              />
              <StyledInput
                label={len.password}
                placeholder={len.enter + " " + len.password}
                secureTextEntry
              />
            </View>
            <PassOptions
              isChecked={isChecked}
              toggleCheckbox={toggleCheckbox}
            />
          </View>
          <Button
            icon={<Ionicons color={"#FFFF"} name="enter" size={24} />}
            text={len.enter}
            iconRight
            TouchableProps={{
              onPress: () => {
                router.replace("(tabs)");
              },
            }}
          />
          <Divider text={len.or} />
          <Button
            type="secondary"
            icon={
              <Ionicons
                color={useThemeColor({}, "text2")}
                name="logo-google"
                size={20}
              />
            }
            text={"Google"}
            TouchableProps={{
              onPress: () => {
                Alert.alert("Forbiden!");
              },
            }}
          />
          <Button
            type="secondary"
            icon={
              <Ionicons
                color={useThemeColor({}, "text2")}
                name="logo-facebook"
                size={20}
              />
            }
            text={"FaceBook"}
            TouchableProps={{
              onPress: () => {
                Alert.alert("Forbiden!");
              },
            }}
          />
          <Button
            type="secondary"
            icon={
              <Ionicons
                color={useThemeColor({}, "text2")}
                name="logo-apple"
                size={20}
              />
            }
            text={"Apple Icloud"}
            TouchableProps={{
              onPress: () => {
                Alert.alert("Forbiden!");
              },
            }}
          />
          <LenSwicherFooter />
        </HalfContainer>
      </SafeAreaView>
    </ThemedView>
  );
};
export default LoginScreen;
