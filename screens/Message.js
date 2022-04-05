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

export default function Message(props) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
    },
  });
  const onSubmit = (data) => console.log(data);

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
          {errors.pseudo && <Text style={TextStyles.p}>Pseudonyme requis</Text>}
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
          {errors.message && <Text style={TextStyles.p}>Message requis</Text>}
        </View>
      </View>
      <Pressable style={ButtonStyles.primary} onPress={handleSubmit(onSubmit)}>
        <Text style={ButtonStyles.text}>POSTER</Text>
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
    textAlignVertical: "bottom",
    fontFamily: "SFPro-Regular",
  },
});
