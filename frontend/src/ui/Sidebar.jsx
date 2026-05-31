import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  setBrand,
  setCategory,
  setMaxPrice,
  setMinPrice,
} from "../features/filters/filterSlice";

const Sidebar = () => {
  const dispatch = useDispatch();
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
                onClick={() => dispatch(setCategory(cat))}
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
            onClick={(e) => dispatch(setBrand(e.target.value))}
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
          <h3 className="font-semibold mb-2">Price Range</h3>

          <input
            type="number"
            placeholder="Min Price"
            onChange={(e) => dispatch(setMinPrice(e.target.value))}
            className="border p-2 w-full mb-2"
          />

          <input
            type="number"
            placeholder="Max Price"
            onChange={(e) => dispatch(setMaxPrice(e.target.value))}
            className="border p-2 w-full"
          />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
