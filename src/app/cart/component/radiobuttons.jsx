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
import { useSelector, useDispatch } from "react-redux";
import { removeAddress, selectAddress } from "@/state/slice/addressSlice";
import { setFreightCharge } from "@/state/slice/shipmentSlice";
import { GET_ALL_ADDRESS, REMOVE_ADDRESS } from "@/apollo/queries";
import { useQuery, useMutation } from "@apollo/client";
import { UPDATE_ADDRESS } from "@/apollo/queries";

export default function ControlledRadioButtonsGroup() {
  const user = useSelector((state) => state?.user);
  const [removeAddressList] = useMutation(REMOVE_ADDRESS);
  const [updateAddress] = useMutation(UPDATE_ADDRESS);

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

  const [editAddressId, setEditAddressId] = useState(null);
  const [editedAddress, setEditedAddress] = useState({});

  const handleEditAddress = (address) => {
    setEditAddressId(address.addresId);
    setEditedAddress({
      ...address,
      name: address.name,
      city: address?.address[0]?.city,
      state: address?.address[3]?.state,
      pinCode: address?.address[1]?.pinCode,
      addressLine: address?.address[2]?.address,
      mobileNumber: address.mobileNumber,
    });
  };
  // console.log("editedAddress?.addresId", editedAddress?.addresId);
  const handleSubmitUpdateAddress = async () => {
    try {
      const resp = await updateAddress({
        variables: {
          AddresId: parseInt(editedAddress?.addresId),
          address: {
            city: editedAddress.city,
            pinCode: editedAddress.pinCode,
            address: editedAddress.addressLine,
            state: editedAddress.state,
          },
          mobileNumber: editedAddress.mobileNumber,
          name: editedAddress.name,
        },
      });

      setEditAddressId(null);
      setEditedAddress({});

      addressesData.refetch();
    } catch (err) {
      console.log("err", err.message);
    }
  };

  useEffect(() => {
    addressesData.refetch();
  }, [removeAddressList, handleEditAddress]);

  const handleChange = async (event) => {
    const selectedAddressId = event.target.value;
    dispatch(selectAddress(selectedAddressId));
  };

  const handleRemoveAddress = async (address) => {
    try {
      await removeAddressList({
        variables: {
          AddressId: parseInt(address?.addresId),
        },
      });

      dispatch(removeAddress(address?.addresId));
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
        onChange={handleChange}
      >
        <div className="w-full space-y-4">
          {addressesData?.data?.getBuyerAddress?.map((_address) => (
            <div
              className="flex flex-col sm:flex-row items-start justify-between border-b pb-2 sm:pb-4"
              key={_address?.addresId}
            >
              <div className="w-full sm:w-8/12">
                <FormControlLabel
                  value={_address?.addresId}
                  control={<Radio color="primary" />}
                  label={<Box className="responsive-box">{_address.name}</Box>}
                />
                <div
                  style={{ color: "#2F302F" }}
                  className="px-8 sm:font-normal text-xs sm:text-base"
                >
                  <p>
                    {_address?.address[0]?.city} {_address?.address[3]?.state}{" "}
                    {_address?.address[1]?.pinCode}{" "}
                    {_address?.address[2]?.address}
                  </p>
                  <p>Contact :- {_address.mobileNumber}</p>
                </div>
              </div>
              <div className="flex space-x-2 mt-3 sm:w-2/12 w-full">
                <button
                  className="Cart-remove bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
                  onClick={() => handleRemoveAddress(_address)}
                >
                  Remove
                </button>
                <button
                  className="Cart-remove bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600"
                  onClick={() => handleEditAddress(_address)}
                >
                  Edit
                </button>
              </div>
            </div>
          ))}
        </div>

        {editAddressId && (
          <div className="mt-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className=" ">
                <div>Name:</div>{" "}
                <input
                  type="text"
                  value={editedAddress.name || ""}
                  onChange={(e) =>
                    setEditedAddress({ ...editedAddress, name: e.target.value })
                  }
                  placeholder="Name"
                  className="input-field w-full border-2  px-2  "
                />
              </div>
              <div className="">
                <div>City:</div>{" "}
                <input
                  type="text"
                  value={editedAddress.city || ""}
                  onChange={(e) =>
                    setEditedAddress({ ...editedAddress, city: e.target.value })
                  }
                  placeholder="City"
                  className=" border-2  px-2 w-full input-field"
                />
              </div>
              <div className="">
                <div>State:</div>{" "}
                <input
                  type="text"
                  value={editedAddress.state || ""}
                  onChange={(e) =>
                    setEditedAddress({
                      ...editedAddress,
                      state: e.target.value,
                    })
                  }
                  placeholder="State"
                  className="input-field border-2  px-2 w-full"
                />
              </div>
              <div className="">
                <div>Pincode:</div>{" "}
                <input
                  type="text"
                  value={editedAddress.pinCode || ""}
                  onChange={(e) =>
                    setEditedAddress({
                      ...editedAddress,
                      pinCode: e.target.value,
                    })
                  }
                  placeholder="Pin Code"
                  className="input-field border-2  px-2 w-full"
                />
              </div>
              <div className="">
                <div>Address Line:</div>{" "}
                <input
                  type="text"
                  value={editedAddress.addressLine || ""}
                  onChange={(e) =>
                    setEditedAddress({
                      ...editedAddress,
                      addressLine: e.target.value,
                    })
                  }
                  placeholder="Address Line"
                  className="input-field border-2  px-2 w-full"
                />
              </div>
              <div className="">
                <div>mobile Number:</div>{" "}
                <input
                  type="text"
                  value={editedAddress.mobileNumber || ""}
                  onChange={(e) =>
                    setEditedAddress({
                      ...editedAddress,
                      mobileNumber: e.target.value,
                    })
                  }
                  placeholder="Mobile Number"
                  className="input-field border-2  px-2 w-full"
                />
              </div>
            </div>
            <div className="flex justify-center mt-4">
              <button
                className="bg-red-400 text-white px-4 py-2 rounded hover:bg-red-500"
                onClick={handleSubmitUpdateAddress}
              >
                Submit
              </button>
            </div>
          </div>
        )}
      </RadioGroup>
    </FormControl>
  );
}
