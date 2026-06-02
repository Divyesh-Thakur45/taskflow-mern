import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../ui/Card";
import Sidebar from "../ui/Sidebar";
import TopSearchFilter from "../ui/TopSearchFilter";
import { useSearch } from "../Contexts/SearchContext";
import { useSelector } from "react-redux";
import useProducts from "../hooks/useProducts";

const Products = () => {
  const [productsData, setProductsData] = useState([]);
  const [page, setPage] = useState(1);
  const { search } = useSearch();
  const { category, brand, rating, minPrice, maxPrice, sort } = useSelector(
    (state) => state.filter,
  );

  const { loading, data } = useProducts({
    search,
    category,
    brand,
    minPrice,
    maxPrice,
    sort,
    page,
    limit: 4,
  });

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
          {data.map((el, idx) => (
            <Card key={idx} {...el} />
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center gap-2">
        <button
          disabled={page == 1}
          onClick={() => setPage(page - 1)}
          className="py-2 px-3 border rounded bg-blue-300 font-bold"
        >
          pre
        </button>
        <p>{page}</p>
        <button
          onClick={() => setPage(page + 1)}
          className="py-2 px-3 border rounded bg-blue-300 font-bold"
        >
          next
        </button>
      </div>
    </div>
  );
};

export default Products;
