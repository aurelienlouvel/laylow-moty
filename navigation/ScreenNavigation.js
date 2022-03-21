import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Accueil from "../screens/Accueil";
import Album from "../screens/Album";
import Concerts from "../screens/Concerts";
import Concert from "../screens/Concert";
import Forum from "../screens/Forum";
import Message from "../screens/Message";

const Stack = createNativeStackNavigator();

export function AccueilNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Accueil"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Accueil" component={Accueil} />
      <Stack.Screen name="Album" component={Album} />
    </Stack.Navigator>
  );
}
export function ConcertsNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Concerts"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Concerts" component={Concerts} />
      <Stack.Screen name="Concert" component={Concert} />
    </Stack.Navigator>
  );
}
export function ForumNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Forum"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Forum" component={Forum} />
      <Stack.Screen name="Message" component={Message} />
    </Stack.Navigator>
  );
}
