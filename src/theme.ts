import { Platform } from "react-native";
const theme = {
  appBar: {
    primary: "#24292e",
    textSecondary: "#999",
    textPrimary: "#fff",
  },
  colors: {
    textPrimary: "#24292e",
    textSecondary: "#586069",
    primary: "#0366d6",
    white: "#fafafa",
  },

  fontSizes: {
    body: 14,
    subheading: 16,
  },

  fonts: {
    main : Platform.select({
      ios: 'Arial',
      android : 'Roboto',
      default : 'System'
    })
  },
  fontWeights: {
    normal: "400" as "normal",
    bold: "700" as "bold",
  },
};

export default theme;
