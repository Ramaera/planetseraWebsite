"use client";
import React, { useEffect, useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { Box } from "@mui/material";
import "@/public/styles/cart.css";
import "@/public/styles/globals.css";
import { Montserrat } from "next/font/google";
import { useSelector, useDispatch } from "react-redux";
import { removeAddress, selectAddress } from "@/state/slice/addressSlice";
import { setFreightCharge } from "@/state/slice/shipmentSlice";
import { GET_ALL_ADDRESS, REMOVE_ADDRESS } from "@/apollo/queries";
import { useQuery } from "@apollo/client";
import { useMutation } from "@apollo/client";
import axios from "axios";

export default function ControlledRadioButtonsGroup() {
  const user = useSelector((state) => state?.user);
  const [removeAddressList] = useMutation(REMOVE_ADDRESS);
  // const [freightCharge, setFreightCharge] = useState(null);

  const selectedAddressId = useSelector(
    (state) => state?.address?.selectedAddress
  );
  const addressesData = useQuery(GET_ALL_ADDRESS, {
    variables: {
      buyerId: user?.data?.buyer?.id,
    },
  });
  const CartData = useSelector((state) => state.cart.items);

  const dispatch = useDispatch();

  const handleChange = async (event) => {
    const selectedAddressId = event.target.value; // Get the selected address ID
    dispatch(selectAddress(selectedAddressId)); // Update selected address in Redux
    await fetchFreightCharge(selectedAddressId); // Fetch freight charge for the selected address
  };
  useEffect(() => {
    fetchFreightCharge(selectedAddressId);
  }, [handleChange, selectedAddressId]);

  const handleRemoveAddress = async (address) => {
    try {
      const resp = await removeAddressList({
        variables: {
          AddressId: parseInt(address?.addresId),
        },
      });

      dispatch(removeAddress(address?.addresId));
    } catch (err) {
      console.log("err", err.message);
    }
  };

  useEffect(() => {
    addressesData.refetch();
  }, [handleRemoveAddress]);

  // console.log("freightCharge", FreightCharge);

  const calculateTotalWeightInKgs = () => {
    console.log("00", CartData);
    const totalWeightInGrams = CartData.reduce((totalWeight, item) => {
      const weightInInt = parseInt(item.weight);
      const productWeight = weightInInt * item.qty;
      return totalWeight + productWeight;
    }, 0);
    // console.log("--->>", totalWeightInGrams);

    const totalWeightInKgs = totalWeightInGrams / 1000;
    return totalWeightInKgs;
  };

  const fetchFreightCharge = async (selectedAddressId) => {
    const selectedAddress = addressesData?.data?.getBuyerAddress.find(
      (address) => address?.addresId === selectedAddressId
    );
    const deliveryPincode = selectedAddress?.address[1]?.pinCode;

    const totalWeight = calculateTotalWeightInKgs();
    // console.log("totalWeight", totalWeight);

    const queryParams = {
      pickup_postcode: 844101,
      delivery_postcode: deliveryPincode,
      weight: totalWeight,
      cod: 0,
    };

    try {
      const response = await axios.get(
        "https://apiv2.shiprocket.in/v1/external/courier/serviceability/",
        {
          params: queryParams,
          headers: {
            Authorization: ` ${process.env.NEXT_PUBLIC_SHIPROCKET_TOKEN}`,
            "Content-Type": "application/json",
          },
        }
      );
      const courierCompanies =
        response?.data?.data?.available_courier_companies;

      if (courierCompanies && courierCompanies.length > 0) {
        let minFreightCharge = Infinity;

        courierCompanies.forEach((company) => {
          const freightCharge = company?.freight_charge;
          if (freightCharge && freightCharge < minFreightCharge) {
            minFreightCharge = freightCharge;
          }
        });

        setFreightCharge(minFreightCharge);

        dispatch(setFreightCharge(minFreightCharge));
      }
    } catch (error) {
      console.error("Error fetching freight charge:", error);
    }
  };

  return (
    <FormControl className="w-full">
      <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
      <RadioGroup
        className=""
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={selectedAddressId}
        onChange={handleChange}
      >
        <div className="w-full">
          {addressesData?.data?.getBuyerAddress?.map((_address) => (
            <div
              className="flex w-full justify-between my-2 sm:my-8"
              key={_address?.addresId}
            >
              {console.log("_address", _address)}

              <div className="w-full sm:w-8/12  ">
                <FormControlLabel
                  value={_address?.addresId}
                  control={
                    <Radio
                      sx={{
                        "&, &.Mui-checked": {
                          color: "#FE7171",
                        },
                      }}
                    />
                  }
                  label={<Box className="responsive-box">{_address.name}</Box>}
                />

                <div
                  style={{ color: "#2F302F" }}
                  className="px-8 sm:font-normal text-xs sm:text-base	"
                >
                  <p>
                    {_address?.address[0]?.city} {_address?.address[3]?.state}{" "}
                    {_address?.address[1]?.pinCode}{" "}
                    {_address?.address[2]?.address}
                  </p>
                  <p>Contact :- {_address.mobileNumber}</p>
                </div>
              </div>
              <div className="text-xs sm:text-base sm:w-2/12 w-5/12 mt-3	">
                <button
                  className="Cart-remove"
                  onClick={() => handleRemoveAddress(_address)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      </RadioGroup>
    </FormControl>
  );
}
