import { Image, Pressable, StyleSheet, Text, View } from "react-native";

function AdItem({ ad, onSelect }) {
  return (
    <Pressable onPress={onSelect}>
      <Image source={{ uri: ad.imageUri }} />
      <View>
        <Text>{ad.title}</Text>
        <Text>{ad.address}</Text>
      </View>
    </Pressable>
  );
}

export default AdItem;

const styles = StyleSheet.create({});
