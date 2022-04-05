import React from "react";
import {
  ScrollView,
  Text,
  View,
  TextInput,
  Pressable,
  StyleSheet,
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import Colors, { BackgroundColor } from "../theme/Colors";
import TextStyles from "../theme/TextStyles";
import ButtonStyles from "../theme/ButtonStyles";
import { Padding } from "../theme/Spacing";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

function Submit(props, form) {
  const data = new FormData();
  data.append("pseudo", form.pseudo);
  data.append("message", form.message);

  fetch("https://www.neomiannay.fr/php-laylow/insert_message.php", {
    method: "POST",
    body: data,
    header: new Headers({
      "Content-Type": "application/json",
    }),
  })
    .then(() => props.navigation.navigate("Forum"))
    .catch((error) => console.error("Error:", error))
    .then((response) => console.log("Success:", response));
}

export default function Message(props) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      pseudo: "",
      message: "",
    },
  });
  const onSubmit = (data) => Submit(props, data);

  return (
    <View style={[BackgroundColor(Colors.noir), { flex: 1 }]}>
      <Ionicons
        style={[Padding(16), { marginTop: 24 }]}
        name={"chevron-back"}
        size={32}
        color={Colors.blanc}
        onPress={() => props.navigation.goBack()}
      />
      <View style={Padding(32, "x")}>
        <Text style={TextStyles.h1}>Message</Text>
        <View style={styles.container}>
          <Text style={[TextStyles.h3, { marginVertical: 12 }]}>
            Pseudonyme
          </Text>
          <Controller
            control={control}
            rules={{
              required: true,
              maxLength: 30,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
            name="pseudo"
          />
          {errors.pseudo && (
            <Text style={TextStyles.p}>Pseudonyme invalide</Text>
          )}
        </View>

        <View style={styles.container}>
          <Text style={[TextStyles.h3, { marginVertical: 12 }]}>Message</Text>
          <Controller
            control={control}
            rules={{
              required: true,
              maxLength: 255,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                multiline={true}
                numberOfLines={6}
              />
            )}
            name="message"
          />
          {errors.message && <Text style={TextStyles.p}>Message invalide</Text>}
        </View>
      </View>
      <Pressable style={ButtonStyles.fixed} onPress={handleSubmit(onSubmit)}>
        <Text style={ButtonStyles.text}>Poster mon message</Text>
        <FontAwesome
          style={ButtonStyles.icon}
          name={"send"}
          size={22}
          color={Colors.blanc}
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    marginVertical: 12,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderColor: "rgba(158, 150, 150, .5)",
  },
  input: {
    color: Colors.or,
    textAlignVertical: "top",
    fontFamily: "SFPro-Regular",
  },
});
