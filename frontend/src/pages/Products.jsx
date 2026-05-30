import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../ui/Card";
import Sidebar from "../ui/Sidebar";
import TopSearchFilter from "../ui/TopSearchFilter";

const Products = () => {
  const [loading, SetLoading] = useState(false);
  const [productsData, setProductsData] = useState([]);

  const [page, setPage] = useState(1);

  const itemsPerPage = 8;
  const getAllProducts = async () => {
    try {
      SetLoading(true);
      const response = await axios.get("http://localhost:8080/products/all");

      setProductsData(response?.data?.data);
    } catch (error) {
      console.log(error);
    } finally {
      SetLoading(false);
    }
  };
  useEffect(async () => {
    getAllProducts();
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div className="p-2">
      <TopSearchFilter />

      <div className="flex justify-between">
        <Sidebar />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
          {productsData.map((el, idx) => (
            <Card {...el} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
