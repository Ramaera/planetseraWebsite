"use client";
import NavItem from "@/components/Navigation/NavItem";
import NavigationMobile from "@/components/Navigation/NavigationMobile";
import RegisterUser from "@/app/register/components/RegisterUser";

const Register = () => {
  return (
    <div>
      <NavItem page={"orders"} />
      <NavigationMobile page={"orders"} />
      <RegisterUser />
    </div>
  );
};

export default Register;
