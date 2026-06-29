import React from "react";
import profileImg from "../../../assets/Hero.png";


function About() {
  return (
    <section style={styles.section}>
      <style>{filmHoleStyles}</style>



      {/* Main Content Layout */}
      <div className="about-container">

        {/* Left Side: Static ID Badge */}
        <div className="about-lanyard">
          <div style={styles.badgeContainer}>

            {/* Strap: filmstrip-style ribbon, nodding to video production work */}
            <div style={styles.strap}>
              <div style={styles.filmHolesLeft}>
                {Array.from({ length: 7 }).map((_, i) => (
                  <span key={`l-${i}`} style={styles.filmHole} />
                ))}
              </div>
              <div style={styles.strapCenterLabel}>REC</div>
              <div style={styles.filmHolesRight}>
                {Array.from({ length: 7 }).map((_, i) => (
                  <span key={`r-${i}`} style={styles.filmHole} />
                ))}
              </div>
            </div>

            {/* Clip Mechanism: clapperboard-inspired tab instead of a plain ring */}
            <div style={styles.clip}>
              <div style={styles.clapTab}>
                <div style={styles.clapStripe} />
                <div style={styles.clapStripe} />
                <div style={styles.clapStripe} />
              </div>
              <div style={styles.clipBase}></div>
            </div>

            {/* ID Card */}
            <div style={styles.idCard}>
              <img
                src={profileImg}
                alt="Profile Badge"
                style={styles.idPhoto}
              />
            </div>
          </div>
        </div>

        {/* Right Side: Text Content */}
        <div className="about-content">
          <h1 style={styles.title}>
            Hello There<span style={{ color: "#fff" }}>!</span>
          </h1>

          <p style={styles.introText}>
            I'm <span style={styles.cursiveName}>R.K. Hemanthika</span>, an AI Content Creator, AI Video Producer, and Ad Scriptwriter based in Chennai.
          </p>

          <p style={styles.bodyText}>
            I specialize in transforming complex ideas into engaging short-form videos, AI-generated visuals, and high-converting marketing content. From concept development to final delivery, I create content that blends creativity, storytelling, and AI-powered production to capture attention and drive results.
          </p>

          <p style={styles.bodyText}>
            With expertise in tools such as Veo, Sora, Adobe Firefly, ElevenLabs, Claude, Seedance 2.0, and other generative AI platforms, I produce videos, advertisements, social media campaigns, and branded content across multiple formats and platforms.
          </p>

          <p style={styles.bodyText}>
            With a strong focus on AI-powered content creation, I craft compelling videos, visuals, and ad campaigns that blend creativity with innovation. My goal is to create content that is not only visually engaging but also meaningful, impactful, and results-driven.
          </p>

          <p style={styles.bodyText}>
            By leveraging tools like Claude AI and ElevenLabs, I streamline production workflows and optimize content creation processes, reducing production time by 25–35% while maintaining high creative standards.
          </p>

          <p style={styles.bodyText}>
            Whether it's an AI-generated video, a product explainer, a social media campaign, or a performance-driven advertisement, I focus on creating content that connects with audiences, strengthens brand presence, and delivers measurable results.
          </p>
        </div>
      </div>

      {/* Bottom curve transition, matching the smooth single-arc reference */}
      <svg viewBox="0 0 1000 100" preserveAspectRatio="none" style={styles.tornEdge}>
        <path d="M0,0 C250,90 750,90 1000,0 L1000,100 L0,100 Z" fill="#FCF9F6" />
      </svg>
    </section>
  );
}

const filmHoleStyles = `
  @keyframes sway {
    0% { transform: rotate(-3deg); }
    100% { transform: rotate(3deg); }
  }

  .about-container {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 4;
    padding-top: 40px;
  }

  .about-lanyard {
    flex: 1 1 40%;
    min-height: clamp(400px, 60vh, 600px);
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .about-content {
    flex: 1 1 60%;
    padding: 6% 5% 5% 2%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  @media (max-width: 900px) {
    .about-container {
      flex-direction: column;
      padding-top: 20px;
    }
    .about-lanyard {
      min-height: 400px;
      margin-bottom: 20px;
    }
    .about-content {
      padding: 0 20px 40px 20px;
      text-align: center;
    }
    .about-content p {
      margin: 16px auto 0 auto;
    }
  }
`;

const styles = {
  section: {
    position: "relative",
    width: "100%",
    minHeight: "100vh",
    backgroundColor: "#a67843", /* Brown matching hero bottom */
    overflowX: "hidden",
    fontFamily: "'Arial', sans-serif",
    paddingBottom: "110px", /* space for bottom curve */
  },
  title: {
    fontFamily: "'Playfair Display', serif",
    fontSize: "clamp(36px, 6vw, 72px)",
    fontWeight: 700,
    color: "#f9f4eb", /* Cream */
    margin: 0,
    letterSpacing: "4px",
  },
  introText: {
    fontSize: "clamp(14px, 1.6vw, 20px)",
    lineHeight: 1.6,
    color: "#fdfdfd",
    maxWidth: "800px",
    marginTop: "20px",
    fontWeight: 500,
  },
  bodyText: {
    fontSize: "clamp(13px, 1.3vw, 16px)",
    lineHeight: 1.7,
    color: "#f3ead9",
    maxWidth: "780px",
    marginTop: "16px",
    fontWeight: 400,
  },
  cursiveName: {
    fontFamily: "'Brush Script MT', 'Comic Sans MS', cursive",
    fontSize: "1.4em",
    color: "#fdfdfd",
    fontWeight: 400,
  },
  tornEdge: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    height: "90px",
    display: "block",
    zIndex: 10,
  },
  badgeContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "-100px", /* Push up to look like it hangs from above */
    position: "relative",
    animation: "sway 4s ease-in-out infinite alternate",
    transformOrigin: "top center",
  },

  /* --- Redesigned strap: filmstrip ribbon instead of a plain rivet strap --- */
  strap: {
    width: "30px",
    height: "190px",
    backgroundColor: "#1c1a17",
    position: "relative",
    zIndex: 2,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 3px",
    boxShadow: "inset 0 0 0 1px rgba(249,244,235,0.08)",
  },
  filmHolesLeft: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    height: "100%",
  },
  filmHolesRight: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    height: "100%",
  },
  filmHole: {
    width: "6px",
    height: "6px",
    borderRadius: "2px",
    backgroundColor: "#f9f4eb",
    opacity: 0.85,
    display: "block",
  },
  strapCenterLabel: {
    writingMode: "vertical-rl",
    textOrientation: "mixed",
    fontFamily: "'Arial Black', sans-serif",
    fontSize: "9px",
    letterSpacing: "2px",
    color: "#a67843",
    fontWeight: 800,
  },

  /* --- Redesigned clip: clapperboard tab instead of a plain metal ring --- */
  clip: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "-4px",
    zIndex: 2,
  },
  clapTab: {
    width: "44px",
    height: "20px",
    backgroundColor: "#1c1a17",
    borderRadius: "3px",
    display: "flex",
    flexDirection: "row",
    overflow: "hidden",
    transform: "skewX(-12deg)",
    boxShadow: "0 3px 6px rgba(0,0,0,0.25)",
    marginBottom: "-8px",
  },
  clapStripe: {
    flex: 1,
    backgroundColor: "#f9f4eb",
    margin: "0 2px",
  },
  clipBase: {
    width: "14px",
    height: "26px",
    backgroundColor: "#1a1a1a",
    borderRadius: "0 0 6px 6px",
    zIndex: 3,
  },

  idCard: {
    width: "clamp(200px, 20vw, 260px)",
    height: "clamp(280px, 28vw, 360px)",
    backgroundColor: "#fff",
    borderRadius: "16px",
    overflow: "hidden",
    boxShadow: "0 15px 35px rgba(0,0,0,0.15), 0 5px 15px rgba(0,0,0,0.1)",
    marginTop: "-15px",
    zIndex: 4,
    display: "flex",
    alignItems: "stretch",
  },
  idPhoto: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "center top",
    display: "block",
    flexShrink: 0,
  }
};

/* Global sway animation is injected once via the <style> tag rendered in the component above. */

export default About;