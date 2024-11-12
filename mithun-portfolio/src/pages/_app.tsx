import Footer from "@/component/Layout /Footer";
import Header from "@/component/Layout /Header";
import "@/styles/globals.scss";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
  <>
  <Header/>
  <Component {...pageProps} />
  <Footer/>

  </>
  )
}
