import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/Landingpage";
import AdminLayout from "./components/admin/AdminLayout";
import AdminHome from "./components/admin/AdminHome";
import AdminDashboard from "./components/admin/AdminDashboard/AdminDashboard";
import AdminCreateTemplate from "./components/admin/AdminCreateTemplates/AdminCreateTemplate";

const App = () => {
  return (
    <Routes>
      {/* Public route */}
      <Route path="/" element={<LandingPage />} />

      {/* Admin routes with layout */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<AdminHome />} /> {/* /admin */}
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route
          path="/admin/create-templates"
          element={<AdminCreateTemplate />}
        />
        {/* /admin/dashboard */}
        {/* Add other admin pages here */}
      </Route>
    </Routes>
  );
};

export default App;
