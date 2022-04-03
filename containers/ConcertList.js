import { BottomSheetFlatList } from "@gorhom/bottom-sheet";
import React, { useEffect, useState } from "react";
import { View, ActivityIndicator, FlatList } from "react-native";
import ConcertCard from "../components/ConcertCard";
import { Padding } from "../theme/Spacing";

export default function AlbumList() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

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
  }, []);

  return (
    <View>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <BottomSheetFlatList
          style={Padding(8, "y")}
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <ConcertCard
              id={item.id}
              festival={item.festival}
              img={item.img}
              ville={item.ville}
            />
          )}
        />
      )}
    </View>
  );
}
