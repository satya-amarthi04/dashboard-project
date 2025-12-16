import { useContext, useMemo } from "react";
import { DataContext } from "../context/DataContext";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

export default function SalesLineChart() {
  const { state } = useContext(DataContext);

  const chartData = useMemo(() => {
    if (!state.filteredData || state.filteredData.length === 0) {
      return [];
    }

    const map = {};
    state.filteredData.forEach(item => {
      if (!map[item.date]) {
        map[item.date] = 0;
      }
      map[item.date] += item.amount;
    });

    return Object.keys(map).map(date => ({
      date,
      revenue: map[date]
    }));
  }, [state.filteredData]);

  if (chartData.length === 0) {
    return <p style={{ padding: 10 }}>No data available</p>;
  }

  return (
    <div style={{ height: 300, marginBottom: 20 }}>
      <h3>Sales Over Time</h3>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={chartData}>
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="revenue"
            stroke="#8884d8"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}