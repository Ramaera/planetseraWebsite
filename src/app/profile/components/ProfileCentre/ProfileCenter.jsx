"use client";
import {
  CREATE_CONTACT_RESPONSE,
  UpdateAgencyCode,
} from "../../../../apollo/queries";
import { useMutation } from "@apollo/client";
import "@/public/styles/contactUsCenter.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Button } from "@mui/material";
import axios from "axios";
import { useQuery } from "@apollo/client";
import { VIEW_APPLIED_REWARD_CODE } from "../../../../apollo/queries";

const ProfileCentre = () => {
  const colorMe = useSelector((state) => state.colorUs.color);
  const image = "/images/backgrounds/rectangle.webp";
  const locationimage = "/images/backgrounds/Location.webp";
  const mailimage = "/images/backgrounds/Vector.webp";
  const callimage = "/images/backgrounds/Call.webp";

  const user = useSelector((state) => state?.user);
  console.log("user", user?.data?.id);
  const [updateAgencyCode] = useMutation(UpdateAgencyCode);
  const [formName, setFormName] = useState(user?.data?.name);
  const [formEmail, setFormEmail] = useState(user?.data?.email);
  const [mobileNumber, setMobileNumber] = useState(user?.data?.mobileNumber);
  const [agencyCode, setAgencyCode] = useState(user?.data?.agencyCode);
  const [isTableVisible, setIsTableVisible] = useState(false);
  const viewAllAppliedRewardCode = useQuery(VIEW_APPLIED_REWARD_CODE, {
    variables: {
      userId: user?.data?.id,
    },
  });

  const viewAllAppliedRewardCodeList =
    viewAllAppliedRewardCode?.data?.getRewardCode;

  const handleSubmit = async (e) => {
    e.preventDefault();
    {
      const resp = await updateAgencyCode({
        variables: {
          agencyCode: agencyCode,
        },
      });
      setAgencyCode(resp?.data?.updateUserAgencyCode?.agencyCode);

      toast.success("Agency Code Applied");
    }
  };
  const handleTableClick = () => {
    setIsTableVisible(!isTableVisible);
  };

  // const sendSlackNotification = async (message) => {
  //   console.log("inside", message);
  //   try {
  //     const webhookUrl =
  //       "https://hooks.slack.com/services/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";
  //     await axios.post(webhookUrl, { text: message });
  //     console.log("Slack notification sent successfully.");
  //   } catch (error) {
  //     console.error("Error sending Slack notification:", error);
  //   }
  // };

  const message = `Hello`;
  // await sendSlackNotification(message);

  // useEffect(() => {
  //   sendSlackNotification(message);
  // }, []);
  return (
    <div
      style={{
        backgroundImage: `url(${image})`,
      }}
      className="img_pad bg-cover bg-fixed mt-40 flex flex-col-reverse md:flex-row"
    >
      {/* <Button onClick={() => sendSlackNotification(message)}>Click Here</Button> */}
      <div className="contact_width">
        <div className="contact_height  rounded-xl bg-white p-2 md:p-8 md:m-4 ">
          <div className="md:text-4xl my-1 xl:my-4 HeadText py-2 md:py-0 contact_heading">
            {" "}
            My Profile
          </div>
          <div>
            <input
              className="h-14 pl-4 w-full xl:w-[48%] xl:my-4  my-2 p-2 FontText"
              type="text"
              disabled
              placeholder="Name"
              value={formName}
              onChange={(e) => {
                setFormName(e.target.value);
              }}
              required
            />
            <input
              className="h-14 pl-4 w-full xl:w-[48%] xl:my-4 xl:mx-2 my-2 p-2 m  FontText"
              type="email"
              disabled
              value={formEmail}
              placeholder="Email"
              onChange={(e) => {
                setFormEmail(e.target.value);
              }}
              required
            />
            <input
              className="h-14 pl-4 w-full xl:w-[48%] xl:my-4 my-2 p-2  FontText"
              type="text"
              disabled
              placeholder="Phone Number"
              value={mobileNumber}
              onChange={(e) => {
                setMobileNumber(e.target.value);
              }}
              required
            />
            <input
              className="h-14 pl-4  w-full xl:w-[48%] xl:my-4 xl:mx-2 my-2 p-2  FontText"
              type="text"
              placeholder="Agency Code"
              value={agencyCode}
              onChange={(e) => {
                setAgencyCode(e.target.value);
              }}
              required
            />
            <div className="flex justify-between">
              <button
                style={{
                  backgroundImage: `linear-gradient(to right, ${colorMe}, ${
                    colorMe + "80"
                  })`,
                  color: "white",
                  textShadow: `0 4px 4px ${colorMe}`,
                  boxShadow: `2px 4px 7px -2px ${colorMe}`,
                }}
                onClick={handleSubmit}
                className=" xl:w-36 w-[25vh] h-12 hover:scale-105 transition-all hover:text-white hover:bg-black bg-white FontText my-8"
              >
                Update Agency Code
              </button>
              <button
                style={{
                  backgroundImage: `linear-gradient(to right, ${colorMe}, ${
                    colorMe + "80"
                  })`,
                  color: "white",
                  textShadow: `0 4px 4px ${colorMe}`,
                  boxShadow: `2px 4px 7px -2px ${colorMe}`,
                }}
                onClick={handleTableClick}
                className=" xl:w-36 w-[25vh] h-12 hover:scale-105 transition-all hover:text-white hover:bg-black bg-white FontText my-8 "
              >
                View Applied Coupon Code
              </button>
            </div>
          </div>

          {isTableVisible && (
            <div className="w-full mt-8 overflow-x-auto">
              <table className="w-full min-w-max border-collapse border border-gray-300">
                <thead className="bg-gray-200">
                  <tr>
                    <th className="border border-gray-300 px-2 py-2 md:px-4 md:py-2">
                      S.no
                    </th>
                    <th className="border border-gray-300 px-2 py-2 md:px-4 md:py-2">
                      Date
                    </th>
                    <th className="border border-gray-300 px-2 py-2 md:px-4 md:py-2">
                      Applied Code
                    </th>
                    <th className="border border-gray-300 px-2 py-2 md:px-4 md:py-2">
                      Discounted Amount
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {viewAllAppliedRewardCodeList?.map((list, index) => (
                    <tr key={index} className="bg-white text-center">
                      <td className="border border-gray-300 px-2 py-2 md:px-4 md:py-2">
                        {index + 1}
                      </td>
                      {/* <td className="border border-gray-300 px-2 py-2 md:px-4 md:py-2">
                        {list?.orderDate
                          ?.slice(0, 10)
                          .split("-")
                          .reverse()
                          .join("-")}
                      </td>
                      <td className="border border-gray-300 px-2 py-2 md:px-4 md:py-2">
                        {list?.metaData?.[3]?.myMartMyCardCoupon}
                      </td> */}
                      <td className="border border-gray-300 px-2 py-2 md:px-4 md:py-2">
                        {list?.rewardCode}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        <div className=" md:hidden mt-8">
          <div className="flex">
            <div className="  md:p-[-3vh] p-3 md:pl-0  hover:scale-105">
              <img className="scale-125" alt="masala" src={locationimage} />
            </div>
            <div className="text-white md:pb-3 md:m-1 p-1 address">
              H-150, Sector-63 Noida, Gautam Budh Nagar, 201301
            </div>
          </div>
          <div className=" flex">
            <div className="md:p-4 p-2 md:pl-0  w-22  hover:scale-105">
              <img src={mailimage} alt="masala" />
            </div>
            <div className="text-white md:p-3 p-1 infoText ">
              Care@ramaera.in
            </div>
          </div>
          <div className=" flex">
            <div className="md:p-3 p-1 md:pl-0 w-22  hover:scale-105">
              <img src={callimage} alt="masala" />
            </div>
            <div className="text-white md:p-4 p-1 infoText">0120-4152818</div>
          </div>
        </div>
      </div>
      {/* <div className=" flex flex-col gap-[0px] md:pl-2">
        <h2
          className="text-white md:font-bold  tracking-widest  md:px-0 pl-2 py-16 mb-0  md:py-10 md:pt-1 md:pb-12 h-2 min-h-0 md:min-h-0 contact_information
"
        >
          Contact Information
        </h2>
        <p className="text-white text-[23px]  tracking-wider md:px-1 px-3 md:py-0 py-5 hy-2 font-extralight  ">
          We believe that communication is key to building strong relationships
          with our customers.
          <br />
          Our team is passionate about spices and we love sharing our knowledge
          with our customers. Contact us if you have any questions about our
          products or if you need help selecting the perfect spice for your
          recipe.
       
        </p>
        <div className="md:flex hidden">
          <div className="  md:p-[-3vh] p-3 md:pl-0  hover:scale-105">
            <img src={locationimage} alt="masala" />
          </div>
          <div className="text-white md:pb-3 md:m-1 p-1 address care_text">
            H-150, Sector-63 Noida, Gautam Budh Nagar, 201301
          </div>
        </div>
        <div className="md:flex hidden">
          <div className="md:p-4 p-2 md:pl-1  w-22  hover:scale-105 ">
            <img alt="masala" src={mailimage} />
          </div>
          <div className="text-white md:p-3 p-1 infoText care_text">
            Care@ramaera.in
          </div>
        </div>
        <div className="md:flex hidden ">
          <div className="md:p-3 p-1 md:pl-0 w-22  hover:scale-105">
            <img alt="masala" src={callimage} />
          </div>
          <div className="text-white md:p-4 p-1 infoText care_text">
            0120-4152818
          </div>
        </div>
        <div className="md:flex hidden md:p-5 md:pl-2  p-4">
          <div className="pr-10  hover:scale-105">
            <a
              href="https://www.instagram.com/planetseraspices/"
              target="_blank"
            >
              <img alt="masala" src="images/backgrounds/Insta.webp" />
            </a>
          </div>
          <div className="pr-10  hover:scale-105">
            <a href="https://www.facebook.com/planetseraspices" target="_blank">
              <img alt="masala" src="images/backgrounds/facebook.webp" />
            </a>
          </div>
          <div className="pr-10  hover:scale-105">
            <a href="https://twitter.com/Planetseraspice" target="_blank">
              <img alt="masala" src="images/backgrounds/twitter.webp" />
            </a>
          </div>
        </div>
      </div> */}
      <ToastContainer />
    </div>
  );
};
export default ProfileCentre;
