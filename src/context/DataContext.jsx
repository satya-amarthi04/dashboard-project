import { createContext, useReducer, useEffect } from "react";

export const DataContext = createContext();

const initialState = {
  data: [],
  filteredData: [],
  filters: {
    category: null,
    region: null
  }
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_DATA":
      return {
        ...state,
        data: action.payload,
        filteredData: action.payload
      };

    case "SET_FILTER": {
      const filters = { ...state.filters, ...action.payload };

      const filtered = state.data.filter(item => {
        return (
          (!filters.category || item.category === filters.category) &&
          (!filters.region || item.region === filters.region)
        );
      });

      return { ...state, filters, filteredData: filtered };
    }

    case "RESET":
      return {
        ...state,
        filters: initialState.filters,
        filteredData: [...state.data]
      };

    default:
      return state;
  }
}

export function DataProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch("/sales.json")
      .then(res => res.json())
      .then(data =>
        dispatch({ type: "SET_DATA", payload: data })
      );
  }, []);

  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
}
