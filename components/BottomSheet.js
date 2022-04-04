import React, { useCallback, useMemo, useRef } from "react";
import { View, Text, StyleSheet } from "react-native";
import TextStyles from "../theme/TextStyles";
import { Colors, BackgroundColor } from "../theme/Colors";
import { Padding } from "../theme/Spacing";
import ConcertList from "../containers/ConcertList";
import BottomSheet from "@gorhom/bottom-sheet";

export default function Sheet() {
  const bottomSheetRef = useRef(null);

  const snapPoints = useMemo(() => ["22%", "66%"], []);

  const handleSheetChanges = useCallback((index) => {
    console.log("handleSheetChanges", index);
  }, []);

  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={1}
      snapPoints={snapPoints}
      onChange={handleSheetChanges}
      handleComponent={() => {
        return (
          <View style={[Styles.container, BackgroundColor(Colors.noir)]}>
            <View style={[Styles.indicator, BackgroundColor(Colors.blanc)]} />
          </View>
        );
      }}
    >
      <View style={[Styles.contentContainer, Padding(24, "x")]}>
        <ConcertList />
      </View>
    </BottomSheet>
  );
}

const Styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    backgroundColor: Colors.noir,
    alignItems: "flex-start",
    // paddingBottom: 90,
  },
  container: {
    height: 24,
    padding: 10,
    shadowOffset: {
      width: 0,
      height: -5,
    },
    shadowOpacity: 0.8,
    shadowRadius: 10,
    elevation: 16,
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
  },

  indicator: {
    alignSelf: "center",
    width: 40,
    height: 4,
    borderRadius: 4,
  },
});
