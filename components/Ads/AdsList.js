import { FlatList, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import AdItem from "./AdItem";
import { Colors } from "../../constants/colors";

function AdsList({ ads }) {
  const navigation = useNavigation();

  if (!ads || ads.length === 0) {
    return (
      <View style={styles.fallbackContainer}>
        <Text style={styles.fallbackText}>No rentals available</Text>
      </View>
    );
  }

  function selectAdHandler(id) {
    navigation.navigate("AdDetails", {
      placeId: id,
    });
  }

  return (
    <FlatList
      style={styles.list}
      data={ads}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <AdItem ad={item} onSelect={selectAdHandler} />}
    />
  );
}

export default AdsList;

const styles = StyleSheet.create({
  list: {
    margin: 24,
  },
  fallbackContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  fallbackText: {
    fontSize: 16,
    color: Colors.primary200,
  },
});
