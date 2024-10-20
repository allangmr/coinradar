import { Image, ImageStyle, StyleProp } from "react-native";

interface Props {
    style?: StyleProp<ImageStyle>;
}

export const BitcoinBg = ({style}:Props) => {
  const coinImg = require('../../../assets/bitcoin-of.png');
  return (
    <Image source={coinImg} style={[{width: 300, height: 300, opacity: 0.7}, style]} />
  );
};
