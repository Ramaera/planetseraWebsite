import React, { useState } from "react";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";
import { CREATE_REWARD } from "@/apollo/queries";
import { useMutation } from "@apollo/client";
import { ToastContainer, toast } from "react-toastify";
import { useSelector } from "react-redux";
import { Link } from "@mui/material";
import "react-toastify/dist/ReactToastify.css";
import Login from "@/components/Login";

const index = () => {
  const [createPlanetseraReward] = useMutation(CREATE_REWARD);
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [code, setCode] = useState("");
  const [password, setPassword] = useState("");
  const [confetti, setConfetti] = useState(false);
  const [loginModal, setLoginModal] = useState(false);

  const openLoginModal = () => {
    setLoginModal(true);
  };

  const closeLoginModal = () => {
    setLoginModal(false);
  };
  const colorMe = useSelector((state) => state.colorUs.color);

  const { width, height } = useWindowSize();
  const rewardHandler = (e) => {
    e.preventDefault();
    setConfetti(true);
  };
  const submitHandler = (e) => {
    e.preventDefault();

    // console.log(userName, email, number, code, password);
    {
      createPlanetseraReward({
        variables: {
          name: userName,
          email: email,
          password: password,
          phone: number,
          rewardCode: code,
        },
      });
    }
    clearForm();
  };
  const clearForm = () => {
    toast.success("Reward Code Recieved", {
      position: "top-center",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    setTimeout(() => {
      setUserName("");
      setEmail("");
      setNumber("");
      setPassword("");
      setCode("");
    }, "1500");
    setTimeout(() => {
      setConfetti(false);
    }, "3400");
  };

  return (
    <>
      <div className=" bg-white flex py-20 itens-center justify-center p-4 flex-col md:flex-row items-center text-center ">
        <ToastContainer />

        {confetti && (
          <Confetti numberOfPieces={600} width={width} height={height} />
        )}
        {confetti && (
          <div className=" absolute h-full w-full z-30 m-auto justify-center items-center flex md:scale-100 scale-90">
            <div className="z-40 absolute  bg-red-500 rounded-3xl w-full md:w-2/3  flex justify-center items-center md:flex-row flex-col md:h-1/2 sm:min-h-[550px] ">
              <h2 className="text-center md:text-5xl text-4xl text-white md:leading-[60px]	md:mx-auto  my-16">
                Thanks for completing
                <br />
                your Registration
                <br />
                <span style={{ lineHeight: "2px" }} className="text-sm">
                  we'll contact you with more details
                </span>
              </h2>

              <form
                onSubmit={(e) => submitHandler(e)}
                className="ml-auto  bg-white h-full md:w-1/3 w-full rounded-3xl p-4 flex justify-center items-center  flex-col rounded-t-sm md:rounded-t-3xl border-red-500 border-2 	"
              >
                <label htmlFor="reward" className="text-xl my-2">
                  Please Enter Reward Code
                </label>
                <input
                  className="h-12  md:h-14 pl-4 w-full md:my-3  my-2 p-2 md:mr-2 FontText border-2 border-slate-600	 rounded-lg"
                  name="reward"
                  type="text"
                  placeholder="Reward Code"
                  value={code}
                  onChange={(e) => {
                    setCode(e.target.value);
                  }}
                  required
                />
                <button
                  type="submit"
                  style={{
                    width: "100%",
                    background: colorMe,
                    color: "white",
                  }}
                  className="mt-4 p-4 rounded-lg"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        )}
        <form
          onSubmit={(e) => rewardHandler(e)}
          className="flex flex-col p-8 m-4 w-full md:w-1/3 bg-gray-200 rounded-2xl"
        >
          {" "}
          <h1
            className={` text-[${colorMe}] text-center text-2xl mb-4  font-medium	`}
          >
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
          <input
            className="h-12 placeholder:text-gray-300 md:h-14 pl-4 w-full md:my-3  my-2 p-2 md:mr-2 FontText rounded-lg"
            type="password"
            value={password}
            placeholder="Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
          />
          <div>
            <button
              // type="submit"
              style={{ background: colorMe, color: "white" }}
              className="mt-4 p-4 h-[56px] border-solid border border-white rounded-3xl	"
            >
              Complete your Registration
            </button>
            <p>
              {" "}
              Already A User?{" "}
              <span
                className="text-orange-600 curosr-pointer"
                onClick={openLoginModal}
              >
                {" "}
                Click Here For Login
              </span>
            </p>
          </div>
        </form>
        <Login isOpen={loginModal} closeLoginModal={closeLoginModal} />
      </div>
    </>
  );
};

export default index;
