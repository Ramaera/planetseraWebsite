import { useSelector } from "react-redux";

const HealthySpices = () => {
  const masala1 = "/images/backgrounds/blackpepper.webp";
  const masala2 = "/images/backgrounds/cardamom.webp";
  const masala3 = "/images/backgrounds/cumin-1.webp";
  const masala4 = "/images/backgrounds/Fenugreek.webp";
  const masala5 = "/images/backgrounds/mustard-1.webp";
  const masala6 = "/images/backgrounds/star.webp";
  const masala7 = "/images/backgrounds/clove.webp";
  const masala8 = "/images/backgrounds/cinamon.webp";
  const masala9 = "/images/backgrounds/nut.webp";

  const colorMe = useSelector((state) => state.colorUs.color);

  return (
    <div
      className="lg:px-12 overflow-scroll scroll lg:h-[510px] mt-10 "
      style={{
        "--color": colorMe,
      }}>
      <div className="healthyScroll">
        <div className=" flex justify-between mt-10 ">
          <div
            style={{ border: `1px  dashed ${colorMe}` }}
            className="lg:w-[100px] lg:h-[100px] black-pepper-container border border-dashed  flex justify-center items-center rounded-ful relative">
            <div
              style={{ backgroundImage: `url(${masala1})` }}
              className="black-pepper p-10"></div>
            <div
              style={{ backgroundColor: colorMe }}
              className="ani-circle"></div>
          </div>

          <div className="lg:w-96">
            <p
              style={{ color: colorMe }}
              className="text-[18px] md:text-[20px] font-medium	 md:leading-[24px] md:tracking-[0.11em]">
              Black Pepper
            </p>
            <p className="cardamom-para mt-2">
              Peppercorns are used as whole or ground and added to dishes or
              fries. It gives food a distinctive aroma and flavor along with its
              piquant heat. It is definitely the ‘King of Spices and the most
              loved spices of all.
            </p>
          </div>
        </div>
        <div className="flex justify-between mt-20">
          <div
            style={{ border: `1px  dashed ${colorMe}` }}
            className="lg:w-[100px] lg:h-[100px] cardamom-container border border-dashed  flex justify-center items-center rounded-ful relative">
            <div
              style={{ backgroundImage: `url(${masala2})` }}
              className="cardamom p-10"></div>
            <div
              style={{ backgroundColor: colorMe }}
              className="ani-circle"></div>
          </div>
          <div className="w-96">
            <p
              style={{ color: colorMe }}
              className="text-[18px] md:text-[20px] font-medium	 md:leading-[24px] md:tracking-[0.11em]">
              Cardamom
            </p>
            <p className="cardamom-para mt-2">
              Cardamom, the ‘Queen of Spices, is a much loved spice for its
              flavor and unique taste. It is intensely fragrant and aromatic and
              is an indispensible ingredient in biriyani and pulao.
            </p>
          </div>
        </div>
        <div className="flex justify-between mt-20">
          <div
            style={{ border: `1px  dashed ${colorMe}` }}
            className="lg:w-[100px] lg:h-[100px] cardamom-container border border-dashed  flex justify-center items-center rounded-ful relative">
            <div
              style={{ backgroundImage: `url(${masala3})` }}
              className="cumin p-10"></div>
            <div
              style={{ backgroundColor: colorMe }}
              className="ani-circle"></div>
          </div>
          <div className="w-96">
            <p
              style={{ color: colorMe }}
              className="text-[18px] md:text-[20px] font-medium	 md:leading-[24px] md:tracking-[0.11em]">
              Cumin
            </p>
            <p className="cardamom-para mt-2">
              Black Cumin (also called Nigella) is a common ingredient in Indian
              Cooking, especially in South Indian recipes. It has a nice aroma
              when toasted in oil and added to curries. It has a light bitter,
              peppery taste.
            </p>
          </div>
        </div>
        <div className="flex justify-between mt-20">
          <div
            style={{ border: `1px  dashed ${colorMe}` }}
            className="lg:w-[100px] lg:h-[100px] cardamom-container border border-dashed  flex justify-center items-center rounded-ful relative">
            <div
              style={{ backgroundImage: `url(${masala4})` }}
              className="fenugreek p-10"></div>
            <div
              style={{ backgroundColor: colorMe }}
              className="ani-circle"></div>
          </div>
          <div className="w-96">
            <p
              style={{ color: colorMe }}
              className="text-[18px] md:text-[20px] font-medium	 md:leading-[24px] md:tracking-[0.11em]">
              Fenugreek
            </p>
            <p className="cardamom-para mt-2">
              Fenugreek is hard yellowish-brown seeds are used in cooking, as
              food additive and in medicines. It flavors food and is widely used
              in the making of pickles. It is also widely used in medicated hair
              oils.
            </p>
          </div>
        </div>
        <div className="flex justify-between mt-20">
          <div
            style={{ border: `1px  dashed ${colorMe}` }}
            className="lg:w-[100px] lg:h-[100px] cardamom-container border border-dashed  flex justify-center items-center rounded-ful relative">
            <div
              style={{ backgroundImage: `url(${masala5})` }}
              className="mustard p-10"></div>
            <div
              style={{ backgroundColor: colorMe }}
              className="ani-circle"></div>
          </div>
          <div className="w-96">
            <p
              style={{ color: colorMe }}
              className="text-[18px] md:text-[20px] font-medium	 md:leading-[24px] md:tracking-[0.11em]">
              Mustard
            </p>
            <p className="cardamom-para mt-2">
              Mustard is a common and indispensable condiment in Indian cooking.
              Black mustard is most commonly used in South Indian cooking. It is
              a flavoring agent with good preservative and antioxidant
              properties.
            </p>
          </div>
        </div>

        <div className="flex justify-between mt-20">
          <div
            style={{ border: `1px  dashed ${colorMe}` }}
            className="lg:w-[100px] lg:h-[100px] cardamom-container border border-dashed  flex justify-center items-center rounded-ful relative">
            <div
              style={{ backgroundImage: `url(${masala6})` }}
              className="star p-10"></div>
            <div
              style={{ backgroundColor: colorMe }}
              className="ani-circle"></div>
          </div>
          <div className="w-96">
            <p
              style={{ color: colorMe }}
              className="text-[18px] md:text-[20px] font-medium	 md:leading-[24px] md:tracking-[0.11em]">
              Star Anise
            </p>
            <p className="cardamom-para mt-2">
              Star Anise has a rich flavor and aroma. It is widely used in
              flavoring Indian curries, especially for enhancing the taste of
              meat dishes. It has to be used in moderation as it has an
              overpowering flavor.
            </p>
          </div>
        </div>
        <div className="flex justify-between mt-20">
          <div
            style={{ border: `1px  dashed ${colorMe}` }}
            className="lg:w-[100px] lg:h-[100px] cardamom-container border border-dashed  flex justify-center items-center rounded-ful relative">
            <div
              style={{ backgroundImage: `url(${masala7})` }}
              className="clove p-10"></div>
            <div
              style={{ backgroundColor: colorMe }}
              className="ani-circle"></div>
          </div>
          <div className="w-96">
            <p
              style={{ color: colorMe }}
              className="text-[18px] md:text-[20px] font-medium	 md:leading-[24px] md:tracking-[0.11em]">
              Clove
            </p>
            <p className="cardamom-para mt-2">
              Cloves are used for adding its aromatic and stimulating taste to
              dishes. It is used as a flavoring agent in the food industry. This
              spice has a rich medicinal value with antiseptic and antibiotic
              properties.
            </p>
          </div>
        </div>

        <div className="flex justify-between mt-20">
          <div
            style={{ border: `1px  dashed ${colorMe}` }}
            className="lg:w-[100px] lg:h-[100px] cardamom-container border border-dashed  flex justify-center items-center rounded-ful relative">
            <div
              style={{ backgroundImage: `url(${masala8})` }}
              className="cinamon p-10"></div>
            <div
              style={{ backgroundColor: colorMe }}
              className="ani-circle"></div>
          </div>
          <div className="w-96">
            <p
              style={{ color: colorMe }}
              className="text-[18px] md:text-[20px] font-medium	 md:leading-[24px] md:tracking-[0.11em]">
              Cinnamon
            </p>
            <p className="cardamom-para mt-2">
              Cinnamon is the dried inner bark of Cinnamomum Verum. The best
              Cinnamon plants are grown in high ranges of Kerala. Very commonly
              used in Indian dishes and has delicate fragrance and appealing
              taste.
            </p>
          </div>
        </div>

        <div className="flex justify-between mt-20">
          <div
            style={{ border: `1px  dashed ${colorMe}` }}
            className="lg:w-[100px] lg:h-[100px] cardamom-container border border-dashed  flex justify-center items-center rounded-ful relative">
            <div
              style={{ backgroundImage: `url(${masala9})` }}
              className="nut p-10"></div>
            <div
              style={{ backgroundColor: colorMe }}
              className="ani-circle"></div>
          </div>
          <div className="w-96">
            <p
              style={{ color: colorMe }}
              className="text-[18px] md:text-[20px] font-medium	 md:leading-[24px] md:tracking-[0.11em]">
              Nutmeg & Mace
            </p>
            <p className="cardamom-para mt-2">
              The same fruit produces Nutmeg and Mace. Mace is the dried
              reticulated ‘aril’ of the fruit and nutmeg is the dried seed
              kernel of the fruit. They are used as condiments in the making of
              savory dishes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthySpices;
