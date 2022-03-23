import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import MessageList from "../containers/MessageList";
import { Colors, BackgroundColor } from "../theme/Colors";
import TextStyles from "../theme/TextStyles";
import { Padding, Margin } from "../theme/Spacing";

export default function Forum() {
  return (
    <ScrollView style={StyleSheet.compose(BackgroundColor(Colors.noir))}>
      <View style={Padding(32, "l")}>
        <Text style={TextStyles.h2}>Forum</Text>
        <MessageList />
      </View>
    </ScrollView>
  );
}
