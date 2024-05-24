"use client";
import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Container, Hidden, Typography } from "@mui/material";
import { GET_ALL_ORDERS } from "@/apollo/queries";
import { useQuery } from "@apollo/client";
import { useSelector, useDispatch } from "react-redux";
import NavItem from "@/components/Navigation/NavItem";
import NavigationMobile from "@/components/Navigation/NavigationMobile";
import { Get_All_Products } from "@/apollo/queries";
import OrderProceed from "./OrderProceed/OrderProceed";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import GenerateButton from "./GenerateButton/GenerateButton";

const ReceivedOrder = () => {
  const router = useRouter;
  const [modalOpen, setModalOpen] = useState(false);
  const [shipmentPickupOpen, setShipmentPickupOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);

  const allProductsQuery = useQuery(Get_All_Products);

  const allProducts =
    allProductsQuery.data?.allProducts.flatMap(
      (list) => list?.ProductsVariant
    ) || [];

  const { data: allOrders, refetch: refetchAllOrders } =
    useQuery(GET_ALL_ORDERS);

  const handleOrderToProceed = (order) => {
    setSelectedOrder(order);
    setModalOpen(true);
  };

  const handleShipmentPickup = (order) => {
    setSelectedOrder(order);
    setShipmentPickupOpen(true);
  };

  const getShiprocketShipmentId = (user) => {
    return user?.shipRocketDetails
      ?.flatMap((list) => list?.shiprocket_ShipmentId)
      .filter((shiprocket) => shiprocket)[0];
  };

  const getShiprocketOrderId = (user) => {
    return user?.shipRocketDetails
      ?.flatMap((list) => list?.shiprocket_OrderId)
      .filter((shiprocket) => shiprocket)[0];
  };

  return (
    <div>
      <div className="navMobile ">
        <NavigationMobile page={"cart"} />
      </div>

      <NavItem page={"cart"} />
      <Container maxWidth={false} sx={{ padding: 5 }} className="min-h-screen">
        <Typography variant="h5" sx={{ mt: 7 }}>
          Received Orders
        </Typography>

        <TableContainer
          style={{ overflowX: "auto", borderWidth: 3, borderRadius: 10 }}
        >
          <Table>
            <TableHead className="bg-slate-300">
              <TableRow>
                <TableCell className="font-semibold">Name </TableCell>
                <TableCell className="font-semibold">Address</TableCell>
                <TableCell className="font-semibold min-w-lg">
                  Order Items
                </TableCell>
                <TableCell className="font-semibold">Order Date</TableCell>
                <TableCell className="font-semibold">Order Amount</TableCell>
                <TableCell className="font-semibold">
                  Payment Transaction Id
                </TableCell>
                <TableCell className="font-semibold">Payment Status</TableCell>
                <TableCell className="font-semibold">Order Status</TableCell>
                <TableCell className="font-semibold">
                  Shiprocket Order{" "}
                </TableCell>
                <TableCell className="font-semibold">Shipment Pickup</TableCell>
                <TableCell className="font-semibold">
                  Download/Generate
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody className="bg-slate-50">
              {allOrders?.getallOrders?.map((user, index) => (
                <TableRow key={user?.user?.name}>
                  <TableCell>{user?.user?.name}</TableCell>

                  <TableCell className="min-w-[180px]">
                    <div>{user?.metaData?.map((list) => list?.name)}</div>
                    {user?.metaData?.map((list) =>
                      list?.address?.map((add) => (
                        <div className="flex">
                          {add[2]?.address}, {add[0]?.city}, {add[3]?.state}{" "}
                          {add[1]?.pinCode}
                        </div>
                      ))
                    )}
                    <div>
                      +91 {user?.metaData?.map((list) => list?.mobileNumber)}
                    </div>
                  </TableCell>

                  <TableCell className="min-w-[200px]">
                    {" "}
                    {user?.orderItems?.map((item) => {
                      const particularProduct = allProducts.find(
                        (prod) => prod.id === item.productVariantId
                      );
                      return (
                        <div className="" key={item.id}>
                          <div className="flex ">
                            {item?.name} - {particularProduct?.weight}g
                          </div>
                          <div>Qty: {item?.qty} </div>
                        </div>
                      );
                    })}
                  </TableCell>

                  <TableCell className="min-w-[110px]">
                    {user?.orderDate.slice(0, 10)}
                  </TableCell>
                  <TableCell> ₹ {user?.orderAmount}</TableCell>
                  <TableCell>{user?.Payment[0]?.paymentId}</TableCell>
                  <TableCell>Success</TableCell>
                  <TableCell>{user?.status}</TableCell>
                  <TableCell className="min-w-[150px]">
                    <button
                      className={`${
                        getShiprocketShipmentId(user) ||
                        user?.status != "PROCESSING"
                          ? "bg-gray-400"
                          : "bg-red-400"
                      }  text-white px-4 py-2 rounded-xl`}
                      disabled={
                        getShiprocketShipmentId(user) ||
                        user?.status != "PROCESSING"
                      }
                      onClick={() => handleOrderToProceed(user)}
                    >
                      Create Order To Shiprocket
                    </button>
                  </TableCell>

                  <TableCell>
                    {getShiprocketOrderId(user) && (
                      <button
                        className={`${
                          getShiprocketShipmentId(user) ||
                          user?.status != "PROCESSING"
                            ? "bg-gray-400"
                            : "bg-red-400"
                        }  text-white px-4 py-2 rounded-xl`}
                        onClick={() => handleShipmentPickup(user)}
                        disabled={
                          getShiprocketOrderId(user) ||
                          user?.status != "PROCESSING"
                        }
                      >
                        Shipment Pickup
                      </button>
                    )}
                  </TableCell>

                  <TableCell className="min-w-[200px]">
                    {getShiprocketShipmentId(user) && (
                      <GenerateButton
                        shipmentId={getShiprocketShipmentId(user)}
                        orderIds={getShiprocketOrderId(user)}
                      />
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
      <OrderProceed
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        selectedOrder={selectedOrder}
        allProducts={allProducts}
        openshipmentPickupOpen={shipmentPickupOpen}
        onOpenShipmentpIckup={() => setShipmentPickupOpen(true)}
        onCloseShipmentPickupOpen={() => setShipmentPickupOpen(false)}
        refetchAllOrders={refetchAllOrders}
      />
      <Toaster />
    </div>
  );
};

export default ReceivedOrder;
