import { useCallback, useState } from "react";
import { View, Text, ScrollView, TextInput, StyleSheet } from "react-native";

import { Colors } from "../../constants/colors";
import ImagePicker from "./ImagePicker";
import LocationPicker from "./LocationPicker";
import Button from "../UI/Button";
import { Ad } from "../../models/ad";

function AdForm({ onCreateAd }) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [selectedImage, setSelectedImage] = useState();
  const [pickedLocation, setPickedLocation] = useState();

  function changeTitleHandler(enteredText) {
    setEnteredTitle(enteredText);
  }

  function takeImageHandler(imageUri) {
    setSelectedImage(imageUri);
  }

  const onPickLocationHandler = useCallback((location) => {
    setPickedLocation(location);
  }, []);

  function saveAdHandler() {
    const ad = new Ad(enteredTitle, selectedImage, pickedLocation);
    onCreateAd(ad);
  }

  return (
    <ScrollView style={styles.form}>
      <View>
        <Text style={styles.label}>The Rental Form</Text>
        <TextInput
          onChangeText={changeTitleHandler}
          value={enteredTitle}
          style={styles.input}
        />
      </View>
      <ImagePicker onTakeImage={takeImageHandler} />
      <LocationPicker onPickLocation={onPickLocationHandler} />
      <Button onPress={saveAdHandler}>Add Ad</Button>
    </ScrollView>
  );
}

export default AdForm;

const styles = StyleSheet.create({
  form: {
    felx: 1,
    padding: 24,
  },
  label: {
    fontWeight: "bold",
    marginBottom: 4,
    color: Colors.primary700,
  },
  input: {
    marginVertical: 8,
    paddingHorizontal: 4,
    paddingVertical: 8,
    fontSize: 16,
    borderBottomColor: Colors.primary700,
    borderBottomWidth: 2,
    backgroundColor: Colors.primary100,
  },
});
