import {
  CartesianGrid,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Line,
  Tooltip,
} from "recharts";

import useFetch from "@/hooks/useFetch";
import { getChartData } from "@/api/getChartData";
import Loading from "@/components/loading/Loading";

const CoinChart = ({ coinId }) => {
  const { data, loading, error } = useFetch(() => getChartData(coinId));

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <p>Could not load chart data.</p>;
  }

  const formattedData = data.prices.map((price) => ({
    time: new Date(price[0]).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    }),
    price: price[1].toFixed(2),
  }));

  return (
    <div className="chart-section">
      <h3>Price Chart (7 Days)</h3>

      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={formattedData}>
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="rgba(255, 255, 255, 0.1)"
          />

          <XAxis dataKey="time" stroke="#9ca3af" style={{ fontSize: "12px" }} />

          <YAxis
            stroke="#9ca3af"
            style={{ fontSize: "12px" }}
            domain={["auto", "auto"]}
          />

          <Tooltip
            contentStyle={{
              backgroundColor: "rgba(20, 20, 40, 0.95)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              borderRadius: "8px",
              color: "#e0e0e0",
            }}
          />

          <Line
            type="monotone"
            dataKey="price"
            stroke="#ADD8E6"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CoinChart;
