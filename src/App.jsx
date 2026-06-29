import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import HeroSection from "./Components/Home_Page/Hero_Section/Hero_section";
import About from "./Components/Home_Page/About/About";
import Skills from "./Components/Home_Page/Skills/Skills";
import "./App.css";
import "./index.css";
import Project from "./Components/Home_Page/Project/Project";
import Services from "./Components/Home_Page/Services/Services";
import Testimonials from "./Components/Home_Page/Testimonial/Testimonial";
import FAQ from "./Components/Home_Page/FAQ/FAQ";
import Contact from "./Components/Home_Page/Contact/Contact";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Home_Page/Footer/Footer";

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        }
      });
    }, {
      threshold: 0.1,
    });

    const sections = document.querySelectorAll(".reveal-section");
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="fullpage-container">
      <Helmet>
        <title>Hemanthika Portfolio</title>
      </Helmet>
      <Navbar />
      <section id="home" className="fullpage-section reveal-section"><HeroSection imageSrc="src/assets/Hero.png" /></section>
      <section id="about" className="fullpage-section reveal-section"><About /></section>
      <section id="skills" className="fullpage-section reveal-section"><Skills /></section>
      <section id="projects" className="fullpage-section reveal-section"><Project /></section>
      <section id="services" className="fullpage-section reveal-section"><Services /></section>
      <section id="testimonials" className="fullpage-section reveal-section"><Testimonials /></section>
      <section id="faq" className="fullpage-section reveal-section"><FAQ /></section>
      <section id="contact" className="fullpage-section reveal-section" style={{minHeight: 'auto'}}><Contact /></section>
      <Footer />
    </div>
  )
}

export default App;