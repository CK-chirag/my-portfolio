import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import HeroSection from "../HeroSection/HeroSection";
import CaeProjects from "../DomainPage/SubSection/CAE/Cae";
import Experience from "../DomainPage/SubSection/ExperienceSection/Experience";
import Projects from "../DomainPage/SubSection/ProjectsSection/Projects";
import EnquirySection from "../commonComponents/Enquiry";
import StickyBottomNav from "../commonComponents/StickNavBar";
import RoundLogoSet from "../commonComponents/RoundLogosSet";

export default function DomainPage() {
    return (
        <div>
            <Header />
            <HeroSection />
            <RoundLogoSet />
            <Projects />
            <CaeProjects />
            <Experience />
            <EnquirySection />
            <Footer />
            <StickyBottomNav />
        </div>
    );
}