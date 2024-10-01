import React, { useState } from "react";

const FestivalModal = ({ festivalImg }) => {
  const [isOpen, setIsOpen] = useState(true);

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative w-11/12">
            <button
              className="absolute top-2 right-2 py-1 px-2 sm:px-4 sm:py-2 font-bold text-white bg-black rounded-full"
              onClick={closeModal}>
              X
            </button>
            <img
              // src="/images/festivalImg/milad-un-nabi.jpeg"
              src={festivalImg}
              alt="Festival Greetings"
              className="w-full border-2 border-black rounded-2xl"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default FestivalModal;
