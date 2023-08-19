import masala1 from "@assets/images/Picture-1.webp"

const ShopPouch = () => {
  return (
    <div className="basis-12/12 flex w-full box-alignment">
      <div className="basis-2/12"></div>
      <div className="basis-8/12 flex relative w-full">
        <img
          alt="masala"
          loading="lazy"
          src={masala1}
          className="pouchAlignment"
        />
      </div>
      <div className="basis-2/12"></div>
    </div>
  )
}

export default ShopPouch
