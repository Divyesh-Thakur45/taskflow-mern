import React, { useState } from "react";
import AddProduct from "./AddProduct";
import ShowAllProducts from "./ShowAllProducts";
import ShowAllUsers from "./ShowAllUsers";

const AdminApp = () => {
  const [activeTab, setActiveTab] = useState("products");

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-slate-900 text-white p-5">
        <h2 className="text-2xl font-bold mb-8">Admin Panel</h2>

        <div className="space-y-3">
          <button
            onClick={() => setActiveTab("addProduct")}
            className="w-full text-left p-3 rounded bg-slate-800 hover:bg-slate-700"
          >
            Add Product
          </button>

          <button
            onClick={() => setActiveTab("products")}
            className="w-full text-left p-3 rounded bg-slate-800 hover:bg-slate-700"
          >
            All Products
          </button>

          <button
            onClick={() => setActiveTab("users")}
            className="w-full text-left p-3 rounded bg-slate-800 hover:bg-slate-700"
          >
            All Users
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-6 bg-slate-100">
        {activeTab === "addProduct" && <AddProduct />}
        {activeTab === "products" && <ShowAllProducts />}
        {activeTab === "users" && <ShowAllUsers />}
      </div>
    </div>
  );
};

export default AdminApp;
