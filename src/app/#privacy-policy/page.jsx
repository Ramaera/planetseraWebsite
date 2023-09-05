"use client";
import NavItem from "@/components/Navigation/NavItem";
import NavigationMobile from "@/components/Navigation/NavigationMobile";
import Privacy from "./components/Privacy";
const PrivacyPolicy = () => {
  return (
    <>
      <NavItem page={"products"} />
      <NavigationMobile page={"products"} />
      <Privacy />
    </>
  );
};

export default PrivacyPolicy;
