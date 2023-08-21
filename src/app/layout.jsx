"use client";
import "../styles/globals.css";
import "../styles/mediaQuery.css";
import { Inter } from "next/font/google";
import { Provider } from "react-redux";
import { store } from "../state/store";
import { client } from "@/apollo";
import { ApolloProvider } from "@apollo/client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  useEffect(() => {
    AOS.init();
  }, []);

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
