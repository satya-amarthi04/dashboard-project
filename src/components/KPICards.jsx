import { useContext } from "react";
import { DataContext } from "../context/DataContext";

export default function KPICards() {
  const { state } = useContext(DataContext);

  const totalRevenue = state.filteredData.reduce(
    (sum, item) => sum + item.amount,
    0
  );

  const totalUnits = state.filteredData.reduce(
    (sum, item) => sum + item.units,
    0
  );

  return (
    <div style={{ border: "1px solid #ccc", padding: "15px", marginBottom: "20px" }}>
      <h2>Total Revenue: ₹{totalRevenue}</h2>
      <h3>Total Units Sold: {totalUnits}</h3>
    </div>
  );
}
