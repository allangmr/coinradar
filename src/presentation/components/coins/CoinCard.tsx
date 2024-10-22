import { Text, View } from "react-native";
import { Coin } from "../../../domain/entities/coin";

interface Props {
    coin: Coin;
}

export const CoinCard = ({coin}: Props) => {
  return (
    <View>
        <Text>CoinCard</Text>
    </View>
  );
};
