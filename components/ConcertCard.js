import { Pressable, StyleSheet, Text, View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Colors, { BackgroundColor } from "../theme/Colors";
import TextStyles from "../theme/TextStyles";
import moment from "moment";

export default function AlbumCard(props) {
  const navigation = useNavigation();

  return (
    <View>
      <Pressable
        style={styles.container}
        onPress={() => {
          navigation.push("Concert", { id: props.id });
        }}
      >
        <Image style={styles.image} source={{ uri: props.img }} />
        <View style={styles.text}>
          <Text style={[TextStyles.h3, { fontSize: 18, opacity: 1 }]}>
            {props.festival}
          </Text>
          <Text style={[TextStyles.p, { fontSize: 14 }]}>{props.ville}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 8,
    marginVertical: 20,
  },
  image: {
    width: 54,
    height: 54,
    resizeMode: "contain",
    marginRight: 16,
  },
  text: {
    justifyContent: "center",
  },
});
