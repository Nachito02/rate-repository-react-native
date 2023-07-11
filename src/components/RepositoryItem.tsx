import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { Repository } from "../interfaces/repository";
import theme from "../theme";
import RepositoryStats from "./RepositoryStats";
import RepositoryItemHeader from "./RepositoryItemHeader";
interface RepositoryItemProps {
  item: Repository;
}

const RepositoryItem: React.FC<RepositoryItemProps> = ({ item }) => {
  return (
    <View key={item.id} style={styles.container}>
      <RepositoryItemHeader item={item} />
      <RepositoryStats item={item} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 5,
    paddingTop: 5,
  },

  language: {
    padding: 4,
    color: theme.colors.white,
    backgroundColor: theme.colors.primary,
    alignSelf: "flex-start",
    marginVertical: 4,
    borderRadius: 4,
    overflow: "hidden",
  },

  image: {
    width: 48,
    height: 48,
    borderRadius: 4,
  },
});

export default RepositoryItem;
