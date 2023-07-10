import React from "react";
import { View, Text } from "react-native";
import { useSearchParams, useRouter, Stack } from "expo-router";
import FetchData from "../api/Axios";

export default function JobPage() {
  const params = useSearchParams();
  const router = useRouter();
  const { data, isLoading, error } = FetchData({
    query: "developer jobs",
    num_pages: 1,
    item_id: params.id,
  });
  return (
    <View>
      <Text>Jobpage</Text>
    </View>
  );
}
