import { useContext } from "react";
import { DataContext } from "../context/DataContext";

export default function DataTable() {
  const { state } = useContext(DataContext);

  if (state.filteredData.length === 0) {
    return <p>No data available</p>;
  }

  return (
    <div style={{ marginTop: "20px", overflowX: "auto" }}>
      <h3>Sales Data</h3>

      <table border="1" cellPadding="8" style={{ width: "100%" }}>
        <thead>
          <tr>
            <th>Date</th>
            <th>Category</th>
            <th>Region</th>
            <th>Amount (₹)</th>
            <th>Units</th>
          </tr>
        </thead>

        <tbody>
          {state.filteredData.map((row, index) => (
            <tr key={index}>
              <td>{row.date}</td>
              <td>{row.category}</td>
              <td>{row.region}</td>
              <td>{row.amount}</td>
              <td>{row.units}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
