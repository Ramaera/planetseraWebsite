const index = ({ link, home }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`link && "hover:scale-105 transition-transform" relative rounded-3xl `}>
      <img
        src="/images/backgrounds/amazon.webp"
        className={` ${!link && "hover:opacity-10"} z-20 ${
          !link && "grayscale blur-[1px]"
        }`}
        width={120}
        alt="masala"
      />
      {!link && (
        <h4
          className={` font-sans font-bold translate-y-1/2  absolute pl-2 top-0 -z-10 text-sm `}>
          Coming Soon
        </h4>
      )}
    </a>
  );
};

export default index;
