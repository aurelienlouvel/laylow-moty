import { StatusBar } from "expo-status-bar";
import Navigation from "./navigation/Navigation";
import { useFonts } from "expo-font";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  const [fontLoaded] = useFonts({
    Cloister: require("./assets/font/CloisterBlack.ttf"),
    "SFPro-Regular": require("./assets/font/SFProDisplay-Regular.ttf"),
    "SFPro-Bold": require("./assets/font/SFProDisplay-Semibold.ttf"),
  });

  if (!fontLoaded) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Navigation />
    </GestureHandlerRootView>
  );
  // return (
  //   <GestureHandlerRootView style={{ flex: 1 }}>
  //   <SafeAreaProvider>
  //     <SafeAreaView style={{ flex: 1 }}>
  //       <Navigation />
  //     </SafeAreaView>
  //   </SafeAreaProvider>
  //   </GestureHandlerRootView>
  // );
}
