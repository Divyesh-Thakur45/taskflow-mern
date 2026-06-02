import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../ui/Card";

const Cart = () => {
  const [data, setData] = useState([]);
  const [isDelete, setIsDelete] = useState({});

  const handleCartDelete = async (id) => {
    try {
      const removedProduct = await axios.delete(
        `http://localhost:8080/cart/${id}`,
        {
          withCredentials: true,
        },
      );

      if (removedProduct?.data?.success) {
        setIsDelete(removedProduct?.data?.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

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
  }, [isDelete]);
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
              handleCartDelete={handleCartDelete}
              cartid={el?._id}
            />
          );
        })}
      </div>
    </>
  );
};

export default Cart;
