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
import { Stack, stack, useRouter } from "expo-router";

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
          //color: "#f9fbe7",
          color: "#eceff1",
          //  fontSize: 22,
          textTransform: "capitalize",
          fontWeight: "bold",
        }}
      >
        Popular jobs
      </Text>
      <Text
        style={{
          // marginVertical: 4,
          color: "#616161",
          fontWeight: "bold",
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
export default function JobItem() {
  const { data, isLoading, error } = FetchData({
    query: "Python developer in Texas ",
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
        ) : (
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={data}
            keyExtractor={(item) => item?.job_id}
            renderItem={({ item }) => {
              return (
                <View
                  key={item.job_id}
                  style={{
                    marginHorizontal: 9,
                    color: "#004d40",
                    backgroundColor: "#263238",
                    width: 250,
                    height: 200,
                    alignItems: "center",
                    borderRadius: 40,
                    //padding: 10,
                  }}
                >
                  <TouchableOpacity
                    onPress={() => router.push(`/JobPage/ , ${item?.job_id}`)}
                    style={{
                      marginVertical: 3,
                    }}
                  >
                    <Image
                      style={{
                        width: 100,
                        resizeMode: "contain",
                        height: 100,
                        borderRadius: 50,
                        marginTop: 7,
                      }}
                      source={{ uri: item.employer_logo }}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => router.push(`/JobPage/ , ${item?.job_id}`)}
                  >
                    <Text
                      numberOfLines={1}
                      style={{
                        color: "#eeeeee",
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
                        color: "#4db6ac",
                      }}
                    >
                      {item.job_employment_type}
                    </Text>
                  </View>
                </View>
              );
            }}
          />
        )}
      </View>
    </View>
  );
}
