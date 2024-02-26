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

const ReceivedOrder = () => {
  const [status, setStatus] = useState("fghjk");
  const merchantTransactionId = "YOUR_MERCHANT_TRANSACTION_ID";

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const response = await fetch(
          `https://planetseraapi.planetsera.com/api/v1/status/${merchantTransactionId}`
        );
        const data = await response.json();
        setStatus(data.status);
      } catch (error) {
        console.error("Error fetching status:", error);
      }
    };

    fetchStatus();
  }, [merchantTransactionId]);
  const user = useSelector((state) => state?.user);

  const allOrders = useQuery(GET_ALL_ORDERS);

  //   console.log("allOrders", allOrders.data.allOrders);
  return (
    <div>
      <Container maxWidth={false} sx={{ mt: 2 }}>
        <Typography variant="h4" sx={{ my: 2 }}>
          Received Orders
        </Typography>

        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name </TableCell>
                <TableCell>Address</TableCell>
                <TableCell>Order Items</TableCell>
                <TableCell>Order Date</TableCell>
                <TableCell>Payment Transaction Id</TableCell>
                <TableCell>Payment Status</TableCell>
                <TableCell>Order Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {allOrders?.data?.getallOrders?.map((user, index) => (
                <TableRow key={index}>
                  <TableCell>{user?.Buyer?.user?.name}</TableCell>

                  {console.log("addddddd", user.address.mobileNumber)}
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
                    {user?.orderItems?.map((item) => (
                      <div className="flex" key={item.id}>
                        <div className="flex">
                          {item?.name} - Qty: {item?.qty}
                        </div>
                      </div>
                    ))}
                  </TableCell>

                  <TableCell>{user?.orderDate.slice(0, 10)}</TableCell>
                  <TableCell>{user?.Payment[0]?.paymentId}</TableCell>
                  <TableCell>{status}</TableCell>
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
