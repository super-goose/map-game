import React from "react";
import { Dimensions, Image, ImageSourcePropType, Text, View } from "react-native";
import { debugBorder } from "../data/debug";
import { POI } from "../data/pois";

const PoiData: React.FC<{ poi: POI | null, weather: any }> = ({ poi, weather }) => {
  if (!poi || !weather) {
    return null;
  }
  return (
    <View>
      <Image source={poi.image as ImageSourcePropType} />
    </View>
  );
  //   <Text
  //   style={{
  //     color: '#ddf',
  //     fontFamily: 'JosefinSans',
  //   }}
  // >footer</Text>

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
