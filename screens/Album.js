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
  Pressable,
} from "react-native";
import { Colors, BackgroundColor } from "../theme/Colors";
import TextStyles from "../theme/TextStyles";
import { Padding } from "../theme/Spacing";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";

const Images = [
  require("../assets/img/albums/mercy.jpg"),
  require("../assets/img/albums/digitalova.jpg"),
  require("../assets/img/albums/raw.jpg"),
  require("../assets/img/albums/raw-z.jpg"),
  require("../assets/img/albums/trinity.jpg"),
  require("../assets/img/albums/mr-anderson.jpg"),
];

export default function Album(props) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const response = await fetch(
        "https://www.neomiannay.fr/php-laylow/album.php?id=" +
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
    <ScrollView style={BackgroundColor(Colors.noir)}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <View style={{ flex: 1, flexDirection: "column" }}>
          <Ionicons
            style={[Padding(16), {marginTop: 40}]}
            name={"chevron-back"}
            size={32}
            color={"#ffffff"}
            onPress={() => props.navigation.goBack()}
          />
          <Image
            style={TextStyles.imgAlbum}
            source={Images[props.route.params.id - 1]}
          />
          <Text style={[Padding(24, "x"), TextStyles.h2]}>{data.titre}</Text>
          <Text style={TextStyles.underText}>{data.description}</Text>
          <Text style={TextStyles.underText}>HIP-HOP/RAP · {data.annee}</Text>

          {/* liste des sons Musique  */}
          <FlatList
            style={{
              marginTop: 16,
              marginBottom: 16,
              borderTopWidth: 1,
              borderColor: "#ffffff33",
            }}
            nestedScrollEnabled
            data={data.musiques}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.wrapper}>
                <Text style={styles.index}>{item.position}</Text>
                <Text style={styles.text}>{item.titre}</Text>
                <Text style={styles.time}>{item.duree}</Text>
              </View>
            )}
          />

          <Text style={[TextStyles.bottomText, { paddingLeft: 16 }]}>
            {data.date}
          </Text>
          <Text style={[TextStyles.bottomText, { paddingLeft: 16 }]}>
            {data.pistes} morceaux, {data.duree}
          </Text>
          <Text
            style={[
              TextStyles.bottomText,
              { paddingLeft: 16, marginBottom: 16 },
            ]}
          >
            {data.label}
          </Text>
          <View style={Padding(16)}>
            <Pressable
              style={TextStyles.button}
              onPress={() => Linking.openURL(data.spotify)}
            >
              <Text style={[[TextStyles.buttonContent], { color: "#1DB954" }]}>
                Écouter sur Spotify
              </Text>
              <MaterialCommunityIcons
                name={"spotify"}
                size={32}
                color={"#1DB954"}
              />
            </Pressable>
            <Pressable
              style={TextStyles.button}
              onPress={() => Linking.openURL(data.apple)}
            >
              <Text style={[[TextStyles.buttonContent], { color: "#f94c57" }]}>
                Écouter sur Apple Music
              </Text>
              <Fontisto name={"applemusic"} size={32} color={"#f94c57"} />
            </Pressable>
            <Pressable
              style={TextStyles.button}
              onPress={() => Linking.openURL(data.deezer)}
            >
              <Text style={[[TextStyles.buttonContent], { color: "#00C7F2" }]}>
                Écouter sur Deezer
              </Text>
              {/* <FontAwesomeIcon icon={"deezer"} size={32} color={"purple"} /> */}
            </Pressable>
          </View>
        </View>
      )}
    </ScrollView>
  );
}

// styles additionnels pour la liste de sons
const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    marginLeft: 16,
    paddingBottom: 16,
  },
  wrapper: {
    flex: 1,
    flexDirection: "row",
    padding: 5,
    borderTopWidth: 1,
    borderColor: "#ffffff20",
  },
  index: {
    margin: 10,
    fontSize: 16,
    paddingVertical: 2,
    color: "#ffffff",
    opacity: 0.64,
  },
  text: {
    flex: 1,
    marginVertical: 12,
    fontSize: 16,
    color: "#ffff",
  },
  time: {
    margin: 10,
    fontSize: 16,
    color: "#ffff",
  },
});
