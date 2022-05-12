import React, { FC, memo, useCallback, useState } from "react";
import { StyleSheet, View, Dimensions, Pressable } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import Ionicons from "@expo/vector-icons/Ionicons";

// Map Styles
import darkMapStyle from "./src/libs/darkMapStyle";
import lightMapStyle from "./src/libs/lightMapStyle";

const { height, width } = Dimensions.get("window");
const LATITUDE = 40.74333; // Korea Town, New York, NY 10001
const LONGITUDE = -73.99033; // Korea Town, New York, NY 10001
const LATITUDE_DELTA = 0.28;
const LONGITUDE_DELTA = LATITUDE_DELTA * (width / height);

const App: FC = () => {
  const [lightMode, isLightMode] = useState<boolean>(true);

  const updateMapStyle = useCallback(() => {
    isLightMode(!lightMode);
  }, [lightMode]);

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: LATITUDE,
          longitude: LONGITUDE,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        }}
        style={styles.map}
        zoomControlEnabled
        maxZoomLevel={20}
        minZoomLevel={0}
        loadingEnabled={true}
        loadingIndicatorColor={"black"}
        customMapStyle={lightMode ? lightMapStyle : darkMapStyle}
      />
      <View style={styles.buttonView}>
        <Pressable onPress={updateMapStyle} style={styles.iconBtn}>
          <Ionicons
            name={lightMode ? "ios-cloudy-night" : "sunny"}
            size={18}
            color="white"
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  buttonView: {
    position: "absolute",
    top: "20%",
    right: "5%",
  },
  iconBtn: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: 32,
    height: 32,
    borderRadius: 14,
    backgroundColor: "grey",
  },
});

export default memo(App);
