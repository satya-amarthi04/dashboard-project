import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

export default function CategoryBarChart() {
  const { state, dispatch } = useContext(DataContext);
  const allCategories = ["Clothing", "Grocery", "Electronics"]; // Add all your categories here

  

  const categoryData = Object.values(
    state.filteredData.reduce((acc, item) => {
      acc[item.category] = acc[item.category] || {
        category: item.category,
        amount: 0
      };
      acc[item.category].amount += item.amount;
      return acc;
    }, {})
  );

  return (
    <div style={{ height: 300 }}>
      <h3>Sales by Category</h3>
      <ResponsiveContainer>
        <BarChart data={categoryData}>
          <XAxis dataKey="category" />
          <YAxis />
          <Tooltip />
          <Bar
            dataKey="amount"
            onClick={(data) =>
              dispatch({
                type: "SET_FILTER",
                payload: { category: data.category }
              })
            }
          />
        </BarChart>

      </ResponsiveContainer>
    </div>
  );
}
