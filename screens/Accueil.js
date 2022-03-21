import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Button,
} from "react-native";
import { Colors, BackgroundColor } from "../theme/Colors";
import TextStyles from "../theme/TextStyles";
import { Padding, Margin } from "../theme/Spacing";
import AlbumList from "../containers/AlbumList";

export default function Accueil() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const response = await fetch(
        "https://www.neomiannay.fr/php-laylow/biographie.php"
      );
      const json = await response.json();
      setData(json[0]);
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
    <ScrollView
      style={StyleSheet.compose(BackgroundColor(Colors.noir), Padding(32, "y"))}
    >
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <View>
          <View style={Padding(32, "x")}>
            <Text style={TextStyles.h1}>Laylow</Text>
          </View>
          <View style={Padding(32, "x")}>
            <Text style={TextStyles.h2}>Il était une fois ...</Text>
            <Text style={TextStyles.p}>{data.texte_biographie}</Text>
          </View>
          <View style={Padding(32, "l")}>
            <Text style={TextStyles.h2}>Discographie</Text>
            <AlbumList />
          </View>
        </View>
      )}
    </ScrollView>
  );
}

const Styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.noir,
  },
});
