import React from "react";
import { Metadata } from "next";
import AboutContent from "@/components/AboutPage/AboutContent";

export const metadata: Metadata = {
    title: "About Me - Mithun BL Portfolio",
    description: "Learn more about Mithun BL, a passionate web developer specializing in interactive user experiences and modern frontend code.",
};

const AboutPage = () => {
    return (
        <>
            <article className="aboveWebSpacing"></article>
            <AboutContent />
        </>
    );
};

export default AboutPage;
