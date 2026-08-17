import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

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
