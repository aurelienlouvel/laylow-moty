import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Button,
  SafeAreaView,
  Image,
  Animated,
  FlatList,
  StatusBar,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { Colors, BackgroundColor } from "../theme/Colors";
import TextStyles from "../theme/TextStyles";
import { Padding } from "../theme/Spacing";
import AlbumList from "../containers/AlbumList";

const { width, height } = Dimensions.get("window");
const imageW = width - 64;
const imageH = height / 3;

const imgData = [
  "https://intrld.com/wp-content/uploads/2021/07/laylow.png",
  "https://intrld.com/wp-content/uploads/2021/10/laylow.png",
  "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fwp-content%2Fblogs.dir%2F11%2Ffiles%2F2018%2F07%2Flaylow-raw-interview-5-copie.jpg?w=960&cbr=1&q=90&fit=max",
  "https://numero.twic.pics/images/flexible_grid/100/laylow-3-numero-magazine.jpg",
  "https://intrld.com/wp-content/uploads/2021/07/laylow-1-1000x600.png",
];

export default function Accueil() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const response = await fetch(
        "https://www.neomiannay.fr/php-laylow/biographie.php"
      );
      const json = await response.json();
      setData(json[0]);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const scrollX = React.useRef(new Animated.Value(0)).current;

  return (
    <ScrollView style={StyleSheet.compose(BackgroundColor(Colors.noir))}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <View>
          <Animated.FlatList
            style={{ marginTop: 48 }}
            data={imgData}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { x: scrollX } } }],
              { useNativeDriver: true }
            )}
            keyExtractor={(index) => index.toString()}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => {
              return (
                <View
                  style={{
                    width: width,
                    justifyContent: "center",
                    alignItems: "center",
                    shadowColor: "#000",
                    shadowOpacity: 0.1,
                    shadowOffset: {
                      width: 0,
                      height: 0,
                    },
                    shadowRadius: 20,
                  }}
                >
                  <Image
                    source={{ uri: item }}
                    style={{
                      width: imageW,
                      maxWidth: 400,
                      height: imageH,
                      maxHeight: 400,
                      resizeMode: "cover",
                    }}
                  />
                </View>
              );
            }}
          />

          <View>
            <View style={Padding(32, "x")}>
              <Text style={TextStyles.h1}>LAYLOW</Text>
            </View>
            <View style={Padding(32, "x")}>
              <Text style={[TextStyles.h2, { textAlign: "left" }]}>
                Il était une fois ...
              </Text>
              <Text style={TextStyles.p}>{data.biographie}</Text>
            </View>
            <View>
              <Text
                style={[TextStyles.h2, Padding(32, "x"), { textAlign: "left" }]}
              >
                Discographie
              </Text>
              <AlbumList />
            </View>
          </View>
          <View>
            <Text
              style={[TextStyles.underText, Padding(16, "y"), { opacity: 0.6 }]}
            >
              2022 · CAN ™
            </Text>
          </View>
        </View>
      )}
    </ScrollView>
  );
}

const Styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.noir,
  },
});
