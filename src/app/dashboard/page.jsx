"use client";
import React from "react";
import DashboardMain from "./dashboardMain/dashboardMain";
import { useQuery } from "@apollo/client";
import { GetUser } from "@/apollo/queries";
import { useRouter } from "next/navigation";

const Dashboard = () => {
  const router = useRouter();
  const user = useQuery(GetUser);
  const Role = user?.data?.me?.role;

  if (Role !== "ADMIN") {
    router.push("/");
  }

  return (
    <>
      <DashboardMain />
    </>
  );
};

export default Dashboard;
