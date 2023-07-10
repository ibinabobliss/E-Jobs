import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  useWindowDimensions,
  Image,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
  FlatList,
} from "react-native";
import FetchData from "../api/Axios";
import { useRouter } from "expo-router";

const ForthView = () => {
  const { data, isLoading, error } = FetchData({
    query: "developer jobs ",
    num_pages: "1",
  });
  const router = useRouter();
  return (
    <View
      style={{
        marginVertical: 10,
      }}
    >
      <View
        style={{
          justifyContent: "space-between",
          flexDirection: "row",
        }}
      >
        <Text
          style={{
            color: "#fafafa",
            fontSize: 18,
            fontWeight: "400",
            marginTop: 3,
          }}
        >
          Popular Jobs{" "}
        </Text>
        <Text
          style={{
            color: "grey",
            marginTop: 4,
            fontWeight: "500",
            marginTop: 7,
          }}
        >
          {" "}
          View all
        </Text>
      </View>

      <View
        style={{
          marginTop: 20,
        }}
      >
        {isLoading ? (
          <ActivityIndicator size={40} color={"white"} />
        ) : error ? (
          alert("please check your network connections", error.message)
        ) : (
          <FlatList
            keyExtractor={(item) => item.id}
            data={data}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => {
              return (
                <View key={index}>
                  <View
                    key={item.job_id}
                    style={{
                      marginHorizontal: 5,
                      backgroundColor: "white",
                      padding: 10,
                      alignItems: "center",
                      borderRadius: 10,
                    }}
                  >
                    <TouchableOpacity
                      style={{}}
                      onPress={() => router.push(`/JobPage/${item.item_id}`)}
                    >
                      <Image
                        resizeMode="contain"
                        source={{ uri: item?.employer_logo }}
                        style={{
                          width: 70,
                          height: 70,
                          // borderRadius: 30,
                        }}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => router.push(`/JobPage/${item.item_id}`)}
                      style={{
                        marginTop: 20,
                      }}
                    >
                      <Text
                        numberOfLines={1}
                        style={{
                          color: "#212121",
                          fontWeight: "bold",
                          fontSize: 21,
                          textTransform: "capitalize",
                        }}
                      >
                        {item.employer_name}
                      </Text>
                    </TouchableOpacity>
                    <View
                      style={{
                        marginTop: 8,
                      }}
                    >
                      <Text
                        style={{
                          fontWeight: "300",
                          textTransform: "capitalize",
                        }}
                      >
                        {item.job_employment_type}
                      </Text>
                    </View>
                  </View>
                </View>
              );
            }}
          />
        )}
      </View>
    </View>
  );
};

export default function JobItems() {
  return (
    <View>
      <ForthView />
    </View>
  );
}
/////////////////////////////////
