import { Text, View, StyleSheet, Image } from 'react-native';
import { Coin } from "../../../domain/entities/coin";
import { Card } from 'react-native-paper';

interface Props {
    coin: Coin;
}

export const CoinCard = ({ coin }: Props) => {
    return (
        <Card style={styles.card}>
            <Image source={{ uri: coin.image }} style={styles.image} />
            <View style={styles.cardContainer}>
                <Text style={styles.name}>{coin.name}</Text>
                <Text style={styles.symbol}>{coin.symbol.toUpperCase()}</Text>
                <Text style={styles.price}>${coin.current_price.toFixed(2)}</Text>
            </View>
        </Card>
    );
};

const styles = StyleSheet.create({
    card: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#f1fdf6',
        borderRadius: 8,
        padding: 16,
        marginVertical: 8,
        marginHorizontal: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 3,
        width: '90%',
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 25,
        marginRight: 16,
        display: 'flex',
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    symbol: {
        fontSize: 14,
        color: '#888',
    },
    price: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
    },
    cardContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
});
