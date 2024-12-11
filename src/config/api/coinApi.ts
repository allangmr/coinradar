// import { THE_COINGECKO_DB_KEY } from "@env";
import axios from 'axios';

export const coinApi = axios.create({
  baseURL: 'https://api.coingecko.com/api/v3',
    // params: {
    //     x_cg_demo_api_key: THE_COINGECKO_DB_KEY ?? 'no-key',
    // },
});
