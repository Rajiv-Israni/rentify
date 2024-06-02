import { useCallback, useLayoutEffect, useState } from "react";
import { Alert, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";
import IconButton from "../components/UI/IconButton";

function Map({ navigation }) {
  const [pickedLocation, setPickedLocation] = useState();

  const region = {
    latitude: 37.78,
    longitude: -122.43,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  function selectLocationHandler(event) {
    const latitude = event.nativeEvent.coordinate.latitude;
    const longitude = event.nativeEvent.coordinate.longitude;

    setPickedLocation({
      latitude,
      longitude,
    });
  }

  const savePickedLocationHandler = useCallback(() => {
    if (!pickedLocation) {
      Alert.alert(
        "No location picked",
        "You need to pick a location by tapping on the map first!"
      );

      return;
    }

    navigation.navigate("Add Ad", { pickedLocation });
  }, [navigation, pickedLocation]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: ({ tintColor }) => (
        <IconButton
          icon="save"
          size={24}
          color={tintColor}
          onPress={savePickedLocationHandler}
        />
      ),
    });
  }, [navigation, savePickedLocationHandler]);

  return (
    <MapView
      style={styles.map}
      initialRegion={region}
      onPress={selectLocationHandler}
    >
      {pickedLocation && (
        <Marker
          title="Picked Location"
          coordinate={{
            latitude: pickedLocation.latitude,
            longitude: pickedLocation.longitude,
          }}
        />
      )}
    </MapView>
  );
}

export default Map;

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});
