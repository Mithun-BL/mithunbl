import React from "react";
import Head from "next/head";
import ContactForm from "@/components/ContactPage/ContactForm";

const ContactUsPage = () => {
  return (
    <>
      <Head>
        <title>Contact Us</title>
        <meta name="description" content="Get in touch with us for inquiries, support, or business opportunities."/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <article className="aboveWebSpacing"></article> 

      <ContactForm />

    </>
  );
};

export default ContactUsPage;
