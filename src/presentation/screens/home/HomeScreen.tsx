import { StyleSheet, View } from "react-native";
import { getCoins } from "../../../actions/coins";
import { useQuery } from "@tanstack/react-query";
import { BitcoinBg } from "../../components/ui/BitcoinBg";

export const HomeScreen = () => {
  const { isLoading, data = [] } = useQuery({
    queryKey: ['coins'],
    queryFn: () => getCoins(1),
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
  return (
    <View style={{}}>
        {/* <Text variant="displaySmall">HomeScreen</Text>
        {
          isLoading
          ? <ActivityIndicator />
          : data ? <Text>{JSON.stringify(data)}</Text> : <Text>No data available</Text>
        } */}
        <BitcoinBg style={styles.imgPosition} />
    </View>
  );
};


const styles = StyleSheet.create({
  imgPosition: {
    position: 'relative',
    marginHorizontal: 'auto',
  },
});
