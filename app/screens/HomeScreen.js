import React, { useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  Flatlist,
  TextInput,
  ScrollView,
  useWindowDimensions,
} from "react-native";
import JobItems from "../component/JobItems";
import JobScreen from "../component/JobScreen";

const TopNavigation = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#fafafa",
        padding: 10,
        borderRadius: 10,
        fontWeight: "300",
        borderBottomLeftRadius: 20,
      }}
    >
      <Text
        style={{
          color: "#212121",
          fontSize: 23,
          marginTop: 3,
          fontWeight: "600",
          // fontStyle: "italic",
          textTransform: "capitalize",
        }}
      >
        Bobmanuel ibinabo
      </Text>
      <Image
        source={require("../assets/picture.png")}
        style={{
          width: 40,
          height: 40,
          borderRadius: 25,
        }}
      />
    </View>
  );
};

const SecondView = () => {
  const [search, setSearch] = useState();

  return (
    <View
      style={{
        marginVertical: 15,
        backgroundColor: "white",
        padding: 16,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
        alignItems: "center",
      }}
    >
      <TextInput
        focusable
        placeholder="What are you looking for "
        style={{
          color: "#fafafa",
          padding: 15,
          width: "100%",
          backgroundColor: "#212121",
          borderRadius: 20,
          fontSize: 12,
          borderColor: "#212121",
          fontWeight: "300",
        }}
        value={search}
        onChangeText={(text) => setSearch(text)}
      />
      <View>
        <Text
          style={{
            marginTop: 10,
            textTransform: "capitalize",
            color: "lightblue",
            fontSize: 30,
            fontWeight: "750",
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
      <JobItems />
      <JobScreen />
    </View>
  );
}
