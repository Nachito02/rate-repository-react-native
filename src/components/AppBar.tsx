import React, { ReactNode } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import Constants from "expo-constants";
import theme from "../theme";
import StyledText from "./StyledText";
import { Link, useLocation } from "react-router-native";

interface AppBarTabProps {
  active?: boolean;
  children?: ReactNode;
  to?: string;
}

const AppBarTab: React.FC<AppBarTabProps> = ({
  active : propActive,
  children,
  to = "/",
}) => {
  const { pathname } = useLocation();
  const active = pathname === to
  const textStyles = [styles.text, active && styles.active];
  return (
    <Link to={to}>
      <StyledText style={textStyles} fontWeight="bold">
        {children}
      </StyledText>
    </Link>
  );
};

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal style={styles.scroll}>
        <AppBarTab to="/">Repositories</AppBarTab>
        <AppBarTab to="/signIn">SigIn</AppBarTab>

        <AppBarTab to="/register">Register</AppBarTab>
        <AppBarTab to="/github">Visit my github</AppBarTab>

        <AppBarTab to="/linkedin">Visit my Linkedin</AppBarTab>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: theme.appBar.primary,
    paddingTop: Constants.statusBarHeight + 10,
  },

  text: {
    paddingHorizontal: 10,
    color: theme.appBar.textSecondary,
  },

  scroll: {
    paddingBottom: 15,
  },

  active: {
    color: theme.appBar.textPrimary,
  },
});
export default AppBar;
