import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  ActivityIndicator,
  SafeAreaView,
  useWindowDimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter, Stack, useSearchParams } from "expo-router";
import FetchData from "../api/Axios";
function TopView() {
  return (
    <View
      style={{
        marginTop: 5,
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 3,
      }}
    >
      <View
        style={{
          marginTop: 4,
        }}
      >
        <Ionicons name="arrow-back" size={30} color="#fafafa" />
      </View>
      <View>
        <Text
          style={{
            color: "#fafafa",
            fontSize: 21,
            fontWeight: "500",
          }}
        >
          job Details
        </Text>
      </View>
      <TouchableOpacity
        style={{
          marginTop: 1,
        }}
      >
        <Ionicons
          name="notifications-circle-outline"
          size={30}
          color="#fafafa"
        />
      </TouchableOpacity>
    </View>
  );
}
export default function JobPage() {
  const router = useRouter();
  const params = useSearchParams();
  const { width } = useWindowDimensions();
  // const error = null;
  // const [isLoading, setIsLoading] = useState("false");
  //const { data, isLoading, error } = FetchData({
  //  job_id: params.id,
  //});

  const { data, isLoading, error } = FetchData({
    query: "Python developer ",
    job_id: params.id,
  });
  console.log(data);
  console.log(isLoading);
  //console.log(error);

  // useEffect(() => {
  //   setIsLoading(true);
  //   setTimeout(() => {
  //     setIsLoading(false);
  //   }, 5000);
  // }, []);
  //const isLoading = false;
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#212121",
        padding: 20,
        //alignItems: "center",
      }}
    >
      <Stack.Screen />
      <TopView />

      <ScrollView>
        {isLoading ? (
          <View
            style={{
              marginTop: 10,
            }}
          >
            <ActivityIndicator size={30} color={"white"} />
          </View>
        ) : error ? (
          alert(error.message)
        ) : (
          <SafeAreaView>
            <View
              style={{
                marginTop: 20,
                backgroundColor: "#fafafa",
                borderTopRightRadius: 30,
                borderTopLeftRadius: 30,
                borderBottomLeftRadius: 10,
              }}
            >
              <View
                style={{
                  alignItems: "center",
                }}
              >
                <Image
                  style={{
                    width: 200,
                    height: 200,
                    borderRadius: 100,
                    marginTop: 6,
                  }}
                  //source={{ uri: data[0].employer_logo }}
                  source={{ uri: data[0].employer_logo }}
                />
              </View>
              <TouchableOpacity
                style={{
                  marginTop: 5,
                }}
              >
                <View
                  style={{
                    alignItems: "center",
                    padding: 10,
                  }}
                >
                  <Text
                    numberOfLines={1}
                    style={{
                      color: "#212121",
                      fontWeight: "800",
                      fontSize: 20,
                      textTransform: "capitalize",
                    }}
                  >
                    {data[0].employer_name}
                    fucku
                  </Text>
                  <View
                    style={{
                      flexDirection: "row",
                      marginHorizontal: 30,
                      marginTop: 8,
                    }}
                  >
                    <Text
                      numberOfLines={1}
                      style={{
                        color: "#212121",
                        fontWeight: "500",
                        marginRight: 5,
                        fontSize: 18,
                      }}
                    >
                      {data[0].job_title} /
                    </Text>
                    <Text
                      numberOfLines={1}
                      style={{ color: "", marginTop: 4, fontWeight: "400" }}
                    >
                      {data[0].job_country}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
              <View
                style={{
                  padding: 5,
                }}
              />
            </View>
          </SafeAreaView>
        )}
      </ScrollView>

      <ScrollView>
        {isLoading ? (
          <View
            style={
              {
                //marginTop: 10,
              }
            }
          >
            <ActivityIndicator size={30} color={"white"} />
          </View>
        ) : error ? (
          alert(error.message)
        ) : (
          <SafeAreaView>
            <View
              style={{
                backgroundColor: "#fafafa",
                width: width,
                height: width,
                marginTop: 3,
                borderTopRightRadius: 10,
              }}
            >
              <View>
                <Text
                  style={{
                    color: "#212121",
                    fontSize: 18,
                    fontWeight: "bold",
                    margin: 10,
                  }}
                >
                  Description
                </Text>
              </View>
              <View>
                <Text
                  numberOfLines={5}
                  style={{
                    color: "#212121",
                    marginHorizontal: 10,
                    fontWeight: "400",
                  }}
                >
                  {data[0].job_description}
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    color: "#212121",
                    fontSize: 18,
                    fontWeight: "bold",
                    margin: 10,
                  }}
                >
                  Qualification
                </Text>
              </View>
            </View>
          </SafeAreaView>
        )}
      </ScrollView>
    </View>
  );
}
