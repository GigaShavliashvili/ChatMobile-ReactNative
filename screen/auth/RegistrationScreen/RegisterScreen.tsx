import Button from "@/components/Button/Button";
import LenSwicherFooter from "@/components/LenSwicherFooter";
import { ThemedView } from "@/components/ThemedView";
import HalfContainer from "@/components/containers/HalfContainer";
import StyledInput from "@/components/inputs/TextInput";
import { globalStyle } from "@/constants/GlobalStyles";
import { useLenScheme } from "@/hooks/useLenScheme";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Alert, Image, SafeAreaView, View, useColorScheme } from "react-native";
import LoginScreenHeader from "../loginScreen/LoginScreenHeader";

const RegisterScreen = () => {
  const colorScheme = useColorScheme();
  const len = useLenScheme();

  const loginScreenBg =
    colorScheme === "dark"
      ? require("@/assets/images/loginScreenBackgrounddark.png")
      : require("@/assets/images/loginScreenBackgroundlight.png");

  return (
    <ThemedView style={[globalStyle.fullScreen]}>
      <Image source={loginScreenBg} style={globalStyle.fullScreenBg} />
      <SafeAreaView>
        <LoginScreenHeader />
        <HalfContainer style={{ gap: 16 }}>
          <View>
            <View style={{ gap: 16 }}>
              <StyledInput
                label={len.fullName}
                placeholder={len.enter + " " + len.fullName}
              />
              <StyledInput
                label={len.userName}
                placeholder={len.enter + " " + len.userName}
              />
              <StyledInput
                label={len.mail}
                placeholder={len.enter + " " + len.mail}
              />
              <StyledInput
                label={len.password}
                placeholder={len.enter + " " + len.password}
                secureTextEntry
              />
              <StyledInput
                label={len.repeatPassword}
                placeholder={len.repeatPassword}
                secureTextEntry
              />
            </View>
          </View>
          <Button
            icon={<Ionicons color={"#FFFF"} name="enter" size={24} />}
            text={len.signUp}
            iconRight
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

export default RegisterScreen;
