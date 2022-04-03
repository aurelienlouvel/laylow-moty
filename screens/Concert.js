import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  ActivityIndicator,
  ScrollView,
  Button,
  FlatList,
  Text,
  View,
  Image,
  Linking,
} from "react-native";
// import Musique from "../Components/Musique.js";
import { Colors, BackgroundColor } from "../theme/Colors";
import TextStyles from "../theme/TextStyles";
import { Padding } from "../theme/Spacing";

export default function Album(props) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const response = await fetch(
        "https://www.neomiannay.fr/php-laylow/concert.php?id=" +
          props.route.params.id
      );
      const json = await response.json();
      setData(json);
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
      style={StyleSheet.compose(BackgroundColor(Colors.noir), Padding(32))}
    >
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <View>
          <Button title="Go back" onPress={() => props.navigation.goBack()} />
          <Image style={TextStyles.imgConcert} source={{ uri: data.img }} />
          <Text style={TextStyles.h2}>{data.festival}</Text>
          <Text style={TextStyles.ville}>{data.ville}</Text>
          <Text style={TextStyles.h4}>{data.lieu}</Text>
          <Text style={TextStyles.bottomText}>{data.date}</Text>
          <Button
            title="Acheter un ticket"
            onPress={() => Linking.openURL(data.ticket)}
          />
        </View>
      )}
    </ScrollView>
  );
}
