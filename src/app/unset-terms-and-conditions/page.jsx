"use client";
import NavItem from "@/components/Navigation/NavItem";
import NavigationMobile from "@/components/Navigation/NavigationMobile";
import TermsConditions from "./components/TermsConditions";

const PrivacyAndPolicy = () => {
  return (
    <>
      <NavItem page={"products"} />
      <NavigationMobile page={"products"} />
      <TermsConditions />
    </>
  );
};

export default PrivacyAndPolicy;
