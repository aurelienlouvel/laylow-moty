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
    <ScrollView
      style={StyleSheet.compose(BackgroundColor(Colors.noir), Padding(32))}
    >
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <View>
          <Button title="Go back" onPress={() => props.navigation.goBack()} />
          <Image style={TextStyles.imgAlbum} source={Images[props.route.params.id - 1]} />
          <Text style={TextStyles.h2}>{data.titre}</Text>
          <Text style={TextStyles.underText}>{data.description}</Text>
          <Text style={TextStyles.underText}>HIP-HOP/RAP · {data.annee}</Text>
          <Text style={TextStyles.bottomText}>{data.date}</Text>
          <Text style={TextStyles.bottomText}>{data.pistes} morceaux, {data.duree}</Text>
          <Text style={TextStyles.bottomText}>{data.label}</Text>
          {/* <FlatList
            data={data.musiques}
            renderItem={Musique}
            keyExtractor={(musique) => musique.id}
          ></FlatList> */}
          <Button
            title="Ecouter sur Spotify"
            onPress={() => Linking.openURL(data.spotify)}
          />
          <Button
            title="Ecouter sur Deezer"
            onPress={() => Linking.openURL(data.deezer)}
          />
          <Button
            title="Ecouter sur Apple Music"
            onPress={() => Linking.openURL(data.apple)}
          />
        </View>
      )}
    </ScrollView>
  );
}
