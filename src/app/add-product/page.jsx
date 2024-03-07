"use client";
import React, { useState } from "react";
import NavItem from "@/components/Navigation/NavItem";
import NavigationMobile from "@/components/Navigation/NavigationMobile";
import { CREATE_PRODUCT } from "@/apollo/queries";
import { useMutation } from "@apollo/client";
import handleImageUpload from "@/utils/upload";

const AddProduct = () => {
  const [createProduct] = useMutation(CREATE_PRODUCT);

  const [product, setProduct] = useState({
    name: "red",
    price: "200",
    stock: "3",
    description: "desccrrip",
    usage: "uudaaffa",
    ingredients: "insddss",
    healthBenefits: "heasdladac",
    weight: "100",
    category: [],
    productUrl: "red-ccc",
    productType: "",
    isAvailableOnAmazon: false,
    isAvailableOnFlipkart: false,
    flipkart50gLink: "gfhgjhkjlk",
    flipkart100gLink: "hgjhbkj",
    flipkart500gLink: "hjhbkjnl",
    amazon50gLink: "jhk",
    amazon100gLink: "jh",
    amazon500gLink: "hkj",
    backgroundColor: "hj",
    colored1: "ghjh",
    colored2: "gjhk",
    inactiveBtnColor1: "hbkjn",
    inactiveBtnColor2: "fghgvjhbk",
    faqs: [{ question: "", answer: "" }],
    backgroundImage: "",
    frontImage: "",
    productImage1: "",
    productImage2: "",
    productImage3: "",
  });

  const options = [
    "Coming Soon",
    "Mouth Watering",
    "Kitchen Spices",
    "Weekend Ka Tadka",
    "Upcoming Products",
    "Best Seller",
  ];

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectOption = (option) => {
    if (product.category.includes(option)) {
      setProduct({
        ...product,
        category: product.category.filter((item) => item !== option),
      });
    } else {
      setProduct({
        ...product,
        category: [...product.category, option],
      });
    }
  };

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    if (type === "checkbox" || type === "radio") {
      setProduct({ ...product, [name]: value === "true" });
    } else if (name === "question" || name === "answer") {
      const faqs = [...product.faqs];
      faqs[index][name] = value;
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

  const handleImageChange = async (e, imageType) => {
    const imageFile = e.target.files[0];
    const imgUrl = await handleImageUpload(imageFile);
    setProduct({ ...product, [imageType]: imgUrl });
  };

  const handleCreateProduct = async (e) => {
    e.preventDefault();
    console.log("enter");
    try {
      console.log("second");
      const resp = await createProduct({
        variables: {
          Amazon: product?.isAvailableOnAmazon,
          Flipkart: product?.isAvailableOnFlipkart,
          ProductsVariant: [
            {
              imageUrl: [
                product?.productImage1,
                product?.productImage2,
                product?.productImage3,
              ],
              price: product?.price,
              stock: product?.price,
              weight: product?.weight,
            },
          ],
          category: product?.category,
          description: product?.description,
          metaData: [
            {
              amazon50: product?.amazon50gLink,
              amazon100: product?.amazon100gLink,
              amazon500: product?.amazon500gLink,
              bgColor: product?.backgroundColor,
              colored: product?.colored1,
              colored2: product?.colored2,
              faqs: product?.faqs,
              flipkart50: product?.flipkart50gLink,
              flipkart100: product?.flipkart100gLink,
              flipkart500: product?.flipkart500gLink,
              healthBenefits: product?.healthBenefits,
              inactiveBtn: product?.inactiveBtnColor1,
              inactiveBtn2: product?.inactiveBtnColor2,
              ingredients: product?.ingredients,
              productBg: product?.backgroundImage,
              usage: product?.usage,
            },
          ],
          productImageUrl: product?.frontImage,
          productUrl: product?.productUrl,
          title: product?.name,
          type: product?.type,
        },
      });
      console.log("resp", resp);
    } catch (err) {
      console.log("err", err.message);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("product", product);
  };

  return (
    <>
      <div className="navMobile ">
        <NavigationMobile page={"cart"} />
      </div>
      <NavItem page={"cart"} />

      <div className="px-10 pt-24 max-w-5xl mx-auto">
        <h2 className="text-5xl font-bold mb-4">Add Product</h2>
        <form onSubmit={handleCreateProduct}>
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
              <div className="mb-4 relative">
                <label className="block mb-1">Product Category</label>
                <div className="relative">
                  <div
                    className="w-full border rounded px-4 py-2 cursor-pointer bg-white"
                    onClick={toggleDropdown}>
                    {product.category.length === 0
                      ? "Select Product Category"
                      : product.category.join(", ")}
                  </div>
                  {isOpen && (
                    <div className="absolute bg-white border rounded mt-1 w-full shadow-md">
                      {options.map((option, index) => (
                        <div
                          key={index}
                          className={`px-4 py-2 cursor-pointer ${
                            product.category.includes(option)
                              ? "bg-gray-200"
                              : ""
                          }`}
                          onClick={() => handleSelectOption(option)}>
                          {option}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
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
                  onChange={(e) => handleImageChange(e, "backgroundImage")}
                  className="w-full border rounded px-4 py-2"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-1">Product Front Image</label>
                <input
                  type="file"
                  name="frontImage"
                  onChange={(e) => handleImageChange(e, "frontImage")}
                  className="w-full border rounded px-4 py-2"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-1">Product Image 1</label>
                <input
                  type="file"
                  name="productImage1"
                  onChange={(e) => handleImageChange(e, "productImage1")}
                  className="w-full border rounded px-4 py-2"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-1">Product Image 2</label>
                <input
                  type="file"
                  name="productImage2"
                  onChange={(e) => handleImageChange(e, "productImage2")}
                  className="w-full border rounded px-4 py-2"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-1">Product Image 3</label>
                <input
                  type="file"
                  name="productImage3"
                  onChange={(e) => handleImageChange(e, "productImage3")}
                  className="w-full border rounded px-4 py-2"
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
