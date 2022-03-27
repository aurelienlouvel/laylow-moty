import React from "react";
import { StyleSheet, View } from "react-native";
import Map from "../components/Map";
import BottomSheet from "../components/BottomSheet";

export default function Concerts() {
  return (
    <View style={Styles.container}>
      <Map />
      <BottomSheet />
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#f00",
  },
});
