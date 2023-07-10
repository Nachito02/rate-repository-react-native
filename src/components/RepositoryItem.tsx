import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Repository } from "../interfaces/repository";
import StyledText from "./StyledText";
interface RepositoryItemProps {
  item: Repository;
}

const RepositoryItem: React.FC<RepositoryItemProps> = ({ item }) => {
  return (
     <View key={item.id} style={styles.container}>
      <StyledText fontWeight="bold" fontSize="subheading">FullName: {item.description}</StyledText>
      <StyledText >{item.language}</StyledText>
      <StyledText >{item.stargazersCount}</StyledText>
      <StyledText >{item.forksCount}</StyledText>
      <StyledText >{item.reviewCount}</StyledText>
      <StyledText >{item.ratingAverage}</StyledText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 5,
    paddingTop: 5,
  },

  strong: {
    fontWeight: "bold",
    color: "#89f",
    marginBottom: 5,
  },
});

export default RepositoryItem;
