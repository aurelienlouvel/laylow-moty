import React, { useState } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { View, ActivityIndicator, Text, FlatList } from "react-native";
import MessageCard from "../components/MessageCard";
import { Margin } from "../theme/Spacing";

export default function MessageList() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useFocusEffect(
    React.useCallback(() => {
      const getData = async () => {
        try {
          const response = await fetch(
            "https://www.neomiannay.fr/php-laylow/forum.php"
          );
          const json = await response.json();
          setData(json);
        } catch (error) {
          console.error(error);
        } finally {
          setLoading(false);
        }
      };

      getData();
    }, [])
  );

  return (
    <View>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          style={{ marginBottom: 50 }}
          data={data}
          keyExtractor={(item) => item.id}
          inverted={true}
          renderItem={({ item }) => (
            <MessageCard
              id={item.id}
              pseudo={item.pseudo}
              message={item.message}
            />
          )}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
}
