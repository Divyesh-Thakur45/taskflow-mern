const productModel = require("../models/product.model");

const allProductServices = async (query) => {
  const {
    category,
    brand,
    rating,
    minPrice,
    maxPrice,
    search,
    sort,
    limit = 10,
    page = 1,
  } = query;

  const filter = {};
  const PriceSort = {};
  const RatingSort = {};
  const skip = (page - 1) * limit;
  if (category) filter.category = category;

  if (brand) filter.brand = brand;

  if (rating) filter.rating = rating;

  if (minPrice || maxPrice) {
    filter.price = {};
    if (minPrice) filter.price.$gte = Number(minPrice);
    if (maxPrice) filter.price.$lte = Number(maxPrice);
  }
  if (search) {
    filter.title = {
      $regex: search,
      $options: "i",
    };
  }

  const sortOption = {
    PriceAsc: { price: 1 },
    PriceDesc: { price: -1 },
    RatingAsc: { rating: 1 },
    RatingDesc: { rating: -1 },
  };

  const productsData = await productModel
    .find(filter)
    .sort(sortOption[sort])
    .skip(skip)
    .limit(limit);
  return productsData;
};
module.exports = { allProductServices };
