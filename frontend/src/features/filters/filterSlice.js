import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  category: "",
  brand: "",
  rating: "",
  minPrice: "",
  maxPrice: "",
  sort: "",
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    setBrand: (state, action) => {
      state.brand = action.payload;
    },
    setRating: (state, action) => {
      state.rating = action.payload;
    },
    setMinPrice: (state, action) => {
      state.maxPrice = action.payload;
    },
    setMaxPrice: (state, action) => {
      state.minPrice = action.payload;
    },
    setSort: (state, action) => {
      state.sort = action.payload;
    },
    ResetFilter: (state) => {
      state.category = "";
      state.brand = "";
      state.rating = "";
      state.minPrice = "";
      state.maxPrice = "";
      state.sort = "";
    },
  },
});

export const {
  setCategory,
  setBrand,
  setRating,
  setMinPrice,
  setMaxPrice,
  setSort,
  ResetFilter,
} = filterSlice.actions;

export default filterSlice.reducer;
