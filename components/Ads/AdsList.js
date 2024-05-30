import { FlatList, StyleSheet, Text, View } from "react-native";

import AdItem from "./AdItem";
import { Colors } from "../../constants/colors";

function AdsList({ ads }) {
  if (!ads || ads.length === 0) {
    return (
      <View style={styles.fallbackContainer}>
        <Text style={styles.fallbackText}>No rentals available</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={ad}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <AdItem place={item} />}
    />
  );
}

export default AdsList;

const styles = StyleSheet.create({
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
