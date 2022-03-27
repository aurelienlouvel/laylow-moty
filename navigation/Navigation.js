import { NavigationContainer } from "@react-navigation/native";
import {
  BottomTabBar,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import {
  AccueilNavigator,
  ConcertsNavigator,
  ForumNavigator,
} from "./ScreenNavigation";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import { Colors } from "../theme/Colors";

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <NavigationContainer
      theme={{
        colors: {
          background: Colors.noir,
        },
      }}
    >
      <Tab.Navigator
        initialRouteName="AccueilTab"
        screenOptions={({ route }) => ({
          tabBarStyle: {
            backgroundColor: Colors.noir,
            borderTopWidth: 0,
            height: "8%",
          },
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "AccueilTab") {
              iconName = focused ? "person" : "person-outline";
              return <Ionicons name={iconName} size={size} color={color} />;
            } else if (route.name === "ConcertsTab") {
              iconName = focused
                ? "ticket-confirmation"
                : "ticket-confirmation-outline";
              return (
                <MaterialCommunityIcons
                  name={iconName}
                  size={size}
                  color={color}
                />
              );
            } else if (route.name === "ForumTab") {
              iconName = focused ? "forum" : "forum-outline";
              return (
                <MaterialCommunityIcons
                  name={iconName}
                  size={size}
                  color={color}
                />
              );
            }
          },

          tabBarActiveTintColor: "#ffffff",
          tabBarInactiveTintColor: "#ffffff",
          tabBarShowLabel: false,
          headerShown: false,
        })}
      >
        <Tab.Screen name="AccueilTab" component={AccueilNavigator} />
        <Tab.Screen name="ConcertsTab" component={ConcertsNavigator} />
        <Tab.Screen name="ForumTab" component={ForumNavigator} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
