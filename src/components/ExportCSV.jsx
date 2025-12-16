import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import Papa from "papaparse";

export default function ExportCSV() {
  const { state } = useContext(DataContext);

  const downloadCSV = () => {
    const csv = Papa.unparse(state.filteredData);
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });

    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "filtered_sales_data.csv";
    link.click();
  };

  return (
    <button onClick={downloadCSV} style={{ marginTop: "15px" }}>
      Export to CSV
    </button>
  );
}
