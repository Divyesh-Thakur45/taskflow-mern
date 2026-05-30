import React, { useState } from "react";

const TopSearchFilter = () => {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  return (
    <div>
      <div className="flex flex-col md:flex-row gap-4 justify-between mb-6">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border px-4 py-2 rounded-lg w-full md:w-96"
        />

        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="border px-4 py-2 rounded-lg"
        >
          <option value="">Sort By</option>
          <option value="priceLow">Price Low → High</option>
          <option value="priceHigh">Price High → Low</option>
          <option value="ratingHigh">Rating High → Low</option>
          <option value="stockHigh">Stock High → Low</option>
        </select>
      </div>
    </div>
  );
};

export default TopSearchFilter;
