import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Image,
  ScrollView,
  ActivityIndicator,
  KeyboardAvoidingView,
  FlatList,
} from "react-native";
import { Stack, useSearchParams, useRouter } from "expo-router";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import FetchData from "../api/Axios";
////////////////////////////////////////////////////////////////////////

function TopNav() {
  const router = useRouter();
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 20,
        backgroundColor: "#eeeeee",
      }}
    >
      <TouchableOpacity onPress={() => router.back("HomeScreen")}>
        <Ionicons name="arrow-back-sharp" size={30} color={"black"} />
      </TouchableOpacity>
      <TouchableOpacity style={{}}>
        <AntDesign name="sharealt" size={30} color={"red"} />
      </TouchableOpacity>
    </View>
  );
}

function BottomNav() {
  const params = useSearchParams();
  //const [isLoading, setIsLoading] = useState(false);
  //const error = null;
  //useEffect(() => {
  //  setIsLoading(true);
  //  setTimeout(() => {
  //    setIsLoading(false);
  //  }, 5000);
  //}, []);

  const { isLoading, data, error } = FetchData({
    job_id: params.id,
    //query: "develoer jobs",
  });

  console.log(isLoading);
  console.log(error);
  console.log(data);
  return (
    <SafeAreaView>
      {isLoading ? (
        <ActivityIndicator />
      ) : error ? (
        alert(error.message)
      ) : (
        <SafeAreaView>
          <View
            style={{
              alignItems: "center",
              marginTop: 5,
            }}
          >
            <Image
              //source={require("../assets/picture.png")}
              source={{ uri: data[0].employer_logo }}
              style={{
                width: 200,
                height: 200,
                // resizeMode: "contain",
                borderRadius: 100,
              }}
            />
            <View
              style={{
                marginTop: 7,
              }}
            >
              <Text
                style={{
                  color: "#eeeeee",
                  fontSize: 23,
                  fontWeight: "600",
                }}
              >
                {data[0].employer_name}{" "}
              </Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                marginTop: 4,
              }}
            >
              <Text
                style={{
                  color: "#ffa726",
                  fontWeight: "500",
                  fontSize: 18,
                }}
              >
                {data[0].job_employment_type} /
              </Text>
              <Text
                style={{
                  color: "#ffa726",
                  marginHorizontal: 8,
                  fontWeight: "500",
                  fontSize: 18,
                }}
              >
                {data[0].job_country}
              </Text>
            </View>
          </View>
          <SafeAreaView
            style={{
              backgroundColor: "#eeeeee",
              marginTop: 15,
              borderRadius: 20,
              // height: 200,
              // alignItems: "center",
            }}
          >
            <View
              style={{
                padding: 10,
              }}
            >
              <Text
                style={{
                  // padding: 10,
                  color: "#212121",
                  fontWeight: "bold",
                  fontSize: 19,
                }}
              >
                Qualifications
              </Text>
              <Text
                style={{
                  // padding: 10,
                  color: "grey",
                  marginVertical: 8,
                  fontWeight: "bold",
                }}
                numberOfLines={3}
              >
                {data[0].job_highlights.Qualifications}
              </Text>
              <Text
                style={{
                  // padding: 10,
                  color: "grey",
                  marginTop: 8,
                  fontWeight: "bold",
                }}
                numberOfLines={3}
              >
                {data[1].job_highlights.Qualifications}
              </Text>
              <Text
                style={{
                  // padding: 10,
                  color: "grey",
                  marginTop: 8,
                  fontWeight: "bold",
                }}
                numberOfLines={3}
              >
                {data[2].job_highlights.Qualifications}
              </Text>
            </View>
          </SafeAreaView>

          <SafeAreaView
            style={{
              backgroundColor: "#eeeeee",
              marginTop: 15,
              borderRadius: 20,

              // height: 200,
              // alignItems: "center",
            }}
          >
            <View
              style={{
                padding: 10,
              }}
            >
              <Text
                style={{
                  // padding: 10,
                  color: "#212121",
                  fontWeight: "bold",
                  fontSize: 19,
                }}
              >
                Responsibilities
              </Text>
              <Text
                style={{
                  // padding: 10,
                  color: "grey",
                  fontWeight: "bold",

                  marginVertical: 8,
                }}
                numberOfLines={3}
              >
                {data[0].job_highlights.Responsibilities}
              </Text>
              <Text
                style={{
                  // padding: 10,
                  color: "grey",
                  marginTop: 8,
                  fontWeight: "bold",
                }}
                numberOfLines={3}
              >
                {data[1].job_highlights.Responsibilities}
              </Text>
              <Text
                style={{
                  // padding: 10,
                  color: "grey",
                  marginTop: 8,
                  fontWeight: "bold",
                }}
                numberOfLines={3}
              >
                {data[2].job_highlights.Responsibilities}
              </Text>
            </View>
          </SafeAreaView>
        </SafeAreaView>
      )}
    </SafeAreaView>
  );
}

function LastNav() {
  return (
    <TouchableOpacity
      onPress={() => router.push("/JobSite/")}
      style={{
        alignItems: "center",
        backgroundColor: "grey",
        marginVertical: 15,
        padding: 5,
        borderRadius: 20,
      }}
    >
      <Text
        style={{
          color: "tomato",
          fontSize: 21,
          fontWeight: "bold",
        }}
      >
        Apply Now
      </Text>
    </TouchableOpacity>
  );
}
export default function JobPage() {
  return (
    <View
      style={{
        backgroundColor: "#eeeeee",
        flex: 1,
      }}
    >
      <Stack.Screen />
      <TopNav />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          backgroundColor: "#212121",
          flex: 1,
          padding: 20,
          borderTopRightRadius: 30,
          borderTopLeftRadius: 30,
        }}
      >
        <BottomNav />
        <LastNav />
      </ScrollView>
    </View>
  );
}
