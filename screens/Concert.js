import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  ScrollView,
  Button,
  Text,
  View,
  Image,
  Linking,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { Colors, BackgroundColor } from "../theme/Colors";
import TextStyles from "../theme/TextStyles";
import { Padding } from "../theme/Spacing";
import moment from "moment";
import "moment/locale/fr";

export default function Album(props) {
  let options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  options.timeZone = "UTC";
  options.timeZoneName = "short";

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

  moment.locale("fr");
  let date = moment(data.date).format("dddd, D MMMM YYYY").toLocaleUpperCase();
  let heure = moment(data.date).format("HH:mm");

  return (
    <ScrollView style={BackgroundColor(Colors.noir)}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <View>
          <Ionicons
            style={Padding(16)}
            name={"chevron-back"}
            size={32}
            color={"#ffffff"}
            onPress={() => props.navigation.goBack()}
          />
          <View style={Padding(24, "x")}>
            <Image style={TextStyles.imgConcert} source={{ uri: data.img }} />
            <Text style={TextStyles.h2}>{data.festival}</Text>
            <View style={Padding(16, "y")}>
              <Text style={TextStyles.festival}>Où ?</Text>
              <Text style={TextStyles.lieu}>{data.lieu}</Text>
              <Text style={TextStyles.ville}>{data.ville}</Text>
            </View>
            <View style={Padding(16, "y")}>
              <Text style={TextStyles.festival}>Quand ?</Text>
              <Text style={TextStyles.lieu}>{heure}</Text>
              <Text style={TextStyles.ville}>{date}</Text>
            </View>
            <Button
              style={Padding(24, "y")}
              title="Acheter un ticket"
              onPress={() => Linking.openURL(data.ticket)}
            />
          </View>
        </View>
      )}
    </ScrollView>
  );
}
