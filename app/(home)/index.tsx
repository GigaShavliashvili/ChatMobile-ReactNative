import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { router } from "expo-router";
import { SafeAreaView } from "react-native";

export default () => {
  return (
    <SafeAreaView>
      <ThemedView>
        <ThemedText onPress={() => router.push("/register")}>aloo</ThemedText>
      </ThemedView>
    </SafeAreaView>
  );
};
