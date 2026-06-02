import React from "react";
import axios from "axios";
const Card = ({
  _id,
  image,
  title,
  brand,
  category,
  price,
  rating,
  stock,
  showStock = true,
  showAddToCart = true,
  showRemoveButton = false,
  handleCartDelete,
  cartid,
}) => {
  const handleAddtoCart = async (productId) => {
    const cart = await axios.post(
      "http://localhost:8080/cart/add",
      {
        productId,
      },
      {
        withCredentials: true,
      },
    );

    console.log("🚀 ~ Card.jsx:9 ~ handleAddtoCart ~ cart:", cart);
  };
  return (
    <>
      <div
        key={_id}
        className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300"
      >
        {/* Product Image */}
        <div className="h-56 bg-gray-100">
          <img
            src={
              image?.startsWith("https")
                ? image
                : `http://localhost:8080/uploads/${image}`
            }
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Product Details */}
        <div className="p-4">
          <h2 className="font-semibold text-lg line-clamp-2">{title}</h2>

          <p className="text-sm text-gray-500 mt-1">{brand}</p>

          <span className="inline-block mt-2 px-3 py-1 text-xs bg-pink-100 text-pink-600 rounded-full">
            {category}
          </span>

          <div className="flex justify-between items-center mt-4">
            <h3 className="text-xl font-bold text-green-600">${price}</h3>

            <span className="text-yellow-500 font-medium">⭐ {rating}</span>
          </div>
          {showStock && (
            <p className="text-sm text-gray-600 mt-2">Stock: {stock}</p>
          )}

          {showAddToCart && (
            <button
              onClick={() => handleAddtoCart(_id)}
              className="w-full mt-4 bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition"
            >
              Add to Cart
            </button>
          )}
          {showRemoveButton && (
            <button
              onClick={() => handleCartDelete(cartid)}
              className="w-full mt-2 bg-red-500 text-white py-2 rounded-lg"
            >
              Remove
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Card;
