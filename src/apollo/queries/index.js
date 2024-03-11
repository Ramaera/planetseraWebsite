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
mutation CreateRewardCode ( $rewardCode : String!, $userId :  String! ) {
  createRewardCode(data: { rewardCode:  $rewardCode , userId: $userId }) {
      rewardCode
  }
}
`);

export const SIGNUP = gql(`
mutation Signup(  $name: String!, $email: String!, $mobileNumber: String!, $password: String!) {
  signup(data: {  name: $name, email: $email, mobileNumber: $mobileNumber, password: $password}) {
      accessToken
      refreshToken
      user {
          createdAt
          email
          id
          name
          role
          updatedAt
          buyer {
              id
              userId
          }
      }
  }
}
`);

export const LOGIN = gql(`
mutation Login( $email: String!, $password: String!) {
  login(data: { email: $email, password: $password }) {
    accessToken
        refreshToken
        user {
            createdAt
            email
            id
            name
            role
            updatedAt
            buyer {
                id
                userId
                Cart {
                    buyerId
                    id
                }
            }
        
      }
  }
}
`);

export const GetUser = gql(`
query GetUser {
  me {
    createdAt
    email
    id
    name
    role
    updatedAt
    buyer {
        id
        userId
        Cart {
            buyerId
            id
            cartItem {
                id
                name
                productVariantId
                qty
            }
        }
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
mutation CreateCart ($buyerId: String!, $name : String!,  $qty: Int!, $productVariantId : Int! ) {
  createCart(
      createCartInput: {
          buyerId: $buyerId,
          name: $name,
          productVariantId: $productVariantId ,
          qty: $qty
      }
  ) {
      buyerId
      id
      cartItem {
          id
          name
          productVariantId
          qty
      }
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
    success
  }
}
`);

export const CART_OPEARTION = gql(`
mutation CartOpeartion ($cartItemId: String!, $operation: String!, $qty: Int! ) {
  cartOpeartion(
      CartOperationInput: { cartItemId: $cartItemId, operation: $operation, qty: $qty }
  ) {
    success
  }
}
`);

export const CREATE_PAYMENT_DATA = gql(`
mutation CreatePaymentData($buyerId:String!, $orderId:Int!,$paymentId:String!) {
    createPaymentData(data: { buyerId: $buyerId, orderId: $orderId, paymentId: $paymentId }) {
      buyerId
        dateOfPayment
        orderId
        paymentId
    }
}
`);

export const FIND_TRANSACTION_ID = gql(`
query FindPaymentData($merchantTransactionId:String!) {
    findPaymentData(merchantTransactionId: $merchantTransactionId) {
        buyerId
        dateOfPayment
        orderId
        paymentId
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
        addresId
        address
        buyerId
        mobileNumber
        name
    }
}
`);

export const CREATE_ORDER = gql(`
  mutation CreateOrder(
    $AddressId: Int!
    $ShippingCost: Int!
    $buyerId: String!
    $cartId: String!
    $orderAmount: Float!
  ) {
    createOrder(
      CreateOrder: {
        AddressId: $AddressId
        ShippingCost: $ShippingCost
        buyerId: $buyerId
        cartId: $cartId
        orderAmount: $orderAmount
      }
    ) {
      newOrder {
        id
        buyerId
        orderDate
        address {
            addresId
            address
            buyerId
            mobileNumber
            name
        }
    }
    orderItems {
        productVariantId
        qty
        name
    }
    }
  }
`);

export const REMOVE_ADDRESS = gql(`
mutation RemoveAddress ($AddressId : Int!){
  removeAddress ( AddressId : $AddressId ) {
    success
  }
}
`);

export const ALL_ORDERS = gql(`
query AllOrders ($buyerId: String!) {
  allOrders(buyerId: $buyerId) {
      id
      ShippingCost
      orderAmount
      status
      orderDate
      address {
          addresId
          address
          buyerId
          mobileNumber
          name
      }
      orderItems {
          productVariantId
          qty
          name

      }
  }
}
`);
export const GET_ALL_ORDERS = gql(`
query GetallOrders {
  getallOrders {
      ShippingCost
      id
      orderAmount
      orderDate
      status
      address {
          addresId
          address
          buyerId
          mobileNumber
          name
      }
      orderItems {
          id
          name
          productVariantId
          qty
      }
      Buyer {
        user {
            name
        }
    }
      Payment {
        buyerId
        dateOfPayment
        orderId
        paymentId
    }
  }
}
`);

export const CREATE_PRODUCT = gql(`
mutation CreateProduct (
  $Amazon: Boolean!,
  $Flipkart: Boolean!,
  $category: [String!]!,
  $description: String!,
  $productImageUrl: String!,
  $productUrl: String!,
  $title: String!,
  $type: String!,
  $metaData: [JSONObject!],
  ) {
  createProduct(
      input: {
        Amazon: $Amazon,
        Flipkart: $Flipkart,
        category: $category,
        description: $description,
        productImageUrl: $productImageUrl,
        productUrl: $productUrl,
        title: $title,
        type: $type,
        metaData: $metaData
      }
  ) {
    newProduct {
      Amazon
      Flipkart
      category
      description
      id
      metaData
      productImageUrl
      productUrl
      title
      type
  }
  }
}
`);

export const UPDATE_PRODUCT_VARIANTS = gql(`
mutation UpdateProductVariant(
  $id: Int!,
  $imageUrl:[String!]!,
  $price: Float!,
  $stock: Int!,
  $weight: String!) {
  updateProductVariant(
      data: { id: $id, imageUrl: $imageUrl, price: $price, stock:$stock, weight: $weight }
  ) {
      id
      imageUrl
      price
      stock
      weight
  }
}
`);

export const CREATE_PRODUCT_VARIANTS = gql(`

mutation CreateProductVariant(
  $imageUrl: [String!]!,
   $price: Float!,
    $productId: String!,
     $stock: Int!,
      $weight: String!) {
  createProductVariant(
      CreateProductVariantInput: { imageUrl: $imageUrl, price: $price, productId: $productId, stock: $stock, weight: $weight }
  ) {
      id
      imageUrl
      price
      stock
      weight
  }
}
`);

export const UPDATE_PRODUCT_DETAILS = gql(`
mutation UpdateProductDetails(
  $id: String!, 
  $Amazon: Boolean!,
  $Flipkart: Boolean!,
  $category: [String!]!,
  $description: String!,
  $productImageUrl: String!,
  $productUrl: String!,
  $title: String!,
  $type: String!,
  $metaData: [JSONObject!],
) {
  updateProductDetails(
      data: {
          Amazon: $Amazon
          Flipkart: $Flipkart
          category: $category
          description: $description
          id:  $id
          metaData: $metaData
          productImageUrl: $productImageUrl
          productUrl:  $productUrl
          title:  $title
          type: $type
      }
  ) {
      Amazon
      Flipkart
      category
      description
      id
      metaData
      productImageUrl
      productUrl
      title
      type
  }
}
`);
