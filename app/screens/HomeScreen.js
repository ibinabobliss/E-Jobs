import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, TextInput } from "react-native";
import JobItem from "../component/JobItems";
import JobScreen from "../component/JobScreen";

const TopNavigation = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#263238",
        padding: 10,
        borderRadius: 10,
        fontWeight: "300",
        // borderBottomLeftRadius: 20,
      }}
    >
      <View>
        <Text
          style={{
            color: "#f5f5f5",
            fontSize: 23,
            marginTop: 3,
            fontWeight: "600",
            // fontStyle: "italic",
            textTransform: "capitalize",
          }}
        >
          Bobmanuel ibinabo
        </Text>
        <Text
          style={{
            color: "#e0e0e0",
            textTransform: "capitalize",
            fontWeight: "400",
            marginTop: 6,
          }}
        >
          Manager E-dice limited{" "}
        </Text>
      </View>
      <View>
        <Image
          source={require("../assets/profilepicture.jpg")}
          style={{
            width: 60,
            height: 60,
            borderRadius: 30,
          }}
        />
      </View>
    </View>
  );
};

const SecondView = () => {
  const [search, setSearch] = useState();

  return (
    <View
      style={{
        marginVertical: 15,
        backgroundColor: "#e0e0e0",
        padding: 16,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
        alignItems: "center",
      }}
    >
      <TextInput
        focusable
        //  autoCapitalize="true"
        //editable
        //cursorColor={"#fafafa"}
        placeholder="What are you looking for "
        placeholderTextColor={"#eeeeee"}
        style={{
          // color: "#fafafa",
          padding: 15,
          width: "100%",
          backgroundColor: "#263238",
          borderRadius: 20,
          fontSize: 12,
          borderColor: "#212121",
          fontWeight: "200",
        }}
        value={search}
        onChangeText={(text) => setSearch(text)}
      />
      <View>
        <Text
          style={{
            marginTop: 10,
            textTransform: "capitalize",
            color: "#000",
            fontSize: 30,
            fontWeight: "500",
          }}
        >
          Find your dream job on E-Dice
        </Text>
      </View>
    </View>
  );
};
export default function HomeScreen() {
  return (
    <View>
      <TopNavigation />
      <SecondView />
      <JobItem />
      <JobScreen />
    </View>
  );
}
