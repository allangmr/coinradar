import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Coin } from "../../../domain/entities/coin";
import { Card } from 'react-native-paper';
import { FadeInImage } from '../ui/FadeInImage';
import { getColorFromImage } from '../../../config/helpers/get-color';

interface Props {
    coin: Coin;
}

export const CoinCard = ({ coin }: Props) => {
    const [color, setColor] = useState<string>('#f1fdf6');

    useEffect(() => {
        const fetchColor = async () => {
            const colorFromImage = await getColorFromImage(coin.image);
            setColor(colorFromImage);
        };

        fetchColor();
    }, [coin.image]);

    return (
        <Card style={[styles.card, { backgroundColor: color }]}>
            <FadeInImage uri={coin.image} style={styles.image} />
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
    cardContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
    },
    symbol: {
        fontSize: 14,
        color: '#fff',
    },
    price: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
    },
});
