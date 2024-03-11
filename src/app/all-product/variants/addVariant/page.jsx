"use client";
import React, { useState } from "react";
import { Get_All_Products } from "@/apollo/queries";
import { useMutation, useQuery } from "@apollo/client";
import { useParams } from "next/navigation";
import { CREATE_PRODUCT_VARIANTS } from "@/apollo/queries";

const AddVariant = () => {
  const { id } = useParams();
  const { loading, data, error } = useQuery(Get_All_Products);

  const specificProduct = data?.allProducts.find(
    (prod) => prod.productUrl === id
  );

  if (loading) {
    return <p>Loading...</p>;
  }
  const [createProductVariants] = useMutation(CREATE_PRODUCT_VARIANTS);

  const [newImageFiles, setNewImageFiles] = useState([]);
  const [productVariants, setProductVariants] = useState([]);
  const [product, setProduct] = useState({
    name: specificProduct?.title,
    price: "",
    stock: "",
    imageUrl: [],
    weight: "",
  });

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const updatedProduct = { ...product }; // Updated
    updatedProduct[name] = value; // Updated
    setProduct(updatedProduct); // Updated
  };

  const handleNewImageChange = async (e, index) => {
    const imageFile = e.target.files[0];
    // Handle image upload logic here
  };

  console.log("pecificProduct?.id", specificProduct?.id);
  const handleCreateProductVariant = async (e) => {
    e.preventDefault();
    console.log("product", product);
    try {
      const resp = await createProductVariants({
        variables: {
          productId: specificProduct?.id,
          imageUrl: [],
          price: parseFloat(product?.price),
          stock: parseInt(product?.stock),
          weight: product?.weight,
        },
      });
      console.log("resp", resp);
    } catch (err) {
      console.log("err", err.message);
    }
  };

  return (
    <>
      <div className="px-10 pt-24 max-w-5xl mx-auto w-full">
        <div className="bg-slate-100 p-4 mt-5 ">
          <div className="grid grid-cols-2 gap-4">
            <div className="mb-4">
              <label className="block mb-1">Product Name</label>
              <input
                type="text"
                name="name"
                value={product.name}
                onChange={(e) => handleChange(e)}
                className="w-full border rounded px-4 py-2"
              />
            </div>

            <div className="mb-4">
              <label className="block mb-1">Product Stock</label>
              <input
                type="text"
                name="stock"
                value={product.stock}
                onChange={(e) => handleChange(e)}
                className="w-full border rounded px-4 py-2"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1">Product Weight</label>
              <input
                type="text"
                name="weight"
                value={product.weight}
                onChange={(e) => handleChange(e)}
                className="w-full border rounded px-4 py-2"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1">Product Price</label>
              <input
                type="text"
                name="price"
                value={product.price}
                onChange={(e) => handleChange(e)}
                className="w-full border rounded px-4 py-2"
              />
            </div>
          </div>
          <div className="col-span-2">
            <button
              type="submit"
              onClick={handleCreateProductVariant}
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Update Product Variant
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddVariant;
