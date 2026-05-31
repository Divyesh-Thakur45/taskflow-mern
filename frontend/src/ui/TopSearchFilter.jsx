import React, { useState } from "react";
import { useSearch } from "../Contexts/SearchContext";
import { useDispatch, useSelector } from "react-redux";
import { setSort } from "../features/filters/filterSlice";

const TopSearchFilter = () => {
  const { search, setSearch } = useSearch();
  const dispatch = useDispatch();
  const { sort } = useSelector((state) => state.filter);

  return (
    <div>
      <div className="flex flex-col md:flex-row gap-4 justify-between mb-6">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Search products..."
          className="border px-4 py-2 rounded-lg w-full md:w-96"
        />

        <select
          value={sort}
          onChange={(e) => dispatch(setSort(e.target.value))}
          className="border px-4 py-2 rounded-lg"
        >
          <option value="" defaultValue={""}>
            Sort By
          </option>
          <option value="PriceAsc">Price Low → High</option>
          <option value="PriceDesc">Price High → Low</option>
          <option value="RatingAsc">Rating Low → High</option>
          <option value="RatingDesc">Rating High → Low</option>
        </select>
      </div>
    </div>
  );
};

export default TopSearchFilter;
