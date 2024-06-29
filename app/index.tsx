import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Redirect } from "expo-router";
import { useEffect, useState } from "react";

export default () => {
  const [check, setCheck] = useState(false);
  const [outh, setOuth] = useState(false);

  useEffect(() => {
    let timeout = setTimeout(() => {
      setOuth(false);
      setCheck(true);
    }, 2000);
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  if (!check) {
    return (
      <ThemedView>
        <ThemedText>Loading...</ThemedText>
      </ThemedView>
    );
  }
  if (outh) {
    return <Redirect href="(home)" />;
  } else return <Redirect href="(auth)" />;
};
