import React from "react";
import { Play, Sparkles, MonitorPlay } from "lucide-react";
import { FaYoutube, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import profile from "../../../assets/Hero.png";

export default function HeroSection() {
  const handleScrollTo = (e, targetId) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <style>{styles}</style>

      <section className="hero">



        {/* Decor: Dots Bottom Right */}
        <div className="dots-grid bottom-right">
          <div className="dot"></div><div className="dot"></div><div className="dot"></div><div className="dot"></div>
          <div className="dot"></div><div className="dot"></div><div className="dot"></div><div className="dot"></div>
          <div className="dot"></div><div className="dot"></div><div className="dot"></div><div className="dot"></div>
          <div className="dot"></div><div className="dot"></div><div className="dot"></div><div className="dot"></div>
        </div>

        {/* Scattered circles */}
        <div className="circle-decor outline c1"></div>
        <div className="circle-decor solid c2"></div>
        <div className="circle-decor outline c3"></div>
        <div className="circle-decor solid c4"></div>

        {/* Background blobs behind image */}
        <div className="bg-blob-main"></div>

        <div className="container">
          {/* LEFT */}
          <div className="left">
            <div className="greeting-wrapper">
              <span className="welcome">Hello, I'm</span>
              <div className="underline-accent"></div>
            </div>

            <h1>Hemanthika</h1>
            <div className="h1-underline">
              <div className="line"></div>
              <div className="dot-end"></div>
            </div>

            <div className="role">
              AI Video Creator
            </div>

            <p>
              I craft powerful AI-generated videos<br />
              that captivate, inspire, and bring<br />
              ideas to life.
            </p>

            {/* SERVICES */}
            <div className="services">
              <div className="service-item">
                <div className="icon-box">
                  <Play size={20} strokeWidth={1.5} />
                </div>
                <span>AI Video<br />Generation</span>
              </div>

              <div className="service-item">
                <div className="icon-box">
                  <Sparkles size={20} strokeWidth={1.5} />
                </div>
                <span>Creative<br />Storytelling</span>
              </div>

              <div className="service-item">
                <div className="icon-box">
                  <MonitorPlay size={20} strokeWidth={1.5} />
                </div>
                <span>Professional<br />Editing</span>
              </div>
            </div>

            {/* BUTTONS */}
            <div className="buttons">
              <a href="#projects" className="primary btn-link" onClick={(e) => handleScrollTo(e, '#projects')}>View My Work</a>
              <a href="#contact" className="secondary btn-link" onClick={(e) => handleScrollTo(e, '#contact')}>Contact Me</a>
            </div>

            {/* SOCIAL */}
            <div className="social">
              <a href="https://www.linkedin.com/in/rk-hemanthika-74a765355?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noreferrer"><FaLinkedinIn size={20} /></a>
            </div>
          </div>

          {/* RIGHT */}
          <div className="right">
            <div className="image-wrapper">
              <img src={profile} alt="HEmanthika" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

const styles = `
@import url('https://fonts.googleapis.com/css2?family=Alex+Brush&family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@700&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Inter', sans-serif;
  background: #FCF9F6;
  overflow-x: hidden;
}

.hero {
  position: relative;
  width: 100%;
  min-height: 85vh;
  background: #FCF9F6;
  display: flex;
  align-items: flex-end;
  overflow: hidden;
  color: #3b312a;
}

/* ===========================
   DECORATIVE ELEMENTS
=========================== */

.dots-grid {
  position: absolute;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
  z-index: 1;
  opacity: 0.4;
}

.dot {
  width: 6px;
  height: 6px;
  background: #b69d84;
  border-radius: 50%;
}

.top-left {
  top: 40px;
  left: 40px;
}

.bottom-right {
  bottom: 40px;
  right: 40px;
}

.circle-decor {
  position: absolute;
  border-radius: 50%;
  z-index: 1;
}

.circle-decor.outline {
  border: 1px solid #b69d84;
}

.circle-decor.solid {
  background: #d4c4b5;
}

.c1 { width: 20px; height: 20px; top: 15%; left: 35%; opacity: 0.6; }
.c2 { width: 14px; height: 14px; top: 25%; left: 60%; }
.c3 { width: 30px; height: 30px; top: 18%; right: 45%; opacity: 0.6; }
.c4 { width: 18px; height: 18px; bottom: 45%; left: 45%; }

.bg-blob-main {
  position: absolute;
  width: 700px;
  height: 600px;
  background: #EFE4D7;
  border-radius: 90% 60% 90% 30% / 90% 190% 190% 190%;
  right: -250px;
  top: 100px;
  z-index: 0;
  opacity: 0.8;
  transform: rotate(-15deg);
}

/* ===========================
   CONTAINER
=========================== */

.container {
  width: 90%;
  max-width: 1200px;
  margin: auto;
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  gap: 40px;
  position: relative;
  z-index: 5;
  padding: 80px 0 0 0;
}

/* ===========================
   LEFT
=========================== */

.left {
  flex: 1;
  max-width: 550px;
  padding-top: 40px;
  padding-bottom: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}

.greeting-wrapper {
  position: relative;
  display: inline-block;
  margin-bottom: 5px;
}

.welcome {
  font-family: 'Alex Brush', cursive;
  font-size: 42px;
  color: #a58362;
  font-weight: 400;
  line-height: 1;
}

.underline-accent {
  position: absolute;
  bottom: -2px;
  left: 5px;
  width: 80%;
  height: 2px;
  background: #a58362;
  border-radius: 2px;
  transform: rotate(-2deg);
}

.left h1 {
  font-family: 'Playfair Display', serif;
  font-size: 72px;
  font-weight: 700;
  line-height: 1;
  color: #3b2c21;
  margin-bottom: 5px;
  letter-spacing: -0.5px;
}

.h1-underline {
  display: flex;
  align-items: center;
  width: 260px;
  margin-bottom: 30px;
}

.h1-underline .line {
  flex: 1;
  height: 1.5px;
  background: #a58362;
}

.h1-underline .dot-end {
  width: 6px;
  height: 6px;
  background: #a58362;
  border-radius: 50%;
  margin-left: 4px;
}

.role {
  display: inline-flex;
  align-items: center;
  padding: 8px 20px;
  background: #ab8966;
  color: #fff;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 30px;
}

.left p {
  font-size: 16px;
  line-height: 1.6;
  color: #5d534b;
  margin-bottom: 40px;
}

/* ===========================
   SERVICES
=========================== */

.services {
  display: flex;
  gap: 25px;
  flex-wrap: wrap;
  margin-bottom: 40px;
}

.service-item {
  display: flex;
  align-items: center;
  gap: 12px;
}

.icon-box {
  width: 42px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1.5px solid #ab8966;
  border-radius: 6px;
  color: #ab8966;
}

.service-item span {
  font-size: 12px;
  font-weight: 600;
  color: #3b2c21;
  line-height: 1.3;
}

/* ===========================
   BUTTONS
=========================== */

.buttons {
  display: flex;
  gap: 15px;
  margin-bottom: 40px;
  flex-wrap: wrap;
}

.primary {
  padding: 14px 28px;
  border: none;
  border-radius: 12px;
  background: #ab8966;
  color: white;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s;
}

.primary:hover {
  background: #8e6f4e;
}

.secondary {
  padding: 14px 28px;
  background: transparent;
  border: 1.5px solid #ab8966;
  color: #ab8966;
  border-radius: 12px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s;
}

.secondary:hover {
  background: #ab8966;
  color: white;
}

.btn-link {
  text-decoration: none;
  display: inline-block;
  text-align: center;
}

/* ===========================
   SOCIAL
=========================== */

.social {
  display: flex;
  gap: 15px;
}

.social a {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: #ab8966;
  border: 1.5px solid #c9b7a4;
  transition: 0.3s;
}

.social a:hover {
  background: #ab8966;
  color: white;
  border-color: #ab8966;
}

/* ===========================
   RIGHT
=========================== */

.right {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  position: relative;
  min-height: 500px;
}

.image-wrapper {
  position: relative;
  width: 100%;
  max-width: 550px;
  z-index: 2;
  display: flex;
  align-items: flex-end;
  justify-content: center;
}

.image-wrapper img {
  width: 100%;
  max-height: 110%;
  object-fit: contain;
  object-position: bottom;
  display: block;
}

/* ===========================
   RESPONSIVE
=========================== */

@media (max-width: 1024px) {
  .left h1 {
    font-size: 56px;
  }
  .bg-blob-main {
    width: 800px;
    height: 800px;
    right: -200px;
  }
}

@media (max-width: 850px) {
  .container {
    flex-direction: column-reverse;
    text-align: center;
    padding: 20px 0 60px 0;
  }
  .left {
    max-width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 0;
  }
  .left p {
    text-align: center;
  }
  .h1-underline {
    margin: 0 auto 30px auto;
  }
  .services, .buttons, .social {
    justify-content: center;
  }
  .right {
    min-height: 350px;
  }
  .image-wrapper {
    max-width: 400px;
  }
  .bg-blob-main {
    top: 0;
    right: -100px;
  }
}

@media (max-width: 480px) {
  .left h1 {
    font-size: 42px;
  }
  .welcome {
    font-size: 28px;
  }
  .right {
    min-height: 280px;
  }
  .image-wrapper {
    max-width: 300px;
  }
  .services {
    flex-direction: column;
    align-items: center;
    gap: 15px;
  }
  .buttons {
    flex-direction: column;
    width: 100%;
    align-items: stretch;
  }
  .primary, .secondary {
    width: 100%;
  }
  .bg-blob-main {
    width: 400px;
    height: 400px;
    right: -150px;
  }
}
`;
;