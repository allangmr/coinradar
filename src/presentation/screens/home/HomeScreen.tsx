import { View } from "react-native";
import { getCoins } from "../../../actions/coins";
import { useInfiniteQuery } from "@tanstack/react-query";
import { ActivityIndicator, Text } from "react-native-paper";
import { globalTheme } from "../../../config/theme/global-theme";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { CoinCard } from "../../components/coins/CoinCard";
import { FlatList } from "react-native-gesture-handler";

export const HomeScreen = () => {
  const { top } = useSafeAreaInsets();

  // http basic request
  // const { isLoading, data: coins = [], error } = useQuery({
  //   queryKey: ['coins'],
  //   queryFn: () => getCoins(1),
  //   // staleTime: 1000 * 60 * 5, // 5 minutes
  // });

  const { isLoading, data: coins, error, fetchNextPage } = useInfiniteQuery({
    queryKey: ['coins', 'infinite'],
    initialPageParam: 0,
    queryFn: ( params ) => getCoins(params.pageParam),
    getNextPageParam: (lastPage, pages) =>  pages.length,
    // staleTime: 1000 * 60 * 5, // 5 minutes
  });

  return (
    <View style={globalTheme.globalMargin}>
         {/* <Text variant="displaySmall">HomeScreen</Text> */}
        {
          isLoading
          ? <ActivityIndicator />
          : !coins && <Text>No data available</Text>
        }
        {
          error && <Text>{error.message}</Text>
        }
        {/* <BitcoinBg style={styles.imgPosition} /> */}
        <Text variant="displayMedium" style={{ textAlign: 'center', paddingVertical: 20 }}>Coin Radar</Text>
        <FlatList
          data={coins?.pages?.flatMap(page => page) ?? []}
          keyExtractor={(coin, index) => `${coin.id}-${index}`}
          numColumns={1}
          style={{paddingTop: top + 5}}
          renderItem={({item: coin}) => <CoinCard coin={coin} />}
          onEndReachedThreshold={0.6}
          onEndReached={() => fetchNextPage()}
          showsVerticalScrollIndicator={false}
        />
    </View>
  );
};


// const styles = StyleSheet.create({
//   imgPosition: {
//     position: 'relative',
//     marginHorizontal: 'auto',
//   },
// });
