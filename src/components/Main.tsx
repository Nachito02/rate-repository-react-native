import React from "react";
import { Text, View } from "react-native";
import RepositoryList from "./RepositoryList";
import AppBar from "./AppBar";
import { Route, Routes, Navigate } from "react-router-native";

const Main = () => {
  const TextSingIn = () => {
    return <Text>Woring</Text>;
  };

  return (
    <View style={{ flex: 1 }}>
      <AppBar />

      <Routes>
        <Route path="/" element={<RepositoryList />} />
        <Route path="/signIn" element={<TextSingIn />} />
      </Routes>
    </View>
  );
};

export default Main;
