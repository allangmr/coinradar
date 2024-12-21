import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/home/HomeScreen';
import { CoinScreen } from '../screens/coin/CoinScreen';
import { SearchScreen } from '../screens/search/SearchScreen';

export type RootStackParams = {
    HomeScreen: undefined;
    CoinScreen: { coinId: number };
    SearchScreen: undefined;
}

const Stack = createStackNavigator<RootStackParams>();

export const Navigator = () => {
  return (
    <Stack.Navigator
        screenOptions={{
            headerShown: false,
        }}
    >
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="CoinScreen" component={CoinScreen} />
      <Stack.Screen name="SearchScreen" component={SearchScreen} />
    </Stack.Navigator>
  );
};

