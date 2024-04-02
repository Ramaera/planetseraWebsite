const Specifications = ({ selectedButton, specificProduct }) => {
  return (
    <>
      <div className=" sm:mt-2 hidden sm:block">
        <h3
          style={{
            color:
              selectedButton === "50gram"
                ? specificProduct?.colored
                : specificProduct?.colored,
          }}
          className={`md:text-center text-2xl  tracking-widest font-light my-2 font-Montserrat text-center`}>
          Specifications
        </h3>
        <div className=" flex justify-evenly border-2 rounded-md font-Montserrat font-normal	md:font-light">
          <div className="my-1 p-0 flex flex-col items-center justify-center">
            <p className="">Weight </p>
            <p className="font-normal">{selectedButton + " g"}</p>
          </div>
          <div className="border-r-2"></div>
          <div className="my-1 p-0 flex flex-col items-center  justify-center">
            <p className="lg:mr-2">Packaging type </p>
            <p className="font-normal">
              {selectedButton === 6 || selectedButton === 8
                ? "Pouch"
                : "Zipper Pouch"}
            </p>
          </div>
          <div className="border-r-2"></div>
          <div className="my-1 p-0 flex flex-col items-center justify-center">
            <p className="lg:mr-2"> Country of origin </p>
            <p className="font-normal">India</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Specifications;
