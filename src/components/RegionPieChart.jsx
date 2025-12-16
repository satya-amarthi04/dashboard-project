import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

export default function RegionPieChart() {
  const { state, dispatch } = useContext(DataContext);

  const data = state.filteredData.reduce((acc, item) => {
    const existing = acc.find(d => d.region === item.region);
    if (existing) existing.amount += item.amount;
    else acc.push({ region: item.region, amount: item.amount });
    return acc;
  }, []);

  const handleClick = (entry) => {
    dispatch({ type: "SET_FILTER", payload: { region: entry.region } });
  };

  return (
    <div style={{ width: "100%", height: 300, marginBottom: "20px" }}>
      <h3>Sales by Region</h3>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data}
            dataKey="amount"
            nameKey="region"
            outerRadius={80}
            fill="#8884d8"
            label
            onClick={handleClick} // <-- cross-filtering
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
