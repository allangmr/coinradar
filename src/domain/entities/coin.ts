export interface Coin {
    id: string;
    name: string;
    image: string;
    symbol: string;
    current_price: number;
    high_24h: number;
    low_24h: number;
    market_cap: number;
    market_cap_rank: number;
    circulating_supply: number;
    total_supply: number;
    max_supply: number | null;
    price_change_percentage_24h: number;
}
