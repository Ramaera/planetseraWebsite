import React from "react";
import { useSelector } from "react-redux";

const index = () => {
  const colorMe = useSelector((state) => state.colorUs.color);

  return (
    <>
      <div className="flex items-center justify-center sm:p-6 p-4 border-solid  rounded-2xl ">
        <div className="sm:mt-20 mt-12 border-2 border-[#494747] rounded-2xl sm:p-4 p-3 ">
          <p
            style={{
              color: colorMe,
            }}
            className="font-semibold 	sm:text-5xl text-2xl flex justify-center"
          >
            Return Policy
          </p>
          <p className="py-2 font-semibold text-2xl ">
            Ramaera Industries Limited
          </p>
          <p className="py-2 ">
            Our policy lasts 2 days. If 2 days have gone by since your purchase,
            unfortunately we can’t offer you a exchange or return.
          </p>
          <p className="py-2 ">
            To be eligible for a return, your item must be unused and in the
            same condition that you received it. It must also be in the original
            packaging.
          </p>
          <p className="py-2">
            Several types of goods are exempt from being returned. Perishable
            goods such as Vegetables, Fruits, Flowers, Milk or Beverages drinks
            etc cannot be returned. We also do not accept products that are
            intimate or sanitary goods, hazardous materials, or flammable
            liquids or gases.
          </p>

          <h5
            style={{
              color: colorMe,
            }}
            className=" font-semibold text-xl"
          >
            Additional non-returnable Products{" "}
          </h5>
          <p className="py-2">
            Any item not in its original condition, is damaged or missing parts
            for reasons not due to our error.
          </p>
          <h5
            style={{
              color: colorMe,
            }}
            className=" font-semibold text-xl"
          >
            Requirement for Return:
          </h5>
          <p className="py-2">
            To complete your return, we require a original receipt or proof of
            purchase.
          </p>
          <h5
            style={{
              color: colorMe,
            }}
            className=" font-semibold text-xl"
          >
            Refunds (if applicable)
          </h5>
          <p className="py-2">
            Once your return is received and inspected, we will send you an
            email or phone call to notify you that we have received your
            returned item. We will also notify you of the approval or rejection
            of your refund. If you are approved, then your refund will be
            processed, and a credit will automatically be applied to original
            method of payment, within a certain amount of days.
          </p>
          <h5
            style={{
              color: colorMe,
            }}
            className=" font-semibold text-xl"
          >
            Sale/Offer Products (if applicable)
          </h5>
          <p className="py-2">
            Only regular priced products may be refunded, unfortunately
            sale/offer product cannot be refunded.
          </p>

          <h5
            style={{
              color: colorMe,
            }}
            className=" font-semibold text-xl"
          >
            Exchanges (if applicable)
          </h5>
          <p className="py-2">
            We only replace items if they are defective or damaged. If you need
            to exchange it for the same item, send us an email at
            Care@ramaera.in Shipping costs are non-refundable. If you receive a
            refund, the cost of return shipping will be deducted from your
            refund. Depending on where you live, the time it may take for your
            exchanged product to reach you, may vary.
          </p>
        </div>
      </div>
    </>
  );
};

export default index;
