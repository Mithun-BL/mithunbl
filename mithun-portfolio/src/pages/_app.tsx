import React from "react";
import type { AppProps } from "next/app";
import "@/styles/globals.scss";
import Header from "@/Layout /Header";
import Footer from "@/Layout /Footer";


export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}
