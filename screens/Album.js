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
import { Colors, BackgroundColor, Color } from "../theme/Colors";
import TextStyles from "../theme/TextStyles";
import ButtonStyles from "../theme/ButtonStyles";
import { Padding } from "../theme/Spacing";
import { SvgXml } from "react-native-svg";
import { Ionicons } from "@expo/vector-icons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const xml = `
<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px"><rect width="8" height="5" x="3" y="33" fill="#f98613"/><rect width="8" height="5" x="14" y="17" fill="#f1bc18"/><rect width="8" height="5" x="14" y="25" fill="#ed6630"/><rect width="8" height="5" x="14" y="33" fill="#d64d45"/><rect width="8" height="5" x="25" y="25" fill="#bd3369"/><rect width="8" height="5" x="25" y="33" fill="#6d2f87"/><rect width="8" height="5" x="36" y="9" fill="#19aa5c"/><rect width="8" height="5" x="36" y="17" fill="#129b8a"/><rect width="8" height="5" x="36" y="25" fill="#1084b6"/><rect width="8" height="5" x="36" y="33" fill="#1168cf"/></svg>
`;

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
            style={[Padding(16), { marginTop: 24 }]}
            name={"chevron-back"}
            size={32}
            color={Colors.blanc}
            onPress={() => props.navigation.goBack()}
          />
          <Image
            style={TextStyles.imgAlbum}
            source={Images[props.route.params.id - 1]}
          />
          <Text style={[Padding(24, "x"), TextStyles.h2]}>{data.titre}</Text>
          <Text style={TextStyles.underText}>
            {data.description} · {data.annee}
          </Text>
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
              style={[ButtonStyles.music, { backgroundColor: "#00dc4d" }]}
              onPress={() => Linking.openURL(data.spotify)}
            >
              <Text style={[ButtonStyles.textMusic, { color: Colors.blanc }]}>
                Écouter sur Spotify
              </Text>
              <FontAwesome5
                name={"spotify"}
                size={26}
                color={Colors.blanc}
                brand
              />
            </Pressable>
            <Pressable
              style={[ButtonStyles.music, BackgroundColor(Colors.blanc)]}
              onPress={() => Linking.openURL(data.apple)}
            >
              <Text style={[ButtonStyles.textMusic, { color: Colors.noir }]}>
                Écouter sur Apple Music
              </Text>
              <FontAwesome5
                name={"apple"}
                size={26}
                color={Colors.noir}
                brand
              />
            </Pressable>
            <Pressable
              style={[ButtonStyles.music, BackgroundColor("#062444")]}
              onPress={() => Linking.openURL(data.deezer)}
            >
              <Text style={[ButtonStyles.textMusic, { color: Colors.blanc }]}>
                Écouter sur Deezer
              </Text>
              <SvgXml xml={xml} width="26px" height="26px" />
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
    padding: 4,
    borderBottomWidth: 1,
    borderColor: "#ffffff20",
  },
  index: {
    margin: 10,
    fontSize: 16,
    paddingVertical: 2,
    color: Colors.blanc,
    opacity: 0.6,
    fontFamily: "SFPro-Regular",
  },
  text: {
    flex: 1,
    marginVertical: 12,
    fontSize: 16,
    color: Colors.blanc,
    fontFamily: "SFPro-SemiBold",
  },
  time: {
    margin: 10,
    fontSize: 16,
    color: Colors.blanc,
    fontFamily: "SFPro-Regular",
  },
});
