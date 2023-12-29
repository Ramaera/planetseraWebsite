"use client";
import NavItem from "@/components/Navigation/NavItem";
import NavigationMobile from "@/components/Navigation/NavigationMobile";
import Privacy from "./components/Privacy";
const PrivacyPolicy = () => {
  return (
    <>
      <NavItem page={"privacy-policy"} />
      <NavigationMobile page={"privacy-policy"} />
      <Privacy />
    </>
  );
};

export default PrivacyPolicy;
