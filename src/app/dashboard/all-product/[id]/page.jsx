"use client";
import React, { useState } from "react";
import NavItem from "@/components/Navigation/NavItem";
import NavigationMobile from "@/components/Navigation/NavigationMobile";
import { UPDATE_PRODUCT_DETAILS } from "@/apollo/queries";
import { useMutation } from "@apollo/client";
import handleImageUpload from "@/utils/upload";
import { Get_All_Products } from "@/apollo/queries";
import { useParams, useRouter } from "next/navigation";
import { useQuery } from "@apollo/client";

const page = () => {
  const route = useRouter();
  const { id } = useParams();
  const { loading, data, error } = useQuery(Get_All_Products);

  const specificProduct = data?.allProducts.find(
    (prod) => prod.productUrl === id
  );

  const [updateProductDetails] = useMutation(UPDATE_PRODUCT_DETAILS);

  const [product, setProduct] = useState({
    name: specificProduct?.title,
    description: specificProduct?.description,
    usage: specificProduct?.metaData[0]?.usage,
    ingredients: specificProduct?.metaData[0]?.ingredients,
    healthBenefits: specificProduct?.metaData[0]?.healthBenefits,
    category: specificProduct?.category,
    productUrl: specificProduct?.productUrl,
    productType: specificProduct?.type,
    isAvailableOnAmazon: specificProduct?.Amazon,
    isAvailableOnFlipkart: specificProduct?.Flipkart,
    flipkart50gLink: specificProduct?.metaData[0]?.flipkart50,
    flipkart100gLink: specificProduct?.metaData[0]?.flipkart100,
    flipkart500gLink: specificProduct?.metaData[0]?.flipkart500,
    amazon50gLink: specificProduct?.metaData[0]?.amazon50,
    amazon100gLink: specificProduct?.metaData[0]?.amazon100,
    amazon500gLink: specificProduct?.metaData[0]?.amazon500,
    backgroundColor: specificProduct?.metaData[0]?.bgColor,
    colored1: specificProduct?.metaData[0]?.colored,
    colored2: specificProduct?.metaData[0]?.colored2,
    inactiveBtnColor1: specificProduct?.metaData[0]?.inactiveBtn,
    inactiveBtnColor2: specificProduct?.metaData[0]?.inactiveBtn2,
    faqs: specificProduct?.metaData[0]?.faqs || [{ question: "", answer: "" }],
    backgroundImage: specificProduct?.metaData[0]?.productBg,
    frontImage: specificProduct?.productImageUrl,
    isActive: specificProduct?.isActive,
  });

  const options = [
    "Coming Soon",
    "Mouth Watering",
    "Kitchen Spices",
    "Weekand Tadka",
    "Best Selling",
  ];

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectOption = (option) => {
    const filterOption = option.trim();
    const filterOptionWithoutSpaces = filterOption.replace(/\s+/g, "");

    // Check if the option already exists in the category
    const existsIndex = product.category.findIndex((item) => {
      const itemWithoutSpaces = item.trim().replace(/\s+/g, "");
      return (
        itemWithoutSpaces.toLowerCase() ===
          filterOptionWithoutSpaces.toLowerCase() ||
        item.toLowerCase() === filterOption.toLowerCase()
      );
    });

    if (existsIndex !== -1) {
      // If it exists, remove it
      const updatedCategory = [...product.category];
      updatedCategory.splice(existsIndex, 1);
      setProduct({
        ...product,
        category: updatedCategory,
      });
    } else {
      // Add it only if it's not in specificProduct?.category
      const updatedCategory = [...product.category, filterOptionWithoutSpaces];
      setProduct({
        ...product,
        category: updatedCategory,
      });
    }
  };

  const handleChange = (e, index) => {
    const { name, value, type } = e.target;
    let updatedProduct = { ...product };

    if (type === "checkbox" || type === "radio") {
      updatedProduct[name] = value === "true";
    } else if (name === "question" || name === "answer") {
      const faqs = [...updatedProduct.faqs];
      faqs[index] = { ...faqs[index], [name]: value };
      updatedProduct.faqs = faqs;
    } else {
      // Apply the condition for "isVariantActive" name
      updatedProduct[name] = name === "isActive" ? value === "true" : value;

      if (name === "name") {
        updatedProduct.productUrl = value.toLowerCase().replace(/\s+/g, "-");
      }
    }

    setProduct(updatedProduct);
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

    let imageName;
    if (imageType === "backgroundImage") {
      imageName = `allProduct/${product.name.replace(
        /\s+/g,
        ""
      )}Bg.${imageFile.name.split(".").pop()}`;
    } else {
      imageName = `allProduct/${product.name.replace(
        /\s+/g,
        ""
      )}.${imageFile.name.split(".").pop()}`;
    }

    setProduct({ ...product, [imageType]: imageName });
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  const handleUpdateProductDetails = async (e) => {
    e.preventDefault();
    try {
      const resp = await updateProductDetails({
        variables: {
          id: specificProduct?.id,
          Amazon: product?.isAvailableOnAmazon,
          Flipkart: product?.isAvailableOnFlipkart,
          category: product?.category,
          description: product?.description,
          productImageUrl: product?.frontImage,
          productUrl: product?.productUrl,
          title: product?.name,
          type: product?.productType,
          isActive: product?.isActive,
          metaData: {
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
        },
      });
      if (resp.data) {
        route.push("/dashboard/all-product");
      }
      // console.log("resp", resp);
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
        <div className="flex justify-between">
          <h2 className="text-4xl font-bold mb-4">Update Product</h2>
          <div className="mb-2">
            <label className="block mb-1 font-semibold">Activate Product</label>
            <select
              name="isActive"
              value={product.isActive}
              onChange={handleChange}
              className="w-full border rounded px-4 py-2">
              <option value="true">Active</option>
              <option value="false">Inactive</option>
            </select>
          </div>
        </div>
        <form onSubmit={handleUpdateProductDetails}>
          <div className="bg-slate-100 p-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="mb-4">
                <label className="block mb-1">Product Name</label>
                <input
                  type="text"
                  name="name"
                  value={product?.name}
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
                  // onChange={handleChange}
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
                  <option value="grounded">Grounded</option>
                </select>
              </div>
              <div className="mb-4 relative">
                <label className="block mb-1">Product Category</label>
                <div className="relative">
                  <div
                    className="w-full border rounded px-4 py-2 cursor-pointer bg-white"
                    onClick={toggleDropdown}>
                    {product?.category?.length === 0 ? (
                      "Select Product Category"
                    ) : (
                      <>
                        {product?.category?.map((cat) => (
                          <div key={cat}>
                            {cat.replace(/([A-Z])/g, " $1").trim()}
                          </div>
                        ))}
                      </>
                    )}
                  </div>

                  {isOpen && (
                    <div className="absolute bg-white border rounded mt-1 w-full shadow-md">
                      {options.map((option, index) => (
                        <div
                          key={index}
                          className={`px-4 py-2 cursor-pointer ${
                            product?.category
                              ?.map((cat) =>
                                cat.replace(/([A-Z])/g, " $1").trim()
                              )
                              ?.includes(option)
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
              <div className="mb-4">
                <label className="block mb-1">Product Background Image</label>
                <input
                  type="file"
                  accept="image/*"
                  name="backgroundImage"
                  onChange={(e) => handleImageChange(e, "backgroundImage")}
                  className="w-full border rounded px-4 py-2"
                />
                {product.backgroundImage && (
                  <img
                    src={`https://planetseraapi.planetsera.com/get-images/${product?.backgroundImage}`}
                    alt="Product Image Preview"
                    className=" w-20 2xl:w-24 mt-2"
                  />
                )}
              </div>
              <div className="mb-4">
                <label className="block mb-1">Product Front Image</label>
                <input
                  type="file"
                  name="frontImage"
                  onChange={(e) => handleImageChange(e, "frontImage")}
                  className="w-full border rounded px-4 py-2"
                />
                {product.frontImage && (
                  <img
                    src={`https://planetseraapi.planetsera.com/get-images/${product?.frontImage}`}
                    alt="Product Image Preview"
                    className=" w-20 2xl:w-24 mt-2"
                  />
                )}
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
            {product?.faqs.map((faq, index) => (
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
                    className="w-full border rounded px-4 py-2"
                  />
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
          <div className="col-span-2 my-3">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded">
              Update Product Detail
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default page;
