import { Dimensions, Text, View } from "react-native";
import { debugBorder } from "../data/debug";

const titleHeight = Dimensions.get('window').height * .1

const Title: React.FC = ({ children }) => (
  <Text style={{
    fontSize: 36,
    fontFamily: 'JosefinSans',
    color: '#ddf',
    ...debugBorder,
  }}>{children}</Text>
);

export const Header = () => (
  <View style={{
    height: titleHeight,
    justifyContent: 'flex-end',
    ...debugBorder,
  }}>
    <Title>Germany</Title>
  </View>
)
