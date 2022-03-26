import React from "react";
import { ScrollView, StyleSheet, Text, View, Dimensions } from "react-native";
import { Colors, BackgroundColor } from "../theme/Colors";
import TextStyles from "../theme/TextStyles";
import { Padding } from "../theme/Spacing";
import Map from "../components/Map";
import BottomSheet from "../components/BottomSheet";

export default function Concerts() {
  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={Styles.container}>
        <Map />
        <BottomSheet />
      </View>
    </ScrollView>
  );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
