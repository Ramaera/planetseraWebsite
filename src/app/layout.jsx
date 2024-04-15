"use client";
import "@/public/styles/globals.css";
import { Inter, Montserrat } from "next/font/google";
import { Provider } from "react-redux";
import { persistor, store } from "@/state/store";
import { PersistGate } from "redux-persist/integration/react";
import { client } from "@/apollo";
import { ApolloProvider } from "@apollo/client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Head from "next/head";
import Script from "next/script";
import Footer from "@/components/Footer/Footer";
import ConditionalRoute from "./ConditionalRoute";
import ScrollToTopButton from "@/components/ScrollTop";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });
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
      <ApolloProvider client={client}>
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
          <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
              <ConditionalRoute>
                {children}
                <Analytics />
                <SpeedInsights />
                <Footer />
                <ScrollToTopButton />
              </ConditionalRoute>
            </PersistGate>
          </Provider>
        </body>
      </ApolloProvider>
    </html>
  );
}
