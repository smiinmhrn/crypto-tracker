import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const getCoinsData = async () => {
  const COINS_URL = `${BASE_URL}/coins/markets`;

  try {
    const response = await axios.get(COINS_URL, {
      params: {
        vs_currency: "usd",
        order: "market_cap_desc",
        per_page: 100,
        page: 1,
        sparkline: false,
      },
    });

    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch", { cause: error });
  }
};

export const getCoinData = async (id) => {
  const COINS_URL = `${BASE_URL}/coins/${id}`;

  try {
    const response = await axios.get(COINS_URL, {
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
    throw new Error("Failed to fetch", { cause: error });
  }
};

export const getChartData = async (id) => {
  const CHART_URL = `${BASE_URL}/coins/${id}/market_chart`;

  try {
    const response = await axios.get(CHART_URL, {
      params: {
        vs_currency: "usd",
        days: 7,
      },
    });

    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch chart data", { cause: error });
  }
};
