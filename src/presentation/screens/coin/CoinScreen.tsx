import { StackScreenProps } from "@react-navigation/stack";
import { Text, View } from "react-native";
import { RootStackParams } from "../../navigator/Navigator";

interface Props extends StackScreenProps<RootStackParams, 'CoinScreen'> {}

export const CoinScreen = ({ navigation, route }: Props) => {
  const { coinId } = route.params;

  return (
    <View>
        <Text>CoinScreen: {coinId}</Text>
    </View>
  );
};
