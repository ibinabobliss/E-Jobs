import React from "react";
import { ScrollView, ImageBackground, useWindowDimensions } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import { Stack, useRouter } from "expo-router";

export default function Home() {
  const { width } = useWindowDimensions();
  const router = useRouter();

  return (
    <ImageBackground
      //source={require("./assets/picture1.png")}
      style={{
        //width: "100%",
        //height: "100%",
        flex: 1,
        backgroundColor: "#212121",
      }}
    >
      <Stack.Screen
        options={{
          headerTittle: "",
        }}
      />
      <ScrollView
        style={{
          padding: 20,
          marginTop: 10,
        }}
      >
        <HomeScreen />
      </ScrollView>
    </ImageBackground>
  );
}
