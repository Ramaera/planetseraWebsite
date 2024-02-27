import React, { useState } from "react";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";
import { SIGNUP } from "@/apollo/queries";
import { useMutation } from "@apollo/client";
import toast, { Toaster } from "react-hot-toast";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "@mui/material";
import "react-toastify/dist/ReactToastify.css";
import Login from "@/components/Login";
import { useRouter } from "next/navigation";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { setOrUpdateUser } from "@/state/slice/userSlice";

const index = () => {
  const router = useRouter();
  const colorMe = useSelector((state) => state.colorUs.color);
  const dispatch = useDispatch();

  const [createSignup] = useMutation(SIGNUP);
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [loginModal, setLoginModal] = useState(false);

  const openLoginModal = () => {
    setLoginModal(true);
  };

  const closeLoginModal = () => {
    setLoginModal(false);
  };

  const validateForm = () => {
    if (!userName) {
      toast.error("Enter Name!");
      return;
    }

    if (!number || number.length !== 10) {
      toast.error("Enter Valid Mobile Number!");
      return;
    }

    if (!email) {
      toast.error("Email is not valid!");
      return;
    }

    if (!password || password.length < 8) {
      toast.error("Password contains at least 8 characters!");
      return;
    }
    return true;
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const isValid = validateForm();
    if (isValid) {
      try {
        const resp = await createSignup({
          variables: {
            name: userName,
            email: email,
            mobileNumber: number,
            password: password,
          },
        });

        const data = resp?.data?.signup;

        for (let key of Object.keys(data)) {
          localStorage.setItem(key, data[key]);
        }
        dispatch(setOrUpdateUser(data?.user));

        if (data) {
          router.replace("/");
        }
      } catch (err) {
        console.log("err", err.message);
      }
    }
  };

  return (
    <>
      <div className=" bg-white flex py-20 itens-center justify-center p-4 flex-col md:flex-row items-center text-center ">
        <form
          onSubmit={(e) => submitHandler(e)}
          className="flex flex-col p-8 m-4 w-full md:w-1/3 bg-gray-200 rounded-2xl">
          {" "}
          <h1
            className={` text-[${colorMe}] text-center text-2xl mb-4  font-medium	`}>
            Register Here
          </h1>
          <input
            className="h-12  md:h-14 pl-4 w-full  md:my-3  my-2 p-2 md:mr-2 FontText rounded-lg"
            type="text"
            placeholder="Name"
            value={userName}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
            required
          />
          <input
            className="h-12  md:h-14 pl-4 w-full  md:my-3  my-2 p-2 md:mr-2 FontText rounded-lg"
            type="number"
            value={number}
            placeholder="Mobile Number"
            onChange={(e) => {
              setNumber(e.target.value);
            }}
            required
          />
          <input
            className="h-12  md:h-14 pl-4 w-full  md:my-3  my-2 p-2 md:mr-2 FontText rounded-lg"
            type="email"
            value={email}
            placeholder="Email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
          />
          <div className="relative">
            <input
              className="h-12 placeholder:text-gray-300 md:h-14 pl-4 w-full md:my-3  my-2 p-2 md:mr-2 FontText rounded-lg"
              type={showPassword ? "text" : "password"}
              value={password}
              placeholder="Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              required
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 pr-3 flex items-center focus:outline-none"
              onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <Visibility /> : <VisibilityOff />}
            </button>
          </div>
          <div>
            <button
              // type="submit"
              style={{ background: colorMe, color: "white" }}
              className="mt-4 p-4 h-[56px] border-solid border border-white rounded-3xl	">
              Complete your Registration
            </button>
            <p className="mt-2">
              Already A User ?{" "}
              <span
                className="text-orange-600 curosr-pointer"
                onClick={openLoginModal}>
                {" "}
                Click Here For Login
              </span>
            </p>
          </div>
        </form>
        <Toaster />
        <Login isOpen={loginModal} closeLoginModal={closeLoginModal} />
      </div>
    </>
  );
};

export default index;
