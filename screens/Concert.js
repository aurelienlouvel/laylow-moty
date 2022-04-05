import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  ScrollView,
  Text,
  View,
  Image,
  Linking,
  Pressable,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Colors, BackgroundColor } from "../theme/Colors";
import TextStyles from "../theme/TextStyles";
import ButtonStyles from "../theme/ButtonStyles";
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
    <ScrollView style={[BackgroundColor(Colors.noir), { flex: 1 }]}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <View>
          <Ionicons
            style={[Padding(16), { marginTop: 24 }]}
            name={"chevron-back"}
            size={32}
            color={Colors.blanc}
            onPress={() => props.navigation.goBack()}
          />
          <View style={Padding(24, "x")}>
            <Image style={TextStyles.imgConcert} source={{ uri: data.img }} />
            <Text style={TextStyles.h2}>{data.festival}</Text>
            <View style={Padding(16, "y")}>
              <Text style={[TextStyles.h3, { fontSize: 18 }]}>Où ?</Text>
              <Text
                style={[TextStyles.h1, { fontSize: 48, color: Colors.blanc }]}
              >
                {data.lieu}
              </Text>
              <Text style={TextStyles.p}>{data.ville}</Text>
            </View>
            <View style={Padding(16, "y")}>
              <Text style={[TextStyles.h3, { fontSize: 18 }]}>Quand ?</Text>
              <Text
                style={[TextStyles.h1, { fontSize: 48, color: Colors.blanc }]}
              >
                {heure}
              </Text>
              <Text style={TextStyles.p}>{date}</Text>
            </View>
          </View>
          <Pressable
            style={ButtonStyles.secondary}
            onPress={() => Linking.openURL(data.ticket)}
          >
            <Text style={ButtonStyles.text}>ACHETER UN TICKET</Text>
          </Pressable>
        </View>
      )}
    </ScrollView>
  );
}
