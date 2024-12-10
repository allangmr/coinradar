import { coinApi } from "../../config/api/coinApi";
import type { Coin } from "../../domain/entities/coin";
import type { CoinAPIPaginatedResponse } from "../../infrastructure/interfaces/coinApi.interfaces";
import { CoinMapper } from "../../infrastructure/mappers/coin.mapper";

export const getCoins = async (page: number, limit: number = 20): Promise<Coin[]> => {
    try {
        const url = `/coins/markets?vs_currency=usd&page=${page}&per_page=${limit}`;
        const { data } = await coinApi.get<CoinAPIPaginatedResponse[]>(url);
        const coins = data.map((coin) => CoinMapper.coinApiToEntity(coin));
        console.log(coins, 'coins');
        return coins;
    } catch (error) {
        console.log(error, 'error');
        throw new Error('Error getting coins');
    }
};
