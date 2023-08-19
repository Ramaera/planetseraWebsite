"use client";
import "../styles/globals.css";
import "../styles/mediaQuery.css";
import { Inter } from "next/font/google";
import { Provider } from "react-redux";
import { store } from "../state/store";
import { client } from "@/apollo";
import { ApolloProvider } from "@apollo/client";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ApolloProvider client={client}>
          <Provider store={store}>{children}</Provider>
        </ApolloProvider>
      </body>
    </html>
  );
}
