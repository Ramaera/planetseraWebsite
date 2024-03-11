"use client";
import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Container, Hidden, Typography } from "@mui/material";
import { useQuery } from "@apollo/client";
import { Get_All_Products } from "@/apollo/queries";
import NavItem from "@/components/Navigation/NavItem";
import NavigationMobile from "@/components/Navigation/NavigationMobile";
import Link from "next/link";

const page = ({}) => {
  const allProducts = useQuery(Get_All_Products);
  console.log("allProducts", allProducts);
  return (
    <div>
      <div className="navMobile ">
        <NavigationMobile page={"received-order"} />
      </div>

      <NavItem page={"received-order"} />
      <Container maxWidth={false} sx={{ padding: 5 }} className="min-h-screen">
        <Typography variant="h4" sx={{ mt: 7 }}>
          All Product
        </Typography>

        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell className="font-semibold">Name </TableCell>
                <TableCell className="font-semibold">Image</TableCell>
                <TableCell className="font-semibold">Type</TableCell>
                {/* <TableCell className="font-semibold">Category</TableCell> */}
                <TableCell className="font-semibold">
                  Product Variants
                </TableCell>
                <TableCell className="font-semibold">Product Details</TableCell>
                <TableCell className="font-semibold">Add Variant </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {allProducts?.data?.allProducts?.map((item, index) => (
                <TableRow key={index}>
                  <TableCell>{item?.title}</TableCell>
                  <TableCell>
                    <img
                      loading="lazy"
                      src={`https://planetseraapi.planetsera.com/get-images/${item.productImageUrl}`}
                      alt="Planetsera Spices"
                      title={item?.title}
                      className="sm:w-24 2xl:w-24"
                    />
                  </TableCell>
                  <TableCell>{item.type}</TableCell>
                  {/* <TableCell>{item.category}</TableCell> */}
                  <TableCell>
                    {item?.ProductsVariant?.map((list) => (
                      <div className="flex gap-1 my-1 items-center justify-between">
                        <p>Weight: {list.weight}g</p>
                        <p>Price: {list.price}</p>
                        <p>Stock: {list.stock}</p>
                        <Link
                          href={{
                            pathname: `/all-product/variants/${list.id}`,
                            query: {
                              title: item?.title,
                              id: list?.id,
                              price: list?.price,
                              weight: list?.weight,
                              stock: list?.stock,
                              imageUrl: list?.imageUrl,
                            },
                          }}>
                          {/* <Link
                          href={`/all-product/variants/${list.id}/${list.weight}/${list?.price}/${list.stock}`}> */}
                          <button className="bg-blue-500 text-white px-4 py-2 rounded">
                            Edit Variant Details
                          </button>
                        </Link>
                      </div>
                    ))}
                  </TableCell>
                  <TableCell>
                    <Link href={`/all-product/${item.productUrl}`}>
                      <button className="bg-blue-500 text-white px-4 py-2 rounded">
                        Edit / View Product Details
                      </button>
                    </Link>
                  </TableCell>
                  <TableCell>
                    <Link href={`/all-product/addVariant/${item.productUrl}`}>
                      <button className="bg-blue-500 text-white px-4 py-2 rounded">
                        Add Variant
                      </button>
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </div>
  );
};

export default page;
