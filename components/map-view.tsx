import MapView, { Marker } from "react-native-maps";
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import React from "react";
import { POI } from "../data/castles";


const PoiMarker: React.FC<{ poi: POI }> = ({ poi }) => (
  <Marker
    coordinate={poi.location}
    key={poi.name}
    image={{ uri: poi.image }}
  />

);

export const MapScreen: React.FC<{ pois: Array<POI> }> = ({ pois }) => (
  <MapView
    style={styles.map}
    region={{
      latitude: 51.575,
      latitudeDelta: 10.454,
      longitude: 10.428,
      longitudeDelta: 9.400,
    }}
  // onRegionChange={console.log}
  >
    {pois.map((poi: POI) => (
      <PoiMarker poi={poi} />
    ))}
  </MapView>
);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: (Dimensions.get('window').height * .9)
  },
});