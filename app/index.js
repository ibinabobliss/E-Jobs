import { Stack, useRouter } from "expo-router";
import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import HomeScreen from "./screens/HomeScreen";

export default function Home() {
  const router = useRouter();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#212121",
        padding: 20,
      }}
    >
      <Stack.Screen />
      <SafeAreaView>
        <HomeScreen />
      </SafeAreaView>
    </View>
  );
}
