import React, { useState } from "react";

const Sidebar = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");

  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(2500);
  return (
    <>
      <div className="w-full md:w-64 bg-white shadow rounded-xl p-4">
        <h2 className="font-bold text-xl mb-4">Filters</h2>

        {/* Categories */}
        <div className="mb-6">
          <h3 className="font-semibold mb-2">Categories</h3>

          {["beauty", "fragrances", "furniture", "groceries"].map((cat) => (
            <label key={cat} className="block">
              <input
                type="radio"
                name="category"
                value={cat}
                onChange={(e) => setSelectedCategory(e.target.value)}
              />
              <span className="ml-2 capitalize">{cat}</span>
            </label>
          ))}
        </div>

        {/* Brands */}
        <div className="mb-6">
          <h3 className="font-semibold mb-2">Brands</h3>

          <select
            className="w-full border rounded p-2"
            onChange={(e) => setSelectedBrand(e.target.value)}
          >
            <option value="">All Brands</option>

            <option>Essence</option>
            <option>Calvin Klein</option>
            <option>Chanel</option>
            <option>Dior</option>
            <option>Gucci</option>
            <option>Furniture Co.</option>
            <option>Fresh Farms</option>
          </select>
        </div>

        {/* Price */}
        <div className="mb-6">
          <h3 className="font-semibold mb-2">Price</h3>

          <input
            type="range"
            min="0"
            max="2500"
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
            className="w-full"
          />

          <p>$0 - ${maxPrice}</p>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
