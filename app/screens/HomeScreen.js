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
import PhoneItems from "../component/PhonesItems";

const TopNavigation = () => {
  return (
    <View
      style={{
        backgroundColor: "#212121",
        padding: 10,
        borderRadius: 10,
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <Text
        style={{
          color: "#fafafa",
          fontSize: 23,
          marginTop: 3,
          fontWeight: "400",
          // fontStyle: "italic",
        }}
      >
        Bobmanuel ibinabo
      </Text>

      <Image
        source={require("../assets/walpaper1.png")}
        style={{
          width: 40,
          backgroundColor: "fafafa",
          padding: 3,
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
        marginVertical: 10,
        backgroundColor: "grey",
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
            fontSize: 33,
            fontWeight: "750",
          }}
        >
          Best Smart Phones and gadget
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
      <PhoneItems />
    </View>
  );
}
