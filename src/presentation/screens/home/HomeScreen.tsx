import { View } from "react-native";
import { ActivityIndicator, Text } from "react-native-paper";
import { getCoins } from "../../../actions/coins";
import { useQuery } from "@tanstack/react-query";

export const HomeScreen = () => {
  const { isLoading, data = [] } = useQuery({
    queryKey: ['coins'],
    queryFn: () => getCoins(1),
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
  return (
    <View>
        <Text variant="displaySmall">HomeScreen</Text>
        {
          isLoading
          ? <ActivityIndicator />
          : data ? <Text>{JSON.stringify(data)}</Text> : <Text>No data available</Text>
        }
        {/* <Button mode="contained" onPress={() => console.log('Pressed')}>
          Press me
          </Button> */}
    </View>
  );
};
