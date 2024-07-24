import { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import AppLoading from "expo-app-loading";

import AllAds from "./screens/AllAds";
import AddAd from "./screens/AddAd";
import Map from "./screens/Map";
import AdDetails from "./screens/AdDetails";
import IconButton from "./components/UI/IconButton";
import { Colors } from "./constants/colors";
import { init } from "./core/util/database";

const Stack = createNativeStackNavigator();

export default function App() {
  const [dbInitialized, setDbInitialized] = useState(false);

  useEffect(() => {
    init()
      .then(() => {
        setDbInitialized(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (!dbInitialized) {
    return <AppLoading />;
  }

  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: Colors.primary500 },
            headerTintColor: Colors.gray700,
            contentStyle: { backgroundColor: Colors.gray700 },
          }}
        >
          <Stack.Screen
            name="AllAds"
            component={AllAds}
            options={({ navigation }) => ({
              title: "Places Available To Rent",
              headerRight: ({ tintColor }) => (
                <IconButton
                  icon="add"
                  size={24}
                  color={tintColor}
                  onPress={() => navigation.navigate("AddAd")}
                />
              ),
            })}
          />
          <Stack.Screen
            name="AddAd"
            component={AddAd}
            options={{
              title: "Add A New Place To Rent",
              headerBackTitle: "Back",
            }}
          />
          <Stack.Screen name="Map" component={Map} />
          <Stack.Screen name="AdDetails" component={AdDetails} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
