"use client";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const page = () => {
  const route = useRouter();
  useEffect(() => {
    route.push("/blog");
  }, []);
  return <></>;
};

export default page;
