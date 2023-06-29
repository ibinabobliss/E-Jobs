import React from "react";
import { ScrollView, ImageBackground, useWindowDimensions } from "react-native";
import { Stack, useRouter } from "expo-router";
import HomeScreen from "./screens/HomeScreen";

export default function Home() {
  const router = useRouter();
  const { width } = useWindowDimensions();
  return (
    <ImageBackground
      source={require("./assets/walpaper1.png")}
      style={{
        width: "100%",
        height: "100%",
        flex: 1,
        padding: 30,
      }}
    >
      <ScrollView>
        <HomeScreen />
      </ScrollView>
    </ImageBackground>
  );
}
