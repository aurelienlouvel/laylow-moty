import { Pressable, StyleSheet, Text, View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Colors from "../theme/Colors";
import TextStyles from "../theme/TextStyles";

export default function AlbumCard(props) {
  const navigation = useNavigation();
  const Images = [
    require("../assets/img/albums/mercy.jpg"),
    require("../assets/img/albums/digitalova.jpg"),
    require("../assets/img/albums/raw.jpg"),
    require("../assets/img/albums/raw-z.jpg"),
    require("../assets/img/albums/trinity.jpg"),
    require("../assets/img/albums/mr-anderson.jpg"),
  ];

  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => {
          navigation.push("Album", { id: props.id });
        }}
      >
        <Image style={styles.image} source={Images[props.id - 1]} />
        <Text style={[TextStyles.p, { width: 160, paddingVertical: 8 }]}>
          {props.titre}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    margin: 10,
  },
  image: {
    width: 160,
    height: 160,
    resizeMode: "contain",
  },
});
