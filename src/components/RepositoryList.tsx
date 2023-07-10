import React from "react";
import { View, Text, FlatList } from "react-native";
import repositories from "../data/repositories";
import RepositoryItem from "./RepositoryItem";

const RepositoryList = () => {
  return (
    <FlatList
      data={repositories}
      ItemSeparatorComponent={() => <Text></Text>}
      renderItem={({ item }) => {
        return <RepositoryItem item={item} />;
      }}
    ></FlatList>
  );
};

export default RepositoryList;
