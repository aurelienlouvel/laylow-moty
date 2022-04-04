import { BottomSheetFlatList } from "@gorhom/bottom-sheet";
import React, { useEffect, useState } from "react";
import { Text, View, ActivityIndicator } from "react-native";
import ConcertCard from "../components/ConcertCard";
import TextStyles from "../theme/TextStyles";
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
    <View style={{ paddingBottom: 50 }}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <BottomSheetFlatList
          ListHeaderComponent={() => {
            return (
              <View style={Padding(8, "x")}>
                <Text style={TextStyles.h1}>Concerts</Text>
              </View>
            );
          }}
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
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
}
