import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import Navigation from "./navigation/Navigation";
import { useFonts } from "expo-font";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function App() {
  const [fontLoaded] = useFonts({
    Cloister: require("./assets/font/CloisterBlack.ttf"),
    "Futura-Book": require("./assets/font/FuturaLT-Book.ttf"),
  });

  if (!fontLoaded) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Navigation />
    </GestureHandlerRootView>
  );
}
