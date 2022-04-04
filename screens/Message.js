import React, { useEffect, useState, Component } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  TouchableOpacity,
} from "react-native";
import TextStyles from "../theme/TextStyles";

// class Message extends Component {
//   constructor() {
//     super();
//     this.state = {
//       pseudo: "",
//       message: "",
//     };
//   }

//   updateValue(text, field) {
//     if (field == "pseudo") {
//       this.setState({
//         pseudo: text,
//       });
//     } else if (field == "message") {
//       this.setState({
//         message: text,
//       });
//     }
//   }

//   submit() {
//     let collection = {};
//     (collection.pseudo = this.state.pseudo),
//       (collection.message = this.state.message);
//     console.warn(collection);

//     var url = "https://www.neomiannay.fr/php-laylow/insert_message.php";

//     fetch(url, {
//       method: "POST",
//       body: JSON.stringify(collection),
//       // body: JSON.stringify({
//       //   pseudo: this.state.pseudo,
//       //   message: this.state.message,
//       // }),
//       header: new Headers({
//         "Content-Type": "application/json",
//       }),
//     })
//       .then((res) => res.json())
//       .catch((error) => console.error("Error:", error))
//       .then((response) => console.log("Success:", response));
//   }

//   render() {
//     return (
//       <ScrollView>
//         <View style={styles.container}>
//           <Text style={TextStyles.h2}>Message</Text>

//           {/* ------------------------------------- */}
//           {/* Formulaire */}
//           {/* ------------------------------------- */}
//           <TextInput
//             placeholder="Mettez votre nom"
//             placeholderTextColor="#6F6F6F"
//             style={styles.input}
//             name="pseudo"
//             onChangeText={(text) => this.updateValue(text, "pseudo")}
//           />

//           <TextInput
//             multiline={true}
//             numberOfLines={10}
//             placeholder="Mettez votre message ici"
//             placeholderTextColor="#6F6F6F"
//             style={styles.input}
//             onChangeText={(text) => this.updateValue(text, "message")}
//             name="message"
//           />

//           {/* bouton envoyer  */}
//           <TouchableOpacity style={styles.button} onPress={() => this.submit()}>
//             <Text style={styles.buttonText}>Envoyer</Text>
//           </TouchableOpacity>

//           <Button
//             title="Fermer la fenÃªtre"
//             onPress={() => this.props.navigation.goBack()}
//           />
//         </View>
//       </ScrollView>
//     );
//   }
// }

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginTop: 30,
    backgroundColor: "#272727",
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  // text: {
  //   color: "#fff",
  //   fontSize: 20,
  //   fontWeight: "bold",
  //   paddingTop: 20,
  //   paddingLeft: 10,
  // },
  input: {
    borderColor: "#6F6F6F",
    color: "#6F6F6F",
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "#1A1A1A",
    borderRadius: 3,
  },
  button: {
    backgroundColor: "#970203",
    padding: 20,
    marginTop: 20,
    borderRadius: 50,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
