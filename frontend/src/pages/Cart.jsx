import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../ui/Card";

const Cart = () => {
  const [data, setData] = useState([]);
  const getCarts = async () => {
    try {
      const carts = await axios.get("http://localhost:8080/cart/all", {
        withCredentials: true,
      });
      setData(carts.data?.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getCarts();
  }, []);
  return (
    <>
      <h1 className="text-center text-2xl font-bold uppercase">
        Add to cart Page
      </h1>
      <div className="grid grid-cols-4">
        {data.map((el, idx) => {
          return (
            <Card
              key={idx}
              {...el?.productId}
              showRemoveButton={true}
              showStock={false}
              showAddToCart={false}
            />
          );
        })}
      </div>
    </>
  );
};

export default Cart;
