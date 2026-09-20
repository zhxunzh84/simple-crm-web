import { BrowserRouter, Routes, Route } from "react-router";
import WelcomePage from "./pages/WelcomePage";
import RootLayout from "./layouts/RootLayout";
import ProtectedRoute from "./components/ProtectedRoute";
import DashboardPage from "./pages/DashboardPage";
import CustomersPage from "./pages/CustomersPage";
import NewCustomerPage from "./pages/NewCustomerPage";
import CustomerDetailPage from "./pages/CustomerDetailPage";
import EditCustomerPage from "./pages/EditCustomerPage";
import LoginPage from "./pages/LoginPage";
import NotFoundPage from "./pages/NotFoundPage";
import ProductsPage from "./pages/ProductsPage";

import "./App.css";

export const API_BASE = import.meta.env.VITE_API_BASE_URL;

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public */}
        <Route index element={<WelcomePage />} />
        <Route path="login" element={<LoginPage />} />

        {/* Must be logged in */}
        <Route element={<ProtectedRoute />}>
          <Route path="app" element={<RootLayout />}>
            <Route index element={<DashboardPage />} />
            <Route path="products" element={<ProductsPage />} />
            <Route path="customers" element={<CustomersPage />} />
            <Route path="customers/new" element={<NewCustomerPage />} />
            <Route path="customers/:id" element={<CustomerDetailPage />} />
            <Route path="customers/:id/edit" element={<EditCustomerPage />} />
          </Route>
        </Route>

        {/* 404 */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;