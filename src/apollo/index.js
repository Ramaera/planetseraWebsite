import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: ACCESSTOKEN ? `Bearer ${ACCESSTOKEN}` : "",
    },
  };
});
const httpLink = createHttpLink({
  uri: process.env.NEXT_PUBLIC_SERVER_URL,
});
let ACCESSTOKEN;
const getApolloClient = () => {
  if (typeof window !== "undefined") {
    ACCESSTOKEN = localStorage.getItem("accessToken");
  }
  return new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });
};
export const client = getApolloClient();
