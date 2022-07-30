import React from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import { debugBorder } from "../data/debug";
import { POI } from "../data/pois";

const styles = StyleSheet.create({
  poiDataContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    width: Dimensions.get('window').width
  },
  poiData: {
    width: Dimensions.get('window').width - 205,
  },
  textTitle: {
    color: '#ddf',
    fontFamily: 'JosefinSans',
    fontSize: 20,
    textDecorationLine: 'underline',
  },
  text16: {
    color: '#ddf',
    fontFamily: 'JosefinSans',
    fontSize: 16,
  },
  text20: {
    color: '#ddf',
    fontFamily: 'JosefinSans',
    fontSize: 20,
  },
});

const PoiData: React.FC<{ poi: POI | null, weather: any }> = ({ poi, weather }) => {
  if (!poi || !weather) {
    return null;
  }
  return (
    <View style={styles.poiDataContainer}>
      <Image
        resizeMode="contain"
        style={{ width: 200 }}
        source={{ uri: poi.image }} />
      <View style={styles.poiData}>
        <Text style={styles.textTitle}>{poi.name}</Text>
        <Text style={styles.text16}>state: {poi.state}</Text>
        <Text style={styles.text16}>weather:</Text>
        <View>
          <Image
            style={{ width: 40, height: 40 }}
            source={{ uri: weather.icon }}
          />
          <Text style={styles.text20}>{weather.temperature}° F</Text>
        </View>
      </View>
    </View>
  );
}

export const Footer: React.FC<{ poi: POI | null, weather: any }> = ({ poi, weather }) => {
  return (
    <View style={{
      height: Dimensions.get('window').height * .2,
      borderTopColor: "#052",
      borderTopWidth: 2,
      width: Dimensions.get('window').width,
      alignItems: 'center',
      ...debugBorder
    }}>
      <PoiData poi={poi} weather={weather} />
    </View>
  );
}
