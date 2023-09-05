"use client";
import "../styles/globals.css";
import "../styles/mediaQuery.css";
import { Inter, Montserrat } from "next/font/google";
import { Provider } from "react-redux";
import { store } from "../state/store";
import { client } from "@/apollo";
import { ApolloProvider } from "@apollo/client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const inter = Inter({ subsets: ["latin"] });
import Head from "next/head";
import Script from "next/script";
import Footer from "@/components/Footer/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--montserrat",
  display: "swap",
});

export default function RootLayout({ children }) {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <html lang="en">
      <Head />
      <meta
        name="ahrefs-site-verification"
        content="d4f8b0bf72f45cd5ca2e40ab1dba820e7bfbd2136410c4e19f4ff1bdc621be6a"
      />
      <meta
        name="google-site-verification"
        content="7_WJ0a1shqr0eVq7IdQSyBNNK_7UfbvC7DHlJKPHYls"
      />
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-SYWV757KVD"
      />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer  || [] ;
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'GA_MEASUREMENT_ID');
        `}
      </Script>

      <body
        className={`${inter.className} ${montserrat.variable} font-Montserrat`}>
        <ApolloProvider client={client}>
          <Provider store={store}>
            {children}
            <Footer />
          </Provider>
        </ApolloProvider>
      </body>
    </html>
  );
}
