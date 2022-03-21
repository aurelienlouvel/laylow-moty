import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import Navigation from "./navigation/Navigation";
import { useFonts } from "expo-font";

export default function App() {
  const [fontLoaded] = useFonts({
    Cloister: require("./assets/font/CloisterBlack.ttf"),
    "Futura-Book": require("./assets/font/FuturaLT-Book.ttf"),
  });

  if (!fontLoaded) {
    return null;
  }

  return <Navigation />;
}
