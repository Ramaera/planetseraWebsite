import { gql } from "@apollo/client";

export const CREATE_CONTACT_RESPONSE = gql(`
mutation createUs (
  $name: String!,
      $email: String!
      $company: String!,
      $Subject: String!,
     $message: String!,
){createContactUsResponse(
    data: {
      name: $name
      email: $email
      company: $company
      Subject: $Subject
      message: $message
    }) 
    {
      name
    }
}`);

export const CREATE_REWARD = gql(`
mutation createPlanetseraReward (
      $email: String!
      $name: String!,
      $password: String!,
     $phone: String!,
     $rewardCode: String!,
){createPlanetseraReward(
  createPlanetseraRewardInput: {
      name: $name
      email: $email
      password: $password
      phone: $phone
      rewardCode: $rewardCode
    }) 
    {
      rewardCode
    }
}`);

export const LOGIN = gql(`
mutation Login( $email: String!, $password: String!) {
  login(data: { email: $email, password: $password }) {
      accessToken
      refreshToken
      user{
        name
        email
        buyer {
          id
        }
      }
  }
}
`);

export const GetUser = gql(`
query GetUser {
  me {
   email
   buyer {
    id
   }
  }
}`);

export const Get_All_Products = gql(`

query AllProducts {
  allProducts {
      description
      id
      metaData
      title
      category
      Amazon
      Flipkart
      productImageUrl
      type
      productUrl
      ProductsVariant {
          id
          imageUrl
          price
          stock
          weight
          
      }
  }
}
`);

export const Add_To_Cart = gql(`
mutation createCart($buyerId: String!, $name : String!,  $qty: Int!, $productVariantId : Int! ) {
  createCart(
      CreateCartInput: { buyerId: $buyerId, name : $name, qty: $qty, productVariantId: $productVariantId }
  ) {
    success
  
  }
}
`);

export const Get_BUYER = gql(`
query GetBuyer {
  getBuyer {
      id
      userId
  }
}
`);

export const Get_VIEW_CART = gql(`
query ViewCart($buyerId: String!) {
  viewCart(buyerId: $buyerId) {
    buyerId
    id
    cartItem{
      id
      productVariantId
      name
      qty
      
    }
  }
}
`);

export const REMOVE_ITEM_CART = gql(`
mutation RemoveItemFromCart ($cartItem: String!) {
  removeItemFromCart (cartItem: $cartItem) {
      success
  }
}
`);

export const DELETE_CART = gql(`
mutation DeleteCart ($cartId : String!){
  deleteCart ( cartId : $cartId ) {
      id
      name
      productVariantId
      qty
  }
}
`);

export const CART_OPEARTION = gql(`
mutation CartOpeartion ($cartItemId: String!, $operation: String!, $qty: Int! ) {
  cartOpeartion(
      CartOperationInput: { cartItemId: $cartItemId, operation: $operation, qty: $qty }
  ) {
      id
  }
}
`);

export const ADD_ADDRESS = gql(`
mutation AddAddress($buyerId:String!, $mobileNumber:String!,$name:String,$address:[JSONObject!]!) {
    addAddress(
        data: {
            address: $address
            buyerId: $buyerId
            mobileNumber: $mobileNumber
            name: $name
        }
    ) {
        address
        buyerId
        mobileNumber
        name
    }
}


`);

export const GET_ALL_ADDRESS = gql(`
 query GetBuyerAddress($buyerId:String!) {
    getBuyerAddress(buyerId:$buyerId ) {
        address
        buyerId
        mobileNumber
        name
    }
}
`);
