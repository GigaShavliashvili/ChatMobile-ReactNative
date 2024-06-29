import React, { ReactElement, useEffect, useRef } from "react";
import {
  Animated,
  Easing,
  StyleProp,
  StyleSheet,
  TextStyle,
} from "react-native";
import { ThemedView } from "../ThemedView";

interface HalfContainerProps {
  children: ReactElement | ReactElement[];
  style?: StyleProp<TextStyle>;
}

const HalfContainer: React.FC<HalfContainerProps> = (props) => {
  const translateY = useRef(new Animated.Value(1000)).current; // Initial translateY value off screen

  useEffect(() => {
    Animated.timing(translateY, {
      toValue: 0,
      duration: 500, // Animation duration in milliseconds
      easing: Easing.ease, // Easing function for smooth animation
      useNativeDriver: true, // Use native driver for performance
    }).start();
  }, []);

  return (
    <Animated.View style={[{ transform: [{ translateY }] }, { width: "100%" }]}>
      <ThemedView style={[styles.wrapper, props.style]}>
        {props.children}
      </ThemedView>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    height: "100%",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingTop: 12,
    padding: 24,
    zIndex: 100,
  },
});

export default HalfContainer;
