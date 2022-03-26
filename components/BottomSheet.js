import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function BottomSheet() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text>BottomSheet</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
