import { Stack } from "expo-router";
import { useColorScheme } from "react-native";

export default () => {
  const colorScheme = useColorScheme();
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="register" options={{ headerShown: false }} />
    </Stack>
  );
};
