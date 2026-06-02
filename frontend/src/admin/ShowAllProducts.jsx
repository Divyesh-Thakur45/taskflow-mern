import React from "react";
import useProducts from "../hooks/useProducts";
import Card from "../ui/Card";

const ShowAllProducts = () => {
  const { loading, data } = useProducts({ limit: 0 });
  return (
    <div>
      <h1 className="text-3xl font-bold mb-5">All Products</h1>

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
  );
};

export default ShowAllProducts;
