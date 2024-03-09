"use client";
import React, { useState } from "react";
import NavItem from "@/components/Navigation/NavItem";
import NavigationMobile from "@/components/Navigation/NavigationMobile";
import { Get_All_Products } from "@/apollo/queries";
import { useMutation, useQuery } from "@apollo/client";
import { useParams } from "next/navigation";
import { UPDATE_PRODUCT_VARIANTS } from "@/apollo/queries";
import AddVariant from "../addVariant/page";
import Link from "next/link";

const Page = () => {
  const { id } = useParams();
  const { loading, data, error } = useQuery(Get_All_Products);
  const updateProductVariants = useMutation(UPDATE_PRODUCT_VARIANTS);

  const [newImageFiles, setNewImageFiles] = useState([]);

  const [productVariants, setProductVariants] = useState([]);

  const [variantComponent, setVariantComponent] = useState(false);

  const specificProduct = data?.allProducts.find(
    (prod) => prod.productUrl === id
  );

  console.log("specificProduct", specificProduct);

  if (loading) {
    return <p>Loading...</p>;
  }

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const updatedVariants = [...productVariants];
    updatedVariants[index][name] = value;
    setProductVariants(updatedVariants);
  };

  const handleNewImageChange = async (e, index) => {
    const imageFile = e.target.files[0];
    const imgUrl = await handleImageUpload(imageFile);
    const updatedNewImageFiles = [...newImageFiles];
    updatedNewImageFiles[index] = imgUrl;
    setNewImageFiles(updatedNewImageFiles);
  };

  const handleSubmit = async (e, id) => {
    e.preventDefault();
    console.log("productVariants", productVariants);

    // Assuming you have a function called updateProductVariants to update the product variants in the database
    const updateProductVariants = await updateProductVariants(
      productVariants,
      newImageFiles
    );
    setProductVariants(updatedVariants);
  };

  return (
    <>
      <div className="navMobile ">
        <NavigationMobile page={"cart"} />
      </div>
      <NavItem page={"cart"} />

      <div className="px-10 pt-24 max-w-5xl mx-auto">
        <div className="flex justify-between">
          <h2 className="text-4xl font-bold mb-4">All Variants</h2>
          <div>
            <button
              onClick={() => setVariantComponent(!variantComponent)}
              className="text-3xl font-bold mb-4 bg-red-300"
            >
              {variantComponent ? "Hide Variant" : "Add Variant"}
            </button>
          </div>
        </div>
        {variantComponent ? (
          <AddVariant />
        ) : (
          specificProduct?.ProductsVariant.map((variant, index) => (
            <div className="bg-slate-100 p-4 mt-5 " key={index}>
              <div className="grid grid-cols-2 gap-4">
                <div className="mb-4">
                  <label className="block mb-1">Product Name</label>
                  <input
                    type="text"
                    name="name"
                    value={specificProduct?.title}
                    onChange={(e) => handleChange(e, index)}
                    className="w-full border rounded px-4 py-2"
                  />
                </div>

                <div className="mb-4">
                  <label className="block mb-1">Product Stock</label>
                  <input
                    type="text"
                    name="productUrl"
                    value={variant?.stock}
                    onChange={handleChange}
                    className="w-full border rounded px-4 py-2"
                  />
                </div>
                <div className="mb-4">
                  <label className="block mb-1">Product Weight</label>
                  <input
                    type="text"
                    name="name"
                    value={variant?.weight}
                    onChange={handleChange}
                    className="w-full border rounded px-4 py-2"
                  />
                </div>
                <div className="mb-4">
                  <label className="block mb-1">Product Price</label>
                  <input
                    type="text"
                    name="productUrl"
                    value={variant?.price}
                    onChange={handleChange}
                    className="w-full border rounded px-4 py-2"
                  />
                </div>
              </div>
              <div className="flex">
                {variant?.imageUrl &&
                  variant.imageUrl.map((imageUrl, index) => (
                    <div key={index} className="w-full">
                      <img
                        src={`https://planetseraapi.planetsera.com/get-images/${imageUrl}`}
                        alt={`Product Image ${index}`}
                      />
                      <input
                        type="file"
                        name="imageUrl"
                        onChange={(e) => handleNewImageChange(e, index)}
                        className="w-full border rounded px-4 py-2"
                      />
                    </div>
                  ))}
              </div>
              <div className="col-span-2">
                <button
                  type="submit"
                  onClick={handleSubmit(variant?.id)}
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                  Update Product Variant
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default Page;
