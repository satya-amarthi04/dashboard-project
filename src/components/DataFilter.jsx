import { useContext } from "react";
import { DataContext } from "../context/DataContext";

export default function DataFilter() {
  const { setStartDate, setEndDate } = useContext(DataContext);

  return (
    <div style={{ display: "flex", gap: "10px", margin: "20px" }}>
      <input
        type="date"
        onChange={(e) => setStartDate(e.target.value)}
      />

      <input
        type="date"
        onChange={(e) => setEndDate(e.target.value)}
      />
    </div>
  );
}
