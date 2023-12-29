"use client";
import NavItem from "@/components/Navigation/NavItem";
import NavigationMobile from "@/components/Navigation/NavigationMobile";
import ReturnPolicyPage from "./components/index";

const ReturnPolicy = () => {
  return (
    <>
      <NavItem page={"return-policy"} />
      <NavigationMobile page={"return-policy"} />
      <ReturnPolicyPage />
    </>
  );
};

export default ReturnPolicy;
