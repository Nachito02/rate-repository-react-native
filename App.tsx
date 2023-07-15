import Main from "./src/components/Main";
import { NativeRouter, Router, } from "react-router-native";

export default function App() {
  return (
    <NativeRouter>
      <Main />
    </NativeRouter>
  );
}
