import { useContext } from "react";
import { DataContext } from "../context/DataContext";

export default function Filters() {
  const { state, dispatch } = useContext(DataContext);

  return (
    <div style={{ margin: "20px" }}>
      <label><b>Category: </b></label>
      <select
        value={state.filters.category || ""}
        onChange={(e) =>
          dispatch({
            type: "SET_FILTER",
            payload: { category: e.target.value || null }
          })
        }
      >
        <option value="">All</option>
        <option value="Grocery">Grocery</option>
        <option value="Clothing">Clothing</option>
        <option value="Electronics">Electronics</option>
      </select>
    </div>
  );
}
