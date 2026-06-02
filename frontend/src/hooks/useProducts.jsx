import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const useProducts = ({
  search,
  category,
  brand,
  minPrice,
  maxPrice,
  sort,
  page,
  limit = 4,
}) => {
  const [loading, SetLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const fetchProducts = async () => {
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
          page,
          limit,
        },
      });

      setData(response?.data?.data);
    } catch (error) {
      console.log(error);
      setError(error);
    } finally {
      SetLoading(false);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, [search, brand, category, minPrice, maxPrice, sort, page]);

  return { loading, data, refetch: fetchProducts, error };
};

export default useProducts;
