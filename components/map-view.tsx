import MapView, { Marker } from "react-native-maps";
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import React from "react";
import { Location, POI } from "../data/pois";


const PoiMarker: React.FC<{ poi: POI, selected: boolean }> = ({ poi, selected }) => (
  <Marker
    coordinate={poi.location}
    pinColor={selected ? '#07a' : '#4df'}
  />

);

type MapProps = {
  pois: Array<POI>
  selectPoi: (location: Location) => void
  selectedPoi: string | null
}
export const MapScreen: React.FC<MapProps> = ({ pois, selectPoi, selectedPoi }) => (
  <MapView
    style={styles.map}
    region={{
      latitude: 51.1772,
      latitudeDelta: 8.3794,
      longitude: 10.5142,
      longitudeDelta: 9.5823,
    }}
    scrollEnabled={false}
    // onRegionChange={console.log}
    toolbarEnabled={false}
    moveOnMarkerPress={false}
    onMarkerPress={(e) => {
      e.preventDefault();
      selectPoi(e.nativeEvent.coordinate);
    }}
  >
    {pois.map((poi: POI) => {
      return (
        <PoiMarker key={poi.name} poi={poi} selected={poi.name === selectedPoi} />
      )
    })}
  </MapView>
);


const styles = StyleSheet.create({
  map: {
    width: Dimensions.get('window').width,
    height: (Dimensions.get('window').height * .7)
  },
});