import React from "react";
import { Metadata } from "next";
import ContactForm from "@/components/ContactPage/ContactForm";

export const metadata: Metadata = {
    title: "Contact Us - Mithun BL Portfolio",
    description: "Get in touch with us for inquiries, support, or business opportunities.",
};

const ContactUsPage = () => {
    return (
        <>
            <article className="aboveWebSpacing"></article>
            <ContactForm />
        </>
    );
};

export default ContactUsPage;