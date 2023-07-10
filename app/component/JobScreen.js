import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from "react-native";
import FetchData from "../api/Axios";
import { useRouter, Stack } from "expo-router";

function TopNavigation() {
  return (
    <View
      style={{
        justifyContent: "space-between",
        flexDirection: "row",
        marginTop: 10,
      }}
    >
      <Text
        style={{
          color: "#fafafa",
          fontSize: 18,
          fontWeight: "400",
        }}
      >
        Nearby Jobs{" "}
      </Text>
      <Text
        style={{
          color: "grey",
          marginTop: 4,
          fontWeight: "500",
          marginTop: 3,
        }}
      >
        {" "}
        View all
      </Text>
    </View>
  );
}

function SecondNavigation() {
  const { data, isLoading, error } = FetchData({
    query: "developer jobs ",
    num_pages: "1",
  });
  const router = useRouter();

  return (
    <View
      style={{
        marginTop: 20,
      }}
    >
      {isLoading ? (
        <ActivityIndicator size={40} color={"white"} />
      ) : error ? (
        alert(error.message)
      ) : (
        <FlatList
          keyExtractor={(item) => item.id}
          data={data}
          renderItem={({ item }) => {
            return (
              <View
                style={{
                  marginVertical: 8,
                  backgroundColor: "white",
                  padding: 10,
                  borderRadius: 15,
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <View>
                  <Image
                    resizeMode="contain"
                    source={{ uri: item?.employer_logo }}
                    style={{
                      width: 60,
                      height: 60,
                      // borderRadius: 30,
                    }}
                  />
                </View>
                <TouchableOpacity
                  onPress={() => router.push(`/JobPage/${item.item_id}`)}
                  style={{
                    marginHorizontal: 10,
                  }}
                >
                  <View>
                    <Text
                      numberOfLines={1}
                      style={{
                        color: "black",
                        fontSize: 20,
                        fontWeight: "bold",
                        textTransform: "capitalize",
                      }}
                    >
                      {item.job_title}
                    </Text>
                  </View>
                  <View>
                    <Text
                      numberOfLines={1}
                      style={{
                        color: "#212121",
                        fontWeight: "500",
                        marginTop: 5,
                        textTransform: "capitalize",
                      }}
                    >
                      {item.employer_name}
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            );
          }}
        />
      )}
    </View>
  );
}

const JobScreen = () => {
  return (
    <View>
      <TopNavigation />
      <SecondNavigation />
    </View>
  );
};

export default JobScreen;
