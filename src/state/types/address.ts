export type AddressType = {
  name: string;
  mobileNumber: string;
  buyerId: string;
  address: [
    {
      city: string;
    },
    {
      address: string;
    },
    {
      pincode: string;
    }
  ];
};
