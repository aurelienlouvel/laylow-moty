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
          <Text style={TextStyles.festival}>{props.festival}</Text>
          <Text style={TextStyles.ville}>{props.ville}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 4,
    paddingHorizontal: 8,
    marginBottom: 16,
    borderRadius: 16,
  },
  image: {
    width: 48,
    height: 48,
    resizeMode: "contain",
    borderRadius: 10,
    marginRight: 24,
  },
  text: {
    justifyContent: "center",
  },
});
