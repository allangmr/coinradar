import { coinApi } from "../../config/api/coinApi";
import { Coin } from "../../domain/entities/coin";

export const getCoins = async(): Promise<Coin[]> => {

    try {
        const url = `/coins/markets?vs_currency=usd`;
        const { data } = await coinApi.get(url);
        return data;

    } catch(error) {
        console.log(error, 'error');
        throw new Error('Error getting coins');
    }
};
