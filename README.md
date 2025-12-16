# Sales Dashboard Application

## Project Overview

This project is an interactive **Sales Dashboard Application** built using **React.js and Vite**.
It provides visual insights into sales data using charts and filters, helping users analyze trends, categories, and regions efficiently.
The dashboard supports **cross-filtering, date range selection, tooltips, CSV export**, and a fully **responsive user interface** that adapts to desktop, tablet, and mobile devices.

---

## Live Demo

🔗 **Live URL:** [http://dashboard-project-qale-naajdh4pk-amarthi-satyas-projects.vercel.app]


---

## Features

* Interactive charts (Line, Bar, Pie) for sales analysis
* Cross-filtering between multiple charts
* Date range selection for dynamic data filtering
* Tooltips on chart hover for detailed information
* Fully responsive layout (desktop, tablet, mobile)
* Export filtered data to CSV format

---

## Architecture & Component Structure

This application follows a **component-based architecture** using React.

* `App.jsx` acts as the root component and manages global state and layout.
* Chart components (LineChart, BarChart, PieChart) are modular and reusable.
* Filter components (date range, category filters) update shared state.
* State is passed via props and managed using React hooks.
* The project uses a clear folder structure to separate concerns.

### Folder Structure

```
src/
 ├── components/
 │    ├── charts/
 │    ├── filters/
 │    └── ExportCSV.jsx
 ├── data/
 ├── App.jsx
 ├── main.jsx
```

---

## Tech Stack & Libraries

* **React.js** – Component-based UI development
* **Vite** – Fast development server and optimized build tool
* **Recharts / Chart.js** – Interactive and responsive data visualizations
* **PapaParse** – CSV generation and export functionality
* **CSS / Tailwind CSS** – Responsive and clean UI styling
* **Vercel** – Cloud platform for deployment and hosting

Each technology was chosen to ensure performance, scalability, and ease of development.

---

## Local Setup Instructions

Follow these steps to run the project locally:

1. Clone the repository:

   ```bash
   git clone https://github.com/satya-amarthi04/dashboard-project.git
   ```

2. Navigate into the project directory:

   ```bash
   cd dashboard-project
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open  browser and visit:

   ```
   http://localhost:5173
   ```



