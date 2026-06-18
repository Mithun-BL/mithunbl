import { Metadata } from "next";
import HomeBanner from "@/components/HomePage/Banner";
import ProjectsHandled from "@/components/HomePage/ProjectsHandled";
import Work from "@/components/HomePage/WorkExperience";
import Skills from "@/components/HomePage/TechnicalSkills";
import CountersSection from "@/components/HomePage/Counter/CounterSection";

export const metadata: Metadata = {
  title: "Mithun BL - A Passionate Web Developer Portfolio",
  description: "Web developer portfolio displaying experience, academic background, technical skills, and featured projects.",
};

export default function Home() {
  return (
    <>
      <article className="mt-[140px]">
        <HomeBanner />
        <CountersSection />
        <Skills />
        <Work />
        <ProjectsHandled />
      </article>
    </>
  );
}

