import { Pressable, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function MessageCard(props) {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* <Pressable
        onPress={() => {
          navigation.push("Forum", { id: props.id });
        }}
      > */}
      <Text style={styles.text}>{props.pseudo}</Text>
      <Text style={styles.text}>{props.message}</Text>
      {/* </Pressable> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    marginRight: 20,
  },
  text: {
    marginVertical: 10,
    fontSize: 16,
    color: "#fff",
    width: 160,
  },
});
