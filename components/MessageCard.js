import { StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import TextStyles from "../theme/TextStyles";
import Colors from "../theme/Colors";

// --------------------------------------------------------
// Page mise en form MessageList
// --------------------------------------------------------
export default function MessageCard(props) {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={TextStyles.bottomText}>@{props.pseudo}</Text>
      <Text style={TextStyles.p}>{props.message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    marginVertical: 12,
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderColor: "rgba(158, 150, 150, .5)",
  },
});
