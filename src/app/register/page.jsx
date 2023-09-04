"use client";
import NavItem from "@/components/Navigation/NavItem";
import NavigationMobile from "@/components/Navigation/NavigationMobile";
import Footer from "@/components/Footer/Footer";
import RegisterUser from "./components/RegisterUser";

const Register = () => {
  return (
    <div>
      <NavItem />
      <NavigationMobile />
      <RegisterUser />
    </div>
  );
};

export default Register;
