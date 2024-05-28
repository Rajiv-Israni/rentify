import { View, StyleSheet } from "react-native";
import {
  getCurrentPositionAsync,
  useForegroundPermissions,
  PermissionStatus,
} from "expo-location";

import OutlinedButton from "../UI/OutlinedButton";
import { Colors } from "../../constants/colors";
import permissionsValidator from "../../core/helpers/permissionsValidator";

function LocationPicker() {
  const [locationPermissionInformation, requestPermission] =
    useForegroundPermissions();

  async function getLocationHandler() {
    const hasPermission = await permissionsValidator(
      "location",
      locationPermissionInformation,
      PermissionStatus,
      requestPermission
    );

    if (!hasPermission) {
      return;
    }

    const location = await getCurrentPositionAsync();
    console.log(location);
  }

  function pickOnMapHandler() {}

  return (
    <View>
      <View style={styles.mapPreview}></View>
      <View style={styles.actions}>
        <OutlinedButton icon="location" size={18} onPress={getLocationHandler}>
          Locate Me
        </OutlinedButton>
        <OutlinedButton icon="map" size={18} onPress={pickOnMapHandler}>
          Pick On Map
        </OutlinedButton>
      </View>
    </View>
  );
}

export default LocationPicker;

const styles = StyleSheet.create({
  mapPreview: {
    width: "100%",
    height: 200,
    marginVertical: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary100,
    borderRadius: 4,
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});
