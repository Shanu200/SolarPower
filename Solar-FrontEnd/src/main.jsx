import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css'
import HomePage from './pages/home.page';
import DashboardPaage from './pages/dashboard.page';
import { RootLayout } from './layout/root.layout';

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout/>}>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<DashboardPaage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
