import React from "react";
import { Text, StyleSheet, StyleProp, TextStyle } from "react-native";
import { ReactNode } from "react";
import theme from "../theme";

const styles = StyleSheet.create({
  text: {
    fontSize: 12,
    color: theme.colors.textPrimary,
    fontWeight: theme.fontWeights.normal,
    fontFamily: theme.fonts.main,
  },

  bold: {
    fontWeight: theme.fontWeights.bold,
  },
  colorPrimary: {
    color: theme.colors.primary,
  },

  colorSecondary: {
    color: theme.colors.textSecondary,
  },

  subheading: {
    fontSize: theme.fontSizes.subheading,
  },

  small: {
    fontSize: 10,
  },
});

interface StyledTextProps {
  color?: string;
  fontSize?: string;
  fontWeight?: string;
  style?: StyleProp<TextStyle>;
  children?: ReactNode;
}

const StyledText: React.FC<StyledTextProps> = ({
  children,
  color,
  fontSize,
  fontWeight,
  style,
  ...restOfProps
}) => {
  const textStyles = [
    styles.text,
    color === "primary" && styles.colorPrimary,
    color === "secondary" && styles.colorSecondary,
    fontSize === "subheading" && styles.subheading,
    fontWeight === "bold" && styles.bold,

  ];

  return (
    <Text style={textStyles} {...restOfProps}>
      {children}
    </Text>
  );
};

export default StyledText;
