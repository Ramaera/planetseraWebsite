"use client";
import * as React from "react";
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
import { GET_ALL_ADDRESS, REMOVE_ADDRESS } from "@/apollo/queries";
import { useQuery } from "@apollo/client";
import { useMutation } from "@apollo/client";

export default function ControlledRadioButtonsGroup() {
  const user = useSelector((state) => state?.user);
  const [removeAddress] = useMutation(REMOVE_ADDRESS);

  const selectedAddressId = useSelector(
    (state) => state?.address?.selectedAddress
  );

  const address = useSelector((state) => state?.address);

  console.log("address", address);

  const addressesData = useQuery(GET_ALL_ADDRESS, {
    variables: {
      buyerId: user?.data?.buyer?.id,
    },
  });

  const dispatch = useDispatch();
  const handleChange = (event) => {
    dispatch(selectAddress(event.target.value));
  };

  const handleRemoveAddress = async (address) => {
    try {
      const resp = await removeAddress({
        variables: {
          AddressId: address?.addresId,
        },
      });
      dispatch(removeAddress(address));
    } catch (err) {
      console.log("err", err.message);
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
        onChange={handleChange}>
        <div className="w-full">
          {addressesData?.data?.getBuyerAddress?.map(
            (_address) => (
              console.log("aaaaa", _address),
              (
                <div
                  className="flex w-full justify-between my-8"
                  key={_address?.addresId}>
                  <div className="sm:w-8/12  ">
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
                      label={
                        <Box className="responsive-box">{_address.name}</Box>
                      }
                    />

                    <div
                      style={{ color: "#2F302F" }}
                      className="px-8 sm:font-normal text-xs sm:text-base	">
                      <p>
                        {_address?.address[0]?.city}{" "}
                        {_address?.address[1]?.pincode}{" "}
                        {_address?.address[2]?.address}
                      </p>
                      <p>Contact :- {_address.mobileNumber}</p>
                    </div>
                  </div>
                  <div className="text-xs sm:text-base sm:w-2/12 w-5/12 mt-3	">
                    {/* Edit | */}
                    <button
                      className="Cart-remove"
                      onClick={() => handleRemoveAddress(_address)}>
                      Remove
                    </button>
                  </div>
                </div>
              )
            )
          )}
        </div>
      </RadioGroup>
    </FormControl>
  );
}
