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
      }
  }
}
`);

export const GetUser = gql(`
query GetUser {
  me {
   email
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



mutation CreateCart($buyerId: String!, $checkedOut: Boolean!  $itemCount: Int! $productVariantId: Int! ) {
  createCart(
      CreateCartInput: { buyerId: $buyerId, checkedOut: $checkedOut, itemCount: $itemCount, productVariantId: $productVariantId }
  ) {
      buyerId
  
  }
}
`);
