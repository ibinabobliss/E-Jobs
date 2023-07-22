import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  FlatList,
  Image,
  ScrollView,
  ActivityIndicator,
  SafeAreaView,
} from "react-native";
import FetchData from "../api/Axios";
import {
  Stack,
  useSearchParams,
  useRouter,
  useLocalSearchParams,
  router,
} from "expo-router";
import { Ionicons, AntDesign } from "@expo/vector-icons";

function TopNav() {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        //marginVertical: 10,
      }}
    >
      <TouchableOpacity onPress={() => router.back("HomeScreen")}>
        <Ionicons name="arrow-back-sharp" size={30} color={"#fafafa"} />
      </TouchableOpacity>
      <View
        style={{
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: "#fafafa",
            fontSize: 24,
            fontWeight: "500",
          }}
        >
          Job Details{" "}
        </Text>
      </View>
      <TouchableOpacity>
        <AntDesign name="sharealt" size={30} color="#fafafa" />
      </TouchableOpacity>
    </View>
  );
}

function SecondNav() {
  return (
    <View>
      <Text>seconds</Text>
    </View>
  );
}
export default function JobPage() {
  const params = useSearchParams();
  const { width } = useWindowDimensions();
  const router = useRouter();
  // const { data, isLoading, error } = FetchData({
  // query: "python developer  ",
  //job_id: params.id,
  //});
  console.log(data);
  const isLoading = false;
  const error = null;
  const data = ["fruits", "mangoes", "oranges", "oranges", "oranges"];
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#212121",
        padding: 20,
      }}
    >
      <Stack.Screen />
      <TopNav />
      <View
        style={{
          marginTop: 9,
        }}
      >
        {isLoading ? (
          <ActivityIndicator size={50} color={"white"} />
        ) : error ? (
          alert("there is an error ", error.message)
        ) : data.lenght === 0 ? (
          alert("there is no data ")
        ) : (
          <ScrollView>
            <View>
              <View style={{ alignItems: "center", marginTop: 10 }}>
                <Image
                  // source={{ uri: data[0].employer_logo }}
                  source={require("../assets/profilepicture.jpg")}
                  sou
                  style={{
                    width: 260,
                    height: 260,
                    borderRadius: 130,
                  }}
                />
              </View>
              <View
                style={{
                  alignItems: "center",
                  marginTop: 23,
                }}
              >
                <Text
                  style={{
                    color: "#fafafa",
                    fontSize: 21,
                    textTransform: "capitalize",
                    fontWeight: "600",
                  }}
                >
                  Bobmanuel Ibinabo
                  {data[0].employer_name}
                </Text>
              </View>
            </View>
            <View
              style={{
                alignItems: "center",
                flexDirection: "row",
                justifyContent: "center",
                marginTop: 7,
              }}
            >
              <View>
                <Text
                  numberOfLines={1}
                  style={{
                    color: "tomato",
                    fontSize: 20,
                  }}
                >
                  Frontend developer
                  {data[0].job_title} /
                </Text>
              </View>
              <View>
                <Text
                  numberOfLines={11}
                  style={{
                    color: "tomato",
                    marginHorizontal: 10,
                    fontSize: 20,
                  }}
                >
                  United states
                  {data[0].job_country}
                </Text>
              </View>
            </View>

            <SafeAreaView
              style={{
                width: "100%",
                height: width,
                backgroundColor: "#fafafa",
                borderRadius: 20,
                marginTop: 20,
              }}
            >
              <View
                style={{
                  margin: 10,
                }}
              >
                <Text
                  style={{
                    color: "gray",
                    fontSize: 17,
                    fontWeight: "bold",
                  }}
                >
                  Discription :{" "}
                </Text>
                <Text
                  numberOfLines={7}
                  style={{
                    color: "grey",
                    fontSize: 17,
                    fontWeight: "400",
                  }}
                >
                  widawidawidawidawidawidawidawidawidawidawidawidawidawidawidawidawidawidawidawidawidawidawidawidawidawidawidawidawidawidawidawidawidawidawidawidawidawidawidawidawidawidawidawidawidawidawidawidawidawidawidawidawidawidawidawidawidawidawidawidawidawidawidawidawidawidawidawidawidawidawidawidawidawidawidawidawidawidawidawidawidawidawidawidawidawidawidawidawidawidawidawidawidawidawidawidawidawidawidawidawidawidawidawidawidawidas
                  {data[0].job_description}
                </Text>
              </View>

              <View
                style={{
                  margin: 10,
                }}
              >
                <Text
                  style={{
                    color: "gray",
                    fontSize: 17,
                    fontWeight: "bold",
                  }}
                >
                  Qualifications :{" "}
                </Text>
                <Text
                  numberOfLines={7}
                  style={{
                    color: "grey",
                    fontSize: 17,
                    fontWeight: "400",
                  }}
                >
                  widawidawidawidawidawidawidawidawidawidawidawidawidawidawidawidawidawidawidawidawidawidawidawidawidawidawidawidawidawidawidawidawidawidawidawidawidawidawidawidawidawidawidawidawidawidawidawidawidawidawidawidawidawidawidawidawidawidawidawidawidawidawidawidawidawidawidawidawidawidawidawidawidawidawidawidawidawidawidawidawidawidawidawidawidawidawidawidawidawidawidawidawidawidawidawidawidawidawidawidawidawidawidawidawidawidas
                  {data[0].job_description}
                </Text>
              </View>
            </SafeAreaView>
          </ScrollView>
        )}
      </View>
    </View>
  );
}