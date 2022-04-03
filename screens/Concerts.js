import React, { useEffect, useState } from "react";
import { ScrollView, ActivityIndicator, StyleSheet, View } from "react-native";
import Map from "../components/Map";
import BottomSheet from "../components/BottomSheet";
import { Colors, BackgroundColor } from "../theme/Colors";

export default function Concerts() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const response = await fetch(
        "https://www.neomiannay.fr/php-laylow/concerts.php"
      );
      const json = await response.json();
      setData(json);
      console.log(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <ScrollView style={BackgroundColor(Colors.noir)}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <View style={Styles.container}>
          <Map />
          <BottomSheet />
        </View>
      )}
    </ScrollView>
  );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
