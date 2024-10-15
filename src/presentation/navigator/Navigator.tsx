import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/home/HomeScreen';
import { CoinScreen } from '../screens/coin/CoinScreen';
import { SearchScreen } from '../screens/search/SearchScreen';

export type RootStackParams = {
    Home: undefined;
    Coin: undefined;
    Search: undefined;
}

const Stack = createStackNavigator<RootStackParams>();

export const Navigator = () => {
  return (
    <Stack.Navigator
        screenOptions={{
            headerShown: false,
        }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Coin" component={CoinScreen} />
      <Stack.Screen name="Search" component={SearchScreen} />
    </Stack.Navigator>
  );
};

