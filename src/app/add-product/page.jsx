"use client";
import React, { useState } from "react";
import NavItem from "@/components/Navigation/NavItem";
import NavigationMobile from "@/components/Navigation/NavigationMobile";

const AddProduct = () => {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    stock: "",
    description: "",
    usage: "",
    ingredients: "",
    healthBenefits: "",
    weight: "",
    category: "",
    images: [],
    productUrl: "",
    productType: "",
    isAvailableOnAmazon: false,
    isAvailableOnFlipkart: false,
    flipkart50gLink: "",
    flipkart100gLink: "",
    flipkart500gLink: "",
    amazon50gLink: "",
    amazon100gLink: "",
    amazon500gLink: "",
    backgroundColor: "",
    colored1: "",
    colored2: "",
    inactiveBtnColor1: "",
    inactiveBtnColor2: "",
    faqs: [{ question: "", answer: "" }],
  });

  const handleChange = (e, index) => {
    const { name, value, type } = e.target;

    if (type === "checkbox" || type === "radio") {
      setProduct({ ...product, [name]: value === "true" });
    } else if (name.includes("faq")) {
      // If the name includes "faq", it's a FAQ field
      const faqs = [...product.faqs];
      faqs[index][name.split("-")[1]] = value; // Extract the field name from the input name
      setProduct({ ...product, faqs });
    } else {
      setProduct({ ...product, [name]: value });
    }
  };

  const handleAddFAQ = () => {
    setProduct({
      ...product,
      faqs: [...product.faqs, { question: "", answer: "" }],
    });
  };

  const handleRemoveFAQ = (index) => {
    const faqs = [...product.faqs];
    faqs.splice(index, 1);
    setProduct({ ...product, faqs });
  };

  const handleImageChange = (e) => {
    const images = Array.from(e.target.files);
    setProduct({ ...product, images: [...product.images, ...images] });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(product);
  };

  return (
    <>
      <div className="navMobile ">
        <NavigationMobile page={"cart"} />
      </div>
      <NavItem page={"cart"} />

      <div className="px-10 pt-24 max-w-5xl mx-auto">
        <h2 className="text-5xl font-bold mb-4">Add Product</h2>
        <form onSubmit={handleSubmit}>
          <div className="bg-slate-100 p-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="mb-4">
                <label className="block mb-1">Product Name</label>
                <input
                  type="text"
                  name="name"
                  value={product.name}
                  onChange={handleChange}
                  className="w-full border rounded px-4 py-2"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-1">Product Url</label>
                <input
                  type="text"
                  name="productUrl"
                  value={product.productUrl}
                  onChange={handleChange}
                  className="w-full border rounded px-4 py-2"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-1">Product Type</label>
                <select
                  name="productType"
                  value={product.productType}
                  onChange={handleChange}
                  className="w-full border rounded px-4 py-2">
                  <option value="">Select Product Type</option>
                  <option value="blended">Blended</option>
                  <option value="ground">Ground</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block mb-1">Product Category</label>
                <select
                  name="category"
                  value={product.category}
                  onChange={handleChange}
                  className="w-full border rounded px-4 py-2">
                  <option value="">Select Product Category</option>
                  <option value="Coming Soon">Coming Soon</option>
                  <option value="Mouth Watering">Mouth Watering</option>
                  <option value="Kitchen Spices">Kitchen Spices</option>
                  <option value="Weekend Ka Tadka">Weekend Ka Tadka</option>
                  <option value="Upcoming Products">Upcoming Products</option>
                  <option value="Best Seller">Best Seller</option>
                </select>
              </div>

              <div className="mb-4">
                <label className="block mb-1">Weight</label>
                <input
                  type="number"
                  name="weight"
                  value={product.weight}
                  onChange={handleChange}
                  className="w-full border rounded px-4 py-2"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-1">Price</label>
                <input
                  type="number"
                  name="price"
                  value={product.price}
                  onChange={handleChange}
                  className="w-full border rounded px-4 py-2"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-1">Stock</label>
                <input
                  type="number"
                  name="stock"
                  value={product.stock}
                  onChange={handleChange}
                  className="w-full border rounded px-4 py-2"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-1">Product Background Image</label>
                <input
                  type="file"
                  name="backgroundImage"
                  onChange={handleImageChange}
                  className="w-full border rounded px-4 py-2"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-1">Product Front Image</label>
                <input
                  type="file"
                  name="frontImage"
                  onChange={handleImageChange}
                  className="w-full border rounded px-4 py-2"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-1">Product All Image</label>
                <input
                  type="file"
                  name="allImages"
                  onChange={handleImageChange}
                  className="w-full border rounded px-4 py-2"
                  multiple
                />
              </div>
              <div className="mb-4">
                <label className="block mb-1">Description</label>
                <textarea
                  name="description"
                  value={product.description}
                  onChange={handleChange}
                  className="w-full border rounded px-4 py-2"></textarea>
              </div>
              <div className="mb-4">
                <label className="block mb-1">Usage</label>
                <textarea
                  name="usage"
                  value={product.usage}
                  onChange={handleChange}
                  className="w-full border rounded px-4 py-2"></textarea>
              </div>
              <div className="mb-4">
                <label className="block mb-1">Ingredients</label>
                <textarea
                  name="ingredients"
                  value={product.ingredients}
                  onChange={handleChange}
                  className="w-full border rounded px-4 py-2"></textarea>
              </div>
              <div className="mb-4">
                <label className="block mb-1">Health benefits</label>
                <textarea
                  name="healthBenefits"
                  value={product.healthBenefits}
                  onChange={handleChange}
                  className="w-full border rounded px-4 py-2"></textarea>
              </div>
            </div>
          </div>
          {/* Additional Product Links */}

          <h5 className="text-2xl mt-4">Product Links</h5>
          <div className="bg-slate-100 p-4 mt-2 mb-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="mb-4">
                <label className="block mb-2">Available on Amazon</label>
                <div className="mb-2">
                  <label>
                    <input
                      type="radio"
                      name="isAvailableOnAmazon"
                      value="true"
                      checked={product.isAvailableOnAmazon}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    Yes
                  </label>
                  <label className="ml-4">
                    <input
                      type="radio"
                      name="isAvailableOnAmazon"
                      value="false"
                      checked={!product.isAvailableOnAmazon}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    No
                  </label>
                </div>
                {product.isAvailableOnAmazon && (
                  <div>
                    <div className="mb-4">
                      <label className="block mb-1">Amazon 50g Link</label>
                      <input
                        type="text"
                        name="amazon50gLink"
                        value={product.amazon50gLink}
                        onChange={handleChange}
                        className="w-full border rounded px-4 py-2"
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block mb-1">Amazon 100g Link</label>
                      <input
                        type="text"
                        name="amazon100gLink"
                        value={product.amazon100gLink}
                        onChange={handleChange}
                        className="w-full border rounded px-4 py-2"
                      />
                    </div>
                    <div className="mb-2">
                      <label className="block mb-1">Amazon 500g Link</label>
                      <input
                        type="text"
                        name="amazon500gLink"
                        value={product.amazon500gLink}
                        onChange={handleChange}
                        className="w-full border rounded px-4 py-2"
                      />
                    </div>
                  </div>
                )}
              </div>

              <div className="mb-4">
                <label className="block mb-2">Available on Flipkart</label>
                <div className="mb-2">
                  <label>
                    <input
                      type="radio"
                      name="isAvailableOnFlipkart"
                      value="true"
                      checked={product.isAvailableOnFlipkart === true}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    Yes
                  </label>
                  <label className="ml-4">
                    <input
                      type="radio"
                      name="isAvailableOnFlipkart"
                      value="false"
                      checked={product.isAvailableOnFlipkart === false}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    No
                  </label>
                </div>
                {product.isAvailableOnFlipkart && (
                  <div>
                    <div className="mb-4">
                      <label className="block mb-1">Flipkart 50g Link</label>
                      <input
                        type="text"
                        name="flipkart50gLink"
                        value={product.flipkart50gLink}
                        onChange={handleChange}
                        className="w-full border rounded px-4 py-2"
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block mb-1">Flipkart 100g Link</label>
                      <input
                        type="text"
                        name="flipkart100gLink"
                        value={product.flipkart100gLink}
                        onChange={handleChange}
                        className="w-full border rounded px-4 py-2"
                      />
                    </div>
                    <div className="mb-2">
                      <label className="block mb-1">Flipkart 500g Link</label>
                      <input
                        type="text"
                        name="flipkart500gLink"
                        value={product.flipkart500gLink}
                        onChange={handleChange}
                        className="w-full border rounded px-4 py-2"
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Additional Product Details */}
          <h5 className="text-2xl">Product Additional Details</h5>
          <div className="bg-slate-100 p-4 mt-2 mb-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="mb-4">
                <label className="block mb-1">Background Colour</label>
                <input
                  type="text"
                  name="backgroundColor"
                  value={product.backgroundColor}
                  onChange={handleChange}
                  className="w-full border rounded px-4 py-2"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-1">Colored 1</label>
                <input
                  type="text"
                  name="colored1"
                  value={product.colored1}
                  onChange={handleChange}
                  className="w-full border rounded px-4 py-2"
                />
              </div>

              <div className="mb-4">
                <label className="block mb-1">Colored 2</label>
                <input
                  type="text"
                  name="colored2"
                  value={product.colored2}
                  onChange={handleChange}
                  className="w-full border rounded px-4 py-2"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-1">Inactive Btn Color 1</label>
                <input
                  type="text"
                  name="inactiveBtnColor1"
                  value={product.inactiveBtnColor1}
                  onChange={handleChange}
                  className="w-full border rounded px-4 py-2"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-1">Inactive Btn Color 2</label>
                <input
                  type="text"
                  name="inactiveBtnColor2"
                  value={product.inactiveBtnColor2}
                  onChange={handleChange}
                  className="w-full border rounded px-4 py-2"
                />
              </div>
            </div>
          </div>

          {/*  Product FAQ */}
          <h5 className="text-2xl">Product FAQ's</h5>
          <div className="bg-slate-100 p-4 mt-2 mb-4">
            {product.faqs.map((faq, index) => (
              <div key={index} className="grid grid-cols-2 gap-4">
                <div className="mb-4">
                  <label className="block mb-1">Question</label>
                  <textarea
                    name="question"
                    value={faq.question}
                    onChange={(e) => handleChange(e, index)}
                    className="w-full border rounded px-4 py-2"
                  />
                </div>
                <div className="mb-4">
                  <label className="block mb-1">Answer</label>
                  <textarea
                    name="answer"
                    value={faq.answer}
                    onChange={(e) => handleChange(e, index)}
                    className="w-full border rounded px-4 py-2"></textarea>
                </div>
                {index > 0 && (
                  <div className="mb-4">
                    <button
                      type="button"
                      onClick={() => handleRemoveFAQ(index)}
                      className="bg-red-500 text-white px-4 py-2 rounded">
                      Remove
                    </button>
                  </div>
                )}
              </div>
            ))}
            <div className="col-span-2">
              <button
                type="button"
                onClick={handleAddFAQ}
                className="bg-green-500 text-white px-4 py-2 rounded">
                Add More FAQ
              </button>
            </div>
          </div>
          <div className="col-span-2">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded">
              Add Product
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddProduct;
