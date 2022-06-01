import React, { useState } from 'react';
import { View, Text, StyleSheet } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import Geocoder from 'react-native-geocoding';
import { Marker } from 'react-native-svg';



const Map = ({ location }) => {

  const [latitude, setLatitude] = useState(0);
  const [longtitude, setLongtitude] = useState(0);

  Geocoder.init("APP_KEY", { language: "en" });
  Geocoder.from(location)
    .then(json => {
      var location = json.results[0].geometry.location;
      setLatitude(location.lat);
      setLongtitude(location.lng);
    })

  return (
    <View style={styles.layout}>
      <MapView
        style={{ flex: 1 }}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 48,
          longitude: 2,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        region={{
          latitude: latitude,
          longitude: longtitude,
          latitudeDelta: 0.03,
          longitudeDelta: 0.03,
        }}
      >
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  layout: {
    height: "70%",
    width: "80%",
    marginTop: 20,
  }
});

export default Map;