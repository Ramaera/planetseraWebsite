import React, { useState } from "react";

const FestivalModal = () => {
  const [isOpen, setIsOpen] = useState(true);

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative w-1/2">
            <button
              className="absolute top-2 right-2 p-4 text-white bg-black rounded"
              onClick={closeModal}
            >
              X
            </button>
            <img
              src="/images/festivalImg/rakhiFestival.jpeg"
              alt="Festival Greetings"
              className="w-full border-2 border-black"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default FestivalModal;
