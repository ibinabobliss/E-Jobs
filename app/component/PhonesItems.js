import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  useWindowDimensions,
  ActivityIndicator,
} from "react-native";
const TopNavigation = () => {
  const { width, height } = useWindowDimensions();
  const [isLoading, setIsLoading] = useState(false);

  const items = [
    {
      id: 1,
      username: "ibinabo bliss",
      image: require("../assets/picture.png"),
    },
    {
      id: 2,
      username: "james bliss",
      image: require("../assets/picture.png"),
    },
    {
      id: 3,
      username: "ibiso bliss",
      image: require("../assets/picture.png"),
    },
    {
      id: 4,
      username: "pamela bliss",
      image: require("../assets/picture.png"),
    },
    {
      id: 5,
      username: "shalom bliss",
      image: require("../assets/picture.png"),
    },
  ];
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, [5000]);
  }, []);

  const error = null;
  return (
    <View
      style={{
        marginVertical: 18,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text
          style={{
            color: "#fafafa",
            fontWeight: "600",
            fontSize: 18,
          }}
        >
          Top Searched
        </Text>
        <Text
          style={{
            color: "#fafafa",
            fontWeight: "300",
            fontSize: 18,
            marginTop: 1,
          }}
        >
          View all
        </Text>
      </View>

      <View>
        {isLoading ? (
          <ActivityIndicator
            style={{
              alignItems: "center",
              justifyContent: "center",
              marginTop: "60%",
            }}
            size={50}
            color={"black"}
          />
        ) : error ? (
          alert(error.message)
        ) : (
          <ScrollView
            horizontal
            style={{
              marginVertical: 20,
            }}
          >
            {items.map((item) => {
              return (
                <View
                  style={{
                    backgroundColor: "#fafafa",
                    width: 300,
                    height: width,
                    flex: 1,
                    borderRadius: 15,
                    marginHorizontal: 3,
                    alignItems: "center",
                  }}
                >
                  <TouchableOpacity>
                    <Image
                      source={{ uri: item?.image }}
                      style={{
                        width: 250,
                        height: 300,
                        marginHorizontal: 10,
                        marginTop: 8,
                        borderRadius: 30,
                      }}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Text
                      style={{
                        color: "#fff",
                        marginVertical: 10,
                        justifyContent: "center",
                        fontWeight: "bold",
                        backgroundColor: "#212121",
                        padding: 10,
                        paddingHorizontal: 20,
                      }}
                    >
                      {item.username}
                    </Text>
                  </TouchableOpacity>
                </View>
              );
            })}
          </ScrollView>
        )}
      </View>
    </View>
  );
};

export default function PhoneItems() {
  return (
    <View>
      <TopNavigation />
    </View>
  );
}
