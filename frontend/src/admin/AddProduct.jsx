import axios from "axios";
import { useState } from "react";

const AddProduct = () => {
  const [product, setProduct] = useState({
    image: null,
    title: "",
    category: "",
    brand: "",
    price: "",
    rating: "",
    stock: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setProduct((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setProduct((prev) => ({
      ...prev,
      image: e.target.files[0],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", product.image);
    formData.append("title", product.title);
    formData.append("category", product.category);
    formData.append("brand", product.brand);
    formData.append("price", product.price);
    formData.append("rating", product.rating);
    formData.append("stock", product.stock);

    console.log("🚀 ~ AddProduct.jsx:42 ~ handleSubmit ~ formData:", formData);
    for (const [key, value] of formData.entries()) {
      console.log(key, value);
    }
    // API Call Here
    const productData = await axios.post(
      "http://localhost:8080/admin/createproduct",
      formData,
      {
        withCredentials: true,
      },
    );
  };

  return (
    <div className="min-h-screen bg-slate-100 flex justify-center items-center p-5">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center mb-8">Add New Product</h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Image URL */}
          <div>
            <label className="block mb-2 font-medium">Product Image URL</label>

            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleFileChange}
              placeholder="Enter image url"
              className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Title */}
          <div>
            <label className="block mb-2 font-medium">Product Title</label>

            <input
              type="text"
              name="title"
              value={product.title}
              onChange={handleChange}
              placeholder="Enter product title"
              className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Category */}
          <div>
            <label className="block mb-2 font-medium">Category</label>

            <input
              type="text"
              name="category"
              value={product.category}
              onChange={handleChange}
              placeholder="Enter category"
              className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Brand */}
          <div>
            <label className="block mb-2 font-medium">Brand</label>

            <input
              type="text"
              name="brand"
              value={product.brand}
              onChange={handleChange}
              placeholder="Enter brand name"
              className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Price + Rating */}
          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <label className="block mb-2 font-medium">Price</label>

              <input
                type="number"
                name="price"
                value={product.price}
                onChange={handleChange}
                placeholder="Enter price"
                className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">Rating</label>

              <input
                type="number"
                step="0.1"
                min="0"
                max="5"
                name="rating"
                value={product.rating}
                onChange={handleChange}
                placeholder="0 - 5"
                className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </div>

          {/* Stock */}
          <div>
            <label className="block mb-2 font-medium">Stock</label>

            <input
              type="number"
              name="stock"
              value={product.stock}
              onChange={handleChange}
              placeholder="Enter stock quantity"
              className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Image Preview */}
          {product.image && (
            <div>
              <p className="font-medium mb-2">Image Preview</p>

              <img
                src={URL.createObjectURL(product.image)}
                alt="preview"
                className="w-40 h-40 object-cover rounded-lg border"
              />
            </div>
          )}

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition"
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
