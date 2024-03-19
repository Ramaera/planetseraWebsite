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

const ReceivedOrder = () => {
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

  const allOrders = useQuery(GET_ALL_ORDERS);
  // console.log("allOrder", allOrders);

  return (
    <div>
      <div className="navMobile ">
        <NavigationMobile page={"received-order"} />
      </div>

      <NavItem page={"received-order"} />
      <Container maxWidth={false} sx={{ padding: 5 }} className="min-h-screen">
        <Typography variant="h4" sx={{ mt: 7 }}>
          Received Orders
        </Typography>

        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell className="font-semibold">Name </TableCell>
                <TableCell className="font-semibold">Address</TableCell>
                <TableCell className="font-semibold">Order Items</TableCell>
                <TableCell className="font-semibold">Order Date</TableCell>
                <TableCell className="font-semibold">Order Amount</TableCell>
                <TableCell className="font-semibold">
                  Payment Transaction Id
                </TableCell>
                <TableCell className="font-semibold">Payment Status</TableCell>
                <TableCell className="font-semibold">Order Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {allOrders?.data?.getallOrders?.map((user, index) => (
                <TableRow key={index}>
                  <TableCell>{user?.Buyer?.user?.name}</TableCell>

                  <TableCell>
                    <div>{user?.address?.name}</div>
                    <div className="flex">
                      {user.address.address[2].address}{" "}
                      {user.address.address[0].city}{" "}
                      {user.address.address[1].pinCode}
                    </div>
                    <div>+91 {user.address.mobileNumber}</div>
                  </TableCell>
                  <TableCell>
                    {" "}
                    {user?.orderItems?.map((item) => {
                      const particularProduct = allProducts.find(
                        (prod) => prod.id === item.productVariantId
                      );
                      return (
                        <div className="" key={item.id}>
                          <div className="flex">
                            {item?.name} - {particularProduct?.weight}g
                          </div>
                          <div>Qty: {item?.qty} </div>
                        </div>
                      );
                    })}
                  </TableCell>

                  <TableCell>{user?.orderDate.slice(0, 10)}</TableCell>
                  <TableCell> ₹ {user?.orderAmount}</TableCell>
                  <TableCell>{user?.Payment[0]?.paymentId}</TableCell>
                  <TableCell>Success</TableCell>
                  <TableCell>{user?.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </div>
  );
};

export default ReceivedOrder;
