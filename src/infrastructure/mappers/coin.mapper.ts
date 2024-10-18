import { Coin } from "../../domain/entities/coin";
import { CoinAPIPaginatedResponse } from "../interfaces/coinApi.interfaces";

export class CoinMapper {
    static coinApiToEntity(data: CoinAPIPaginatedResponse): Coin {
        return {
            id: data.id,
            name: data.name,
            image: data.image,
            symbol: data.symbol,
            current_price: data.current_price,
            high_24h: data.high_24h,
            low_24h: data.low_24h,
            market_cap: data.market_cap,
            market_cap_rank: data.market_cap_rank,
            circulating_supply: data.circulating_supply,
            total_supply: data.total_supply,
            max_supply: data.max_supply ?? null,
            price_change_percentage_24h: data.price_change_percentage_24h,
        };
    }
}
