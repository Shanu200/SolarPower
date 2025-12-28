import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css'
import HomePage from './pages/home/home.page';
import DashboardPaage from './pages/dashboard.page';
import { RootLayout } from './layout/root.layout';
import MainLayout from './layout/main.layout';
import DashboardLayout from './layout/dashboard.layout';
import ProtectedLayout from './layout/protected.layout';
import SignInPage from './pages/auth/sign-in-page';
import SignUpPage from './pages/auth/sign-up-page';
import store from './lib/redux/store';
import { Provider } from "react-redux";
import { ClerkProvider } from '@clerk/clerk-react';

// Import your Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error('Add your Clerk Publishable Key to the .env file')
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
          <Routes>
            <Route element={<RootLayout />}>
              <Route path="/sign-in" element={<SignInPage />} />
              <Route path="/sign-up" element={<SignUpPage />} />
              <Route element={<MainLayout />}>
                <Route path="/" element={<HomePage />} />
              </Route>
              <Route element={<ProtectedLayout />}>
                <Route element={<DashboardLayout />}>
                  <Route path="/dashboard" element={<DashboardPaage />} />
                </Route>
              </Route>
            </Route>
          </Routes>
        </ClerkProvider>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
