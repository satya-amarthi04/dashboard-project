import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { DataProvider } from "./context/DataContext";
import KPICards from "./components/KPICards";
import SalesLineChart from "./components/SalesLineChart";
import CategoryBarChart from "./components/CategoryBarChart";
import RegionPieChart from "./components/RegionPieChart";
import ResetButton from "./components/ResetButton";
import DataTable from "./components/DataTable";
import ExportCSV from "./components/ExportCSV";


import DataFilter from "./components/DataFilter";


export default function App() {
  return (
    <DataProvider>
      {/* Filters */}
      <DataFilter />

      {/* KPI + Charts */}
      <div className="dashboard">
        <KPICards const  />
        <SalesLineChart   />
        <CategoryBarChart  />
        <RegionPieChart  />
      </div>

      {/* Table & Export */}
      <ExportCSV />
      <DataTable />

      {/* Reset */}
      <ResetButton />
    </DataProvider>
  );
}
