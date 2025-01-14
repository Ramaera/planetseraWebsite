"use client";
import { CREATE_CONTACT_RESPONSE } from "../../../../apollo/queries";
import { useMutation } from "@apollo/client";
import "@/public/styles/contactUsCenter.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import { useSelector } from "react-redux";

const ContactUsCentre = () => {
  const colorMe = useSelector((state) => state.colorUs.color);
  const image = "/images/backgrounds/rectangle.webp";
  const locationimage = "/images/backgrounds/Location.webp";
  const mailimage = "/images/backgrounds/Vector.webp";
  const callimage = "/images/backgrounds/Call.webp";

  const [createContactUsResponse] = useMutation(CREATE_CONTACT_RESPONSE);
  const [formName, setFormName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formContact, setFormContact] = useState("");
  const [formSubject, setFormSubject] = useState("");
  const [formMessage, setFormMessage] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    {
      createContactUsResponse({
        variables: {
          name: "Planetsera: " + formName,
          email: "Planetsera: " + formEmail,
          company: "Planetsera: " + formContact,
          Subject: "Planetsera: " + formSubject,
          message: "Planetsera: " + formMessage,
        },
      });
    }
    clearForm();
  };
  const clearForm = () => {
    toast.success("Message Submitted!", {
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
      location.reload();
    }, "3200");
  };
  return (
    <div
      style={{
        backgroundImage: `url(${image})`,
      }}
      className="img_pad bg-cover bg-fixed mt-40 flex flex-col-reverse md:flex-row">
      <div className="contact_width">
        <div className="contact_height rounded-xl bg-white p-2 md:p-8 md:m-4 ">
          <div className="md:text-4xl my-1 xl:my-4 HeadText py-2 md:py-0 contact_heading">
            {" "}
            Have a Question?
          </div>
          <form onSubmit={(e) => handleSubmit(e)}>
            <ToastContainer />
            <input
              className="h-14 pl-4 w-full xl:w-[48%] xl:my-4  my-2 p-2 FontText"
              type="text"
              placeholder="Name"
              onChange={(e) => {
                setFormName(e.target.value);
              }}
              required
            />
            <input
              className="h-14 pl-4 w-full xl:w-[48%] xl:my-4 xl:mx-2 my-2 p-2 m  FontText"
              type="email"
              placeholder="Email"
              onChange={(e) => {
                setFormEmail(e.target.value);
              }}
              required
            />
            <input
              className="h-14 pl-4 w-full xl:w-[48%] xl:my-4 my-2 p-2  FontText"
              type="text"
              placeholder="Subject"
              onChange={(e) => {
                setFormSubject(e.target.value);
              }}
              required
            />
            <input
              className="h-14 pl-4  w-full xl:w-[48%] xl:my-4 xl:mx-2 my-2 p-2  FontText"
              type="number"
              placeholder="Phone"
              onChange={(e) => {
                setFormContact(e.target.value);
              }}
              required
            />
            <textarea
              className="w-full xl:w-[98%] xl:my-6  my-2 xl:p-4 p-4  xl:h-36 h-[168px] FontText"
              type="text"
              placeholder="Message"
              onChange={(e) => {
                setFormMessage(e.target.value);
              }}
              required
            />
            <button
              style={{
                backgroundImage: `linear-gradient(to right, ${colorMe}, ${
                  colorMe + "80"
                })`,
                color: "white",
                textShadow: `0 4px 4px ${colorMe}`,
                boxShadow: `2px 4px 7px -2px ${colorMe}`,
              }}
              type="submit"
              className=" xl:w-36 w-[25vh] h-12 hover:scale-105 transition-all hover:text-white hover:bg-black bg-white FontText my-8">
              Send
            </button>
          </form>
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
      <div className=" flex flex-col gap-[0px] md:pl-2">
        <h2
          className="text-white md:font-bold  tracking-widest  md:px-0 pl-2 py-16 mb-0  md:py-10 md:pt-1 md:pb-12 h-2 min-h-0 md:min-h-0 contact_information
">
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
          {/* Bring the table win-win survival strategies
          <br /> ensure proactive domination the end of <br />
          the day going real times multiple touch-
          <br />
          points. */}
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
              target="_blank">
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
      </div>
    </div>
  );
};
export default ContactUsCentre;
