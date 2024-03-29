import React, { useEffect, useState } from "react";
import { View, ActivityIndicator, FlatList } from "react-native";
import AlbumCard from "../components/AlbumCard";
import { Padding, Margin } from "../theme/Spacing";

export default function AlbumList() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const response = await fetch(
        "https://www.neomiannay.fr/php-laylow/discographie.php"
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
        <FlatList
          contentContainerStyle={Padding(22, "x")}
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <AlbumCard id={item.id} titre={item.titre} />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      )}
    </View>
  );
}
