import React from "react";
import { Route, Routes } from "react-router";
import Home from "../pages/Home";
import Products from "../pages/Products";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import Cart from "../pages/Cart";
import NoPageFound from "../components/NoPageFound";
import ProtectedRoute from "../components/ProtectedRoute";
import AdminApp from "../admin/AdminApp";
import AdminProtect from "../components/AdminProtect";

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/carts"
          element={
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin"
          element={
            <AdminProtect>
              <AdminApp />
            </AdminProtect>
          }
        />
        <Route path="*" element={<NoPageFound />} />
      </Routes>
    </>
  );
};

export default AllRoutes;
