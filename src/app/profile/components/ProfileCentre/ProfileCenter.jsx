"use client";
import { UpdateAgencyCode } from "../../../../apollo/queries";
import { useMutation } from "@apollo/client";
import "@/public/styles/contactUsCenter.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useQuery } from "@apollo/client";
import { VIEW_APPLIED_REWARD_CODE } from "../../../../apollo/queries";

const ProfileCentre = () => {
  const colorMe = useSelector((state) => state.colorUs.color);
  const image = "/images/backgrounds/rectangle.webp";

  const user = useSelector((state) => state?.user);
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

  return (
    <div
      style={{
        backgroundImage: `url(${image})`,
      }}
      className="img_pad bg-cover bg-fixed mt-40 flex flex-col-reverse md:flex-row">
      <div className="contact_width">
        <div className="contact_height  rounded-xl bg-white p-4 md:p-8 md:m-4 ">
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
            <div className="flex justify-center">
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
                className=" xl:w-48 w-52 h-12 hover:scale-105 transition-all hover:text-white hover:bg-black bg-white FontText my-8 px-2">
                Update Agency Code
              </button>
            </div>
          </div>

          <button
            onClick={handleTableClick}
            className="bg-slate-300  h-12 hover:scale-105 transition-all hover:text-white hover:bg-black  FontText mt-8 px-4 ">
            View Applied Coupon Code
          </button>

          {isTableVisible && (
            <div className="w-full my-4 overflow-x-auto">
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
                      Reward Code
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {viewAllAppliedRewardCodeList?.map((list, index) => (
                    <tr key={index} className="bg-white text-center">
                      <td className="border border-gray-300 px-2 py-2 md:px-4 md:py-2">
                        {index + 1}
                      </td>
                      <td className="border border-gray-300 px-2 py-2 md:px-4 md:py-2">
                        {new Date(
                          parseInt(list?.createdAt)
                        )?.toLocaleDateString()}
                      </td>

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
      </div>

      <ToastContainer />
    </div>
  );
};
export default ProfileCentre;
