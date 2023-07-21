import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import FetchData from "../api/Axios";
import { stack, useRouter } from "expo-router";

function TopNav() {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 16,
      }}
    >
      <Text
        style={{
          color: "#f9fbe7",
          fontSize: 21,
          textTransform: "capitalize",
        }}
      >
        Trending jobs
      </Text>
      <Text
        style={{
          fontSize: 18,
          marginVertical: 5,
          color: "#bcaaa4",
        }}
      >
        View all
      </Text>
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
export default function JobScreen() {
  const { data, isLoading, error } = FetchData({
    query: "develoer jobs ",
    num_pages: 7,
  });
  const router = useRouter();
  //console.log(data);
  //const isLoading = false;
  //const error = null;
  //const data = ["fruits", "mangoes", "oranges", "oranges", "oranges"];
  return (
    <View
      style={
        {
          //flex: 1,
        }
      }
    >
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
        ) : (
          <ScrollView>
            <FlatList
              //horizontal
              //showsHorizontalScrollIndicator={false}
              data={data}
              keyExtractor={(item) => item?.id}
              renderItem={({ item }) => {
                return (
                  <View
                    key={item?.job_id}
                    style={{
                      marginVertical: 5,
                      backgroundColor: "white",
                      // width: "100%",
                      // height: 180,
                      alignItems: "center",
                      borderRadius: 20,
                      padding: 15,
                      flexDirection: "row",
                    }}
                  >
                    <TouchableOpacity
                      onPress={() => router.push(`/JobPage/ , ${item.job_id}`)}
                      style={{
                        marginVertical: 3,
                      }}
                    >
                      <Image
                        style={{
                          width: 60,
                          height: 60,
                          borderRadius: 40,
                          marginTop: 7,
                        }}
                        source={{ uri: item.employer_logo }}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => router.push(`/JobPage/ , ${item.job_id}`)}
                      style={{
                        marginHorizontal: 17,
                      }}
                    >
                      <Text
                        numberOfLines={1}
                        style={{
                          marginVertical: 2,
                          textTransform: "capitalize",
                          color: "#212121",
                          fontSize: 21,
                          fontWeight: "700",
                        }}
                      >
                        {item.employer_name}
                      </Text>
                      <Text
                        numberOfLines={1}
                        style={{
                          color: "#212121",
                          fontWeight: "400",
                          marginTop: 4,
                        }}
                      >
                        {item.job_employment_type}
                      </Text>
                    </TouchableOpacity>
                  </View>
                );
              }}
            />
          </ScrollView>
        )}
      </View>
    </View>
  );
}
