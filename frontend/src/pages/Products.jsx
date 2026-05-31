import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../ui/Card";
import Sidebar from "../ui/Sidebar";
import TopSearchFilter from "../ui/TopSearchFilter";
import { useSearch } from "../Contexts/SearchContext";
import { useSelector } from "react-redux";

const Products = () => {
  const [loading, SetLoading] = useState(false);
  const [productsData, setProductsData] = useState([]);
  const { search } = useSearch();
  const { category, brand, rating, minPrice, maxPrice, sort } = useSelector(
    (state) => state.filter,
  );

  console.log("🚀 ~ Products.jsx:17 ~ Products ~ sort:", sort);

  const [page, setPage] = useState(1);

  const itemsPerPage = 8;
  const getAllProducts = async () => {
    try {
      SetLoading(true);
      const response = await axios.get("http://localhost:8080/products/all", {
        params: {
          search,
          category,
          brand,
          minPrice,
          maxPrice,
          sort,
        },
      });

      setProductsData(response?.data?.data);
    } catch (error) {
      console.log(error);
    } finally {
      SetLoading(false);
    }
  };
  useEffect(() => {
    getAllProducts();
  }, [search, brand, category, minPrice, maxPrice, sort]);

  return (
    <div className="p-2">
      <TopSearchFilter />

      <div className="flex justify-between">
        <Sidebar />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
          {loading && (
            <>
              <h1>Loading......</h1>
            </>
          )}
          {productsData.map((el, idx) => (
            <Card key={idx} {...el} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
