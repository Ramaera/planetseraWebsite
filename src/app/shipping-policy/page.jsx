"use client";
import NavItem from "@/components/Navigation/NavItem";
import NavigationMobile from "@/components/Navigation/NavigationMobile";
import ShippingPolicyPage from "../shipping-policy/component/index";

const ShippingPolicy = () => {
  return (
    <>
      <NavItem page={"return-policy"} />
      <NavigationMobile page={"return-policy"} />
      <ShippingPolicyPage />
    </>
  );
};

export default ShippingPolicy;
