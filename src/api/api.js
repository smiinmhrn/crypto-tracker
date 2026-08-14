import axios from "axios";

const BASE_URL = "https://api.coingecko.com/api/v3";

const getCoinsData = async () => {
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

export default getCoinsData;
