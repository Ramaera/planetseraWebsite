const index = ({ link, home }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`${
        link &&
        "hover:scale-105 transition-transform  border-[#000000] border-2 p-1 rounded-[50px]  h-[50px]"
      } relative  `}>
      <img
        src="/images/backgrounds/amazon.webp"
        className={` ${!link && "hover:opacity-10"} z-20 ${
          !link &&
          "grayscale blur-[1px] border-[#000000] border-2 p-1 rounded-[50px]"
        }`}
        width={120}
        alt="buy on amazon"
        title="Buy on Amazon"
      />
      {!link && (
        <h4
          className={` font-sans font-bold absolute top-0 -z-10  text-sm  text-center w-full h-full flex items-center justify-center`}>
          Coming Soon
        </h4>
      )}
    </a>
  );
};

export default index;
