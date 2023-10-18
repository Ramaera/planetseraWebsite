"use client";
import NavItem from "@/components/Navigation/NavItem";
import NavigationMobile from "@/components/Navigation/NavigationMobile";
import EarnSection from "@/app/earn/components/EarnSection/EarnSection";

const Earn = () => {
  return (
    <>
      <NavItem page={"products"} />
      <NavigationMobile page={"products"} />
      <EarnSection />
    </>
  );
};

export default Earn;
