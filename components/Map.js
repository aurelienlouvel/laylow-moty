import React, { useState, useEffect } from "react";
import { View, StyleSheet, Dimensions, Text } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import * as Location from "expo-location";
import { useNavigation } from "@react-navigation/native";

export default function Map() {
  const navigation = useNavigation();

  const initialRegion = {
    latitude: 48.8566,
    longitude: 2.3522,
    latitudeDelta: 0.02,
    longitudeDelta: 0.02,
  };

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [region, setRegion] = React.useState(initialRegion);

  const getData = async () => {
    try {
      const response = await fetch(
        "https://www.neomiannay.fr/php-laylow/concerts.php"
      );
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      let backPerm = await Location.requestBackgroundPermissionsAsync();
      setRegion({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.1,
        longitudeDelta: 0.1,
      });
    })();
  }, []);

  let text = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  return (
    <View>
      <MapView region={region} style={Styles.map} provider={PROVIDER_GOOGLE}>
        {data.map((concert) => {
          let latitude = parseFloat(concert.coordonnees.split(",")[0], 6);
          let longitude = parseFloat(concert.coordonnees.split(",")[1]);
          return (
            <MapView.Marker
              coordinate={{
                latitude: latitude,
                longitude: longitude,
              }}
              key={concert.id}
              title={concert.festival}
              description={concert.ville}
              onPress={() => {
                navigation.push("Concert", { id: concert.id });
              }}
            />
          );
        })}
      </MapView>
    </View>
  );
}

const Styles = StyleSheet.create({
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
