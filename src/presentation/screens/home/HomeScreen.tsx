import { View } from "react-native";
import { ActivityIndicator, Text } from "react-native-paper";
import { getCoins } from "../../../actions/coins";
import { useQuery } from "@tanstack/react-query";

export const HomeScreen = () => {
  const { isLoading, data } = useQuery({
    queryKey: ['coins'],
    queryFn: () => getCoins(),
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
  console.log(data, 'data');
  return (
    <View>
        <Text variant="displaySmall">HomeScreen</Text>
        {
          isLoading
          ? <ActivityIndicator />
          : data ? <Text>{data[0].name}</Text> : <Text>No data available</Text>
        }
        {/* <Button mode="contained" onPress={() => console.log('Pressed')}>
          Press me
          </Button> */}
    </View>
  );
};
