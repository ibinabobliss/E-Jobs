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
        marginVertical: 10,
      }}
    >
      <Text
        style={{
          color: "#f9fbe7",
          fontSize: 21,
          textTransform: "capitalize",
        }}
      >
        Popular jobs
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
export default function JobPage() {
  const { data, isLoading, error } = FetchData({
    query: "Python developer ",
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
              horizontal
              showsHorizontalScrollIndicator={false}
              data={data}
              keyExtractor={(item) => item?.job_id}
              renderItem={({ item }) => {
                return (
                  <View
                    key={item?.job_id}
                    style={{
                      marginHorizontal: 5,
                      backgroundColor: "white",
                      width: 250,
                      height: 200,
                      alignItems: "center",
                      borderRadius: 40,
                      //padding: 10,
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
                          width: 100,
                          resizeMode: "contain",
                          height: 100,
                          borderRadius: 40,
                          marginTop: 7,
                        }}
                        source={{ uri: item.employer_logo }}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => router.push(`/JobPage/ , ${item.job_id}`)}
                    >
                      <Text
                        numberOfLines={1}
                        style={{
                          color: "#212121",
                          fontWeight: "700",
                          fontSize: 22,
                          marginVertical: 6,
                        }}
                      >
                        {item.employer_name}
                      </Text>
                    </TouchableOpacity>
                    <View>
                      <Text
                        style={{
                          color: "grey",
                        }}
                      >
                        {item.job_employment_type}
                      </Text>
                    </View>
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
