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
  const [invoiceUrl, setInvoiceUrl] = useState("");
  const [manifestUrl, setManifestUrl] = useState("");
  const [labelUrl, setLabelUrl] = useState("");
  const [selectedOrder, setSelectedOrder] = useState(null);

  const [status, setStatus] = useState("fghjk");
  const merchantTransactionId = "YOUR_MERCHANT_TRANSACTION_ID";
  const allProductsQuery = useQuery(Get_All_Products);

  const allProducts =
    allProductsQuery.data?.allProducts.flatMap(
      (list) => list?.ProductsVariant
    ) || [];

  // useEffect(() => {
  //   const fetchStatus = async () => {
  //     try {
  //       const response = await fetch(
  //         `https://planetseraapi.planetsera.com/api/v1/status/${merchantTransactionId}`
  //       );
  //       const data = await response.json();
  //       setStatus(Success);
  //     } catch (error) {
  //       console.error("Error fetching status:", error);
  //     }
  //   };

  //   fetchStatus();
  // }, [merchantTransactionId]);
  const user = useSelector((state) => state?.user);

  const { data: allOrders, refetch: refetchAllOrders } =
    useQuery(GET_ALL_ORDERS);

  console.log("allOrders", allOrders);

  const handleOrderToProceed = (order) => {
    setSelectedOrder(order);
    setModalOpen(true);
  };

  const handleShipmentPickup = (order) => {
    setSelectedOrder(order);
    setShipmentPickupOpen(true);
  };

  useEffect(() => {
    handleGenerateManifest(
      getShiprocketShipmentId(user),
      getShiprocketOrderId(user)
    );
    handleGenerateLabel(getShiprocketShipmentId(user));
    handleGenerateInvoice(getShiprocketOrderId(user));
  }, [user]);

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

  const handleGenerateManifest = async (shipmentId, orderIds) => {
    if (shipmentId) {
      console.log("shipmentId----", shipmentId);
      const postData = {
        shipment_id: [shipmentId],
      };
      try {
        await axios
          .post(
            "https://apiv2.shiprocket.in/v1/external/manifests/generate",
            postData,
            {
              headers: {
                Authorization: `Bearer ${process.env.NEXT_PUBLIC_SHIPROCKET_TOKEN}`,
                "Content-Type": "application/json",
              },
            }
          )
          .then(handlePrintManifest(orderIds));
        // if (res?.data) {
        //   await handlePrintManifest(orderIds);
        //   const data = res?.data;
        //   console.log("GenerateManifest", data);
        // }
      } catch (error) {
        console.error("Error GenerateManifest:", error);
        toast.error(error?.message || "An error occurred");
      }
    }
  };

  const handlePrintManifest = async (orderIds) => {
    if (orderIds) {
      console.log("orderIds---", orderIds);
      const postData = {
        order_ids: [orderIds],
      };
      try {
        const res = await axios.post(
          "https://apiv2.shiprocket.in/v1/external/manifests/print",
          postData,
          {
            headers: {
              Authorization: `Bearer ${process.env.NEXT_PUBLIC_SHIPROCKET_TOKEN}`,
              "Content-Type": "application/json",
            },
          }
        );
        if (res?.data) {
          const data = res?.data?.manifest_url;
          setManifestUrl(data);
          console.log("PrintManifest", data);
        }
      } catch (error) {
        console.error("Error PrintManifest:", error);
      }
    }
  };

  const handleGenerateLabel = async (shipmentId) => {
    if (shipmentId) {
      console.log("shipmentId", shipmentId);
      const postData = {
        shipment_id: [shipmentId],
      };
      try {
        const res = await axios.post(
          "https://apiv2.shiprocket.in/v1/external/courier/generate/label",
          postData,
          {
            headers: {
              Authorization: `Bearer ${process.env.NEXT_PUBLIC_SHIPROCKET_TOKEN}`,
              "Content-Type": "application/json",
            },
          }
        );
        if (res?.data) {
          toast.success("Downloaded Label");
          const data = res?.data?.label_url;
          setLabelUrl(data);
          console.log("res?.data", data);
        }
        return "success";
      } catch (error) {
        console.error("Error:", error);
        toast.error(error?.message || "An error occurred");
      }
    }
  };

  const handleGenerateInvoice = async (orderIds) => {
    if (orderIds) {
      console.log("orderIds", orderIds);
      const postData = {
        ids: [orderIds],
      };
      try {
        const res = await axios.post(
          "https://apiv2.shiprocket.in/v1/external/orders/print/invoice",
          postData,
          {
            headers: {
              Authorization: `Bearer ${process.env.NEXT_PUBLIC_SHIPROCKET_TOKEN}`,
              "Content-Type": "application/json",
            },
          }
        );
        if (res?.data) {
          toast.success("Downloaded Invoice");
          const data = res?.data?.invoice_url;
          setInvoiceUrl(data);
          console.log("res?.data", data);
        }
      } catch (error) {
        console.error("Error:", error);
        toast.error(error?.message || "An error occurred");
      }
    }
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
                      onClick={() => handleOrderToProceed(user)}>
                      Create Order To Shiprocket
                    </button>
                  </TableCell>

                  <TableCell>
                    {getShiprocketShipmentId(user) && (
                      <button
                        className="bg-red-400  text-white px-4 py-2 rounded-xl"
                        onClick={() => handleShipmentPickup(user)}>
                        Shipment Pickup
                      </button>
                    )}
                  </TableCell>

                  <TableCell className="min-w-[180px]">
                    {/* <GenerateButton
                      shipmentId={getShiprocketShipmentId(user)}
                      orderIds={getShiprocketOrderId(user)}
                    /> */}
                    {getShiprocketShipmentId(user) && (
                      <>
                        <Link href={manifestUrl}>
                          <button
                            className="bg-red-400  text-white px-4 py-2 rounded-xl"
                            // onClick={() =>
                            //   handleGenerateManifest(
                            //     getShiprocketShipmentId(user),
                            //     getShiprocketOrderId(user)
                            //   )
                            // }
                          >
                            Generate Manifest
                          </button>
                        </Link>
                        <Link href={labelUrl}>
                          <button
                            className="bg-red-400  text-white px-4 py-2 rounded-xl my-1"
                            // onClick={(e) =>
                            //   handleGenerateLabel(getShiprocketShipmentId(user))
                            // }
                          >
                            Generate Label
                          </button>
                        </Link>

                        <Link href={invoiceUrl}>
                          <button
                            className="bg-red-400  text-white px-4 py-2 rounded-xl"
                            // onClick={() =>
                            //   handleGenerateInvoice(getShiprocketOrderId(user))
                            // }
                          >
                            Generate Invoice
                          </button>
                        </Link>
                      </>
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
