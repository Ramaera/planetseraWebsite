"use client";
import React from "react";
import { Typography } from "@material-ui/core";
import NavItem from "@/components/Navigation/NavItem";
import NavigationMobile from "@/components/Navigation/NavigationMobile";
import { useParams } from "next/navigation";
import { useQuery } from "@apollo/client";
import { ALL_ORDERS, Get_All_Products } from "@/apollo/queries";
import { useSelector, useDispatch } from "react-redux";

const OrderDetails = () => {
  const user = useSelector((state) => state?.user);
  const allProductsQuery = useQuery(Get_All_Products);
  const allOrders = useQuery(ALL_ORDERS, {
    variables: {
      buyerId: user?.data?.buyer?.id,
    },
  });

  const { id } = useParams();
  const specificOrder = allOrders?.data?.allOrders.find(
    (list) => list.id === id
  );
  if (!specificOrder) return;

  console.log("specificOrder", specificOrder);

  const allProducts =
    allProductsQuery.data?.allProducts.flatMap(
      (list) => list?.ProductsVariant
    ) || [];

  return (
    <>
      <NavItem page={"orders"} className="pb-40" />
      <NavigationMobile page={"orders"} />
      <div className="min-h-screen w-full p-6 ">
        <div className=" max-w-6xl mx-auto  mt-20  ">
          <h1 className="text-3xl font-bold mb-8"> Order Detail</h1>
          <div className="grid grid-cols-4 gap-4">
            <div className="col-span-3">
              <div className="bg-gray-100 rounded-lg p-4">
                <Typography className="bg-slate-400 text-center rounded-lg font-semibold p-2">
                  Order Product
                </Typography>
                {specificOrder?.orderItems?.map((item) => {
                  const product = allProducts.find(
                    (prod) => prod.id === item?.productVariantId
                  );
                  console.log("product", product);
                  return (
                    <div className="">
                      <div className="flex items-center justify-between mt-4">
                        <img
                          src={`https://planetseraapi.planetsera.com/get-images/${product?.imageUrl[0]}`}
                          alt="PlanetsEra Spices"
                          className="w-16 mr-4"
                        />
                        <div className="text-gray-900 sm:w-40">
                          <b className="mr-3">{item?.name} </b>{" "}
                        </div>
                        <div>{product?.weight}g</div>
                        <span>
                          {specificOrder?.orderItems[0]?.qty} X ₹{" "}
                          {product?.price}=
                          <b>
                            ₹
                            {specificOrder?.orderItems[0]?.qty * product?.price}
                          </b>
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="bg-gray-100 rounded-lg p-4 mt-4">
                <Typography className="bg-slate-400 text-center rounded-lg font-semibold p-2">
                  Shipping Details
                </Typography>
                <div className="">
                  <div className="flex items-center">
                    <p className="text-gray-900 mr-1">Name:</p>
                    <span>{specificOrder?.address?.name}</span>
                  </div>
                  <div className="flex items-center">
                    <p className="text-gray-900 mr-1">Phone:</p>
                    <span>{specificOrder?.address?.mobileNumber} </span>
                  </div>
                  <div className="flex items-center">
                    <p className="text-gray-900 mr-1">Address:</p>
                    {specificOrder?.address?.address?.map((location) => (
                      <>
                        <span>{location?.address}</span>
                        <span className="px-1">{location?.city}</span>
                        <span>{location?.pinCode}</span>
                      </>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="bg-gray-100 rounded-lg p-4">
                <Typography className="bg-slate-400 text-center rounded-lg font-semibold p-2">
                  Payment Summary
                </Typography>
                <div>
                  <div className="flex justify-between mt-4">
                    <p>Subtotal:</p>
                    <span>
                      ₹{" "}
                      {specificOrder?.orderAmount - specificOrder?.ShippingCost}
                    </span>
                  </div>
                  <div className="flex justify-between mt-4">
                    <p>Shipping Charges:</p>
                    <span>₹ 100</span>
                  </div>
                  <div className="flex justify-between mt-4">
                    <p>Others Charge:</p>
                    <span>₹ 0</span>
                  </div>
                </div>

                <div className="flex justify-between mt-4 border-t-2 border-gray-400 pt-4">
                  <p className="font-semibold"> Amount Paid:</p>
                  <span>₹ {specificOrder?.orderAmount}</span>
                </div>
                {/* 
                <button className="bg-gradient-to-r from-red-500 to-slate-500 text-white w-full py-2 rounded-md mt-4">
                  Amount Paid
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderDetails;
