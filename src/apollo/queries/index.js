import { gql } from "@apollo/client"

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
}`)

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
}`)
