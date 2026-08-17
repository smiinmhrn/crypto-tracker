import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const getCoinData = async (id) => {
  const COIN_URL = `${BASE_URL}/coins/${id}`;

  try {
    const response = await axios.get(COIN_URL, {
      params: {
        localization: false,
        tickers: false,
        market_data: true,
        community_data: false,
        developer_data: false,
        sparkline: false,
      },
    });

    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch coin data", { cause: error });
  }
};
