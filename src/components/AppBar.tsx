import React, { ReactNode } from "react";
import { View, StyleSheet } from "react-native";
import Constants from "expo-constants";
import theme from "../theme";
import StyledText from "./StyledText";
import { Link } from "react-router-native";

interface AppBarTabProps {
  active?: boolean;
  children?: ReactNode;
  to?: string;
}

const AppBarTab: React.FC<AppBarTabProps> = ({
  active,
  children,
  to = "/",
}) => {
 return <Link to={to}>
    <StyledText style={styles.text}> {children} </StyledText>
  </Link>;
};

const AppBar = () => {
  return (
    <View style={styles.container}>
      <AppBarTab active={true} to="/"> Repositories </AppBarTab>
      <AppBarTab active={true} to="/signIn">  SigIn </AppBarTab>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.appBar.primary,
    paddingTop: Constants.statusBarHeight + 10,
    paddingBottom: 10,
    paddingLeft: 10,
  },

  text: {
    color: theme.appBar.textPrimary,
  },
});
export default AppBar;
