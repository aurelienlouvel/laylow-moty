import React from "react";
import { ScrollView, StyleSheet, Text, View, Pressable } from "react-native";
import MessageList from "../containers/MessageList";
import Colors, { BackgroundColor } from "../theme/Colors";
import TextStyles from "../theme/TextStyles";
import { Padding } from "../theme/Spacing";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

export default function Forum(props) {
  const navigation = useNavigation();

  return (
    <View style={[BackgroundColor(Colors.noir), { flex: 1 }]}>
      <ScrollView style={Padding(32)}>
        <Text style={TextStyles.h1}>Forum</Text>
        <MessageList />
      </ScrollView>
      <Pressable
        style={styles.icon}
        onPress={() => {
          navigation.push("Message", { id: props.id });
        }}
      >
        <Ionicons name="add" size={32} color={Colors.blanc} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  icon: {
    backgroundColor: Colors.rouge,
    width: 52,
    height: 52,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 26,
    position: "absolute",
    bottom: 20,
    right: 20,
  },
});
