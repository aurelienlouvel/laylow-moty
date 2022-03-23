import React from "react";
import MapView, { Marker } from "react-native-maps";
import { ScrollView, StyleSheet, Text, View, Dimensions } from "react-native";
import { Colors, BackgroundColor } from "../theme/Colors";
import TextStyles from "../theme/TextStyles";
import { Padding } from "../theme/Spacing";
import Map from "../components/Map";

export default function Concerts() {
  return (
    <ScrollView>
      <View style={Styles.container}>
        <Map />
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
