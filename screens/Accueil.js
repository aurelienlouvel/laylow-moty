import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  Animated,
  Dimensions,
} from "react-native";
import { Colors, BackgroundColor } from "../theme/Colors";
import TextStyles from "../theme/TextStyles";
import { Padding } from "../theme/Spacing";
import AlbumList from "../containers/AlbumList";

const { width, height } = Dimensions.get("window");
const imageW = width - 64;
const imageH = height / 3;

const imgData = [
  require("../assets/img/laylow/1.jpg"),
  require("../assets/img/laylow/2.jpg"),
  require("../assets/img/laylow/3.jpg"),
  require("../assets/img/laylow/4.jpg"),
  require("../assets/img/laylow/5.jpg"),
  require("../assets/img/laylow/6.jpg"),
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
                    source={item}
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
