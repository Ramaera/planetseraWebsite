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
import OrderProceed from "./ OrderProceed/page";

const ReceivedOrder = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [shipmentPickupOpen, setShipmentPickupOpen] = useState(false);

  const [selectedOrder, setSelectedOrder] = useState(null);

  const [status, setStatus] = useState("fghjk");
  const merchantTransactionId = "YOUR_MERCHANT_TRANSACTION_ID";
  const allProductsQuery = useQuery(Get_All_Products);

  const allProducts =
    allProductsQuery.data?.allProducts.flatMap(
      (list) => list?.ProductsVariant
    ) || [];

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const response = await fetch(
          `https://planetseraapi.planetsera.com/api/v1/status/${merchantTransactionId}`
        );
        const data = await response.json();
        setStatus(Success);
      } catch (error) {
        console.error("Error fetching status:", error);
      }
    };

    fetchStatus();
  }, [merchantTransactionId]);
  const user = useSelector((state) => state?.user);

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
          style={{ overflowX: "auto", borderWidth: 3, borderRadius: 10 }}>
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
                <TableCell className="font-semibold">Shipment </TableCell>
                <TableCell className="font-semibold">Shipment Pickup</TableCell>
              </TableRow>
            </TableHead>
            <TableBody className="bg-slate-50">
              {allOrders?.getallOrders?.map((user, index) => (
                <TableRow key={index}>
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

                  {/*
                   
                  <TableCell className="min-w-[180px]">
                    <div>{user?.address?.name}</div>
                    <div className="flex">
                      {user?.address?.address[2].address}{" "}
                      {user?.address?.address[0].city}{" "}
                      {selectedOrder?.address.address[3]?.state}{" "}
                      {user?.address?.address[1].pinCode}
                    </div>
                    <div>+91 {user?.address?.mobileNumber}</div>
                  </TableCell> */}
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
                  <TableCell>
                    <button
                      className={`${
                        user?.shipRocketDetails
                          ?.flatMap((list) => list?.shiprocket_ShipmentId)
                          .filter((shiprocket) => shiprocket)[0]
                          ? "bg-gray-400"
                          : "bg-red-400"
                      }  text-white px-4 py-2 rounded-xl`}
                      disabled={
                        user?.shipRocketDetails
                          ?.flatMap((list) => list?.shiprocket_ShipmentId)
                          .filter((shiprocket) => shiprocket)[0]
                      }
                      onClick={() => handleOrderToProceed(user)}>
                      Create Shipment
                    </button>
                  </TableCell>
                  <TableCell>
                    <button
                      className="bg-red-400  text-white px-4 py-2 rounded-xl"
                      onClick={() => handleShipmentPickup(user)}>
                      Shipment Pickup
                    </button>
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
    </div>
  );
};

export default ReceivedOrder;
