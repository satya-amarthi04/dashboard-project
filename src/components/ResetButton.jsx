import { useContext } from "react";
import { DataContext } from "../context/DataContext";

export default function ResetButton() {
  const { dispatch } = useContext(DataContext);

  const handleReset = () => {
    dispatch({ type: "RESET" });
  };

  return (
    <button
      onClick={handleReset}
      style={{
        marginTop: "20px",
        padding: "10px 20px",
        backgroundColor: "#FF4C4C",
        color: "#fff",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer"
      }}
    >
      Reset Filters
    </button>
  );
}
