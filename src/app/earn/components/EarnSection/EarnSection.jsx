import React, { useState } from "react";
import Link from "next/link";
import { useSelector } from "react-redux";
import Confetti from "react-confetti";
import useWindowSize from "react-use/lib/useWindowSize";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "@/components/Login";
import BuynowBtn from "@/components/BuynowBtn";
import { CREATE_REWARD } from "@/apollo/queries";
import { useMutation } from "@apollo/client";

const EarnSection = () => {
  const user = useSelector((state) => state?.user);
  const colorMe = useSelector((state) => state.colorUs.color);
  const [createPlanetseraReward] = useMutation(CREATE_REWARD);
  const EarnReward = "/images/backgrounds/EarnReward.gif";
  const { width, height } = useWindowSize();
  const [confetti, setConfetti] = useState(false);
  const [rewardCodeForm, setRewardCodeForm] = useState(false);
  const [code, setCode] = useState("");

  const [loginModal, setLoginModal] = useState(false);
  const openLoginModal = () => {
    setLoginModal(true);
  };
  const closeLoginModal = () => {
    setLoginModal(false);
  };

  const rewardHandler = (e) => {
    e.preventDefault();
    setRewardCodeForm(true);
  };

  const clearForm = () => {
    setConfetti(true);
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
      setCode("");
    }, "1500");
    setTimeout(() => {
      setRewardCodeForm(false);
      setConfetti(false);
    }, "3400");
  };
  console.log("user", user);
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const resp = await createPlanetseraReward({
        variables: {
          rewardCode: code,
          userId: user?.data?.id,
        },
      });

      clearForm();
      // router.refresh();
    } catch (err) {
      console.log("err", err.message);
    }
  };

  return (
    <>
      <ToastContainer />
      {confetti && (
        <Confetti numberOfPieces={600} width={width} height={height} />
      )}
      {rewardCodeForm && (
        <div className=" absolute h-full w-full z-10 m-auto justify-center items-center flex md:scale-100 scale-90">
          <div className="z-40 absolute  bg-red-500 rounded-3xl w-full md:w-2/3  flex justify-center items-center md:flex-row flex-col md:h-1/2 sm:min-h-[550px] ">
            <h2 className="text-center  text-4xl text-white md:leading-[60px]	md:mx-auto  my-16">
              Enter Your Reward Code
              <br />
              To Claim Your Gift
              <br />
              <span style={{ lineHeight: "2px" }} className="text-sm">
                we'll contact you with more details
              </span>
            </h2>

            <form
              onSubmit={(e) => submitHandler(e)}
              className="ml-auto  bg-white h-full md:w-1/3 w-full rounded-3xl p-4 flex justify-center items-center  flex-col rounded-t-sm md:rounded-t-3xl border-red-500 border-2 	">
              <label htmlFor="reward" className="text-xl my-2 text-left">
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
                className="mt-4 p-4 rounded-lg">
                Submit
              </button>

              <button
                onClick={() => setRewardCodeForm(false)}
                style={{
                  width: "100%",
                  background: "grey",
                  color: "white",
                }}
                className="mt-4 p-4 rounded-lg">
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}

      <div className="bg-white w-full flex h-[100vh] items-center	flex-col md:flex-row justify-items-center	 justify-evenly p-12">
        <div className="flex flex-col items-center">
          <div className="text-4xl md:text-6xl font-Montserrat tracking-[5px] text-center">
            <h1>Earn And Get Reward</h1>
          </div>
          <div className="w-[300px]">
            {/* <video>
              <source src="/images/backgrounds/EarnReward.webm" />
            </video> */}
            <img alt="masala" src={EarnReward} />
          </div>
          <div className="m-8">
            {user.data ? (
              <div>
                <div className="w-[100%] flex justify-center text-2xl rounded-full bg-slate-200 hover:bg-slate-500 hover:text-white cursor-pointer p-4">
                  <button onClick={rewardHandler}> Get Reward</button>
                </div>
              </div>
            ) : (
              <BuynowBtn link="#" onClick={openLoginModal} text={"Login"} />
              // <div
              //   onClick={openLoginModal}
              //   className="w-[100%] flex justify-center text-2xl rounded-full
              //   bg-slate-200 hover:bg-slate-500 hover:text-white cursor-pointer
              //   p-4">
              //   Login
              // </div>
            )}
          </div>
        </div>
      </div>
      <Login isOpen={loginModal} closeLoginModal={closeLoginModal} />
    </>
  );
};

export default EarnSection;
