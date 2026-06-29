import React from "react";
import img1 from "../../../assets/marketing campaign.webp";
import img2 from "../../../assets/Client portfolio.webp";
import img3 from "../../../assets/Innovative vault.webp";
import img4 from "../../../assets/Project showcase.webp";
import img5 from "../../../assets/Production house.webp";
import img6 from "../../../assets/Narrative studio.webp";
import img7 from "../../../assets/Design vault.webp";
import img8 from "../../../assets/Creative huh.webp";

const initialProjects = [
  { n: "01", title: "Brand Campaigns", label: "No Qu Project", drive: "https://drive.google.com/drive/folders/1ZGgEty03k3Mx60tFPC26zclYTe4qB64-", image: img1 },
  { n: "02", title: "Client Portfolio", label: "Freelance", drive: "https://drive.google.com/drive/folders/1TEnJZgu2P8RtrCtyh1-AHmDb1-K5VBZE", image: img2 },
  { n: "03", title: "Innovation Vault", label: "Ideas", drive: "https://drive.google.com/drive/folders/12GEFNjoGLLEjkMEUy0QUMLRaJWauoMlN", image: img3 },
  { n: "04", title: "Project Showcase", label: "Project", drive: "https://drive.google.com/drive/folders/1dQfOybYp46Pxc3_HF3oo_YIN3d4mkSEw", image: img4 },
  { n: "05", title: "Production House", label: "Manual Shoot", drive: "https://drive.google.com/drive/folders/1o1_-ih1WZr9bTx8dIRAiIzujfRMbRVJz", image: img5 },
  { n: "06", title: "Narrative Studio", label: "Script", drive: "https://drive.google.com/drive/folders/1wv1alYu2KVO-QX8xadky1WYju29zZbc7", image: img6 },
  { n: "07", title: "Design Vault", label: "Posters", drive: "https://drive.google.com/drive/folders/1hDnCjULxgUPwVRlW--IMS4kmi-u-u1nf", image: img7 },
  { n: "08", title: "Creative Lab", label: "Concept", drive: "https://drive.google.com/drive/folders/15k5cfNrOvNcKQpSpTbh_JkdQ9C3hTIJg", image: img8 },
];

export default function Project() {
  return (
    <div style={styles.wrapper}>
      {/* ── Header ── */}
      <div style={styles.header}>
        <p style={styles.kicker}>Portfolio</p>
        <h1 style={styles.heading}>Projects</h1>
        <div style={styles.underline} />
      </div>

      {/* ── Grid — Responsive ── */}
      <div className="project-grid">
        {initialProjects.map((p) => (
          <Card
            key={p.n}
            project={p}
            image={p.image}
          />
        ))}
      </div>

      <style>{cardCSS}</style>
    </div>
  );
}

function Card({ project, image }) {
  return (
    <div className="pcard">
      <img className="pcard-img" src={image} alt={project.title} />
      <div className="pcard-shade" />

      <span className="pcard-num">{project.n}</span>

      <div className="pcard-overlay">
        <span className="pcard-overlay-label">{project.label}</span>
        <span className="pcard-overlay-title">{project.title}</span>
        <a
          href={project.drive}
          target="_blank"
          rel="noopener noreferrer"
          className="pcard-drive-btn"
        >
          Open in Drive ↗
        </a>
      </div>
    </div>
  );
}

const cardCSS = `
  .project-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    max-width: 1200px;
    margin: 0 auto;
    position: relative;
    z-index: 1;
  }

  @media (max-width: 1024px) {
    .project-grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media (max-width: 768px) {
    .project-grid {
      grid-template-columns: repeat(2, 1fr);
      gap: 16px;
    }
  }

  @media (max-width: 480px) {
    .project-grid {
      grid-template-columns: repeat(1, 1fr);
      gap: 24px;
      padding: 0 20px;
    }
  }

  .pcard {
    position: relative;
    width: 100%;
    aspect-ratio: 4 / 5;
    background: #ede5d8;
    border-radius: 18px;
    overflow: hidden;
    cursor: pointer;
    box-shadow: 0 6px 18px rgba(59,42,24,0.12);
    transition: transform 0.45s cubic-bezier(0.22,1,0.36,1),
                box-shadow 0.45s cubic-bezier(0.22,1,0.36,1);
  }
  .pcard:hover {
    transform: translateY(-6px) scale(1.03);
    box-shadow: 0 16px 32px rgba(59,42,24,0.22);
  }

  .pcard-img {
    width: 100%; height: 100%;
    object-fit: cover; display: block;
    transition: transform 0.6s cubic-bezier(0.22,1,0.36,1);
  }
  .pcard:hover .pcard-img { transform: scale(1.08); }

  .pcard-shade {
    position: absolute; inset: 0;
    background: linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 45%);
    pointer-events: none;
  }

  .pcard-empty {
    width: 100%; height: 100%;
    display: flex; flex-direction: column;
    align-items: center; justify-content: center;
    gap: 8px; cursor: pointer;
  }
  .pcard-empty-label {
    font-family: sans-serif; font-size: 11px;
    letter-spacing: 1.5px; text-transform: uppercase;
    color: #A67C44;
  }

  .pcard-num {
    position: absolute; bottom: 12px; left: 14px;
    color: #fff; font-family: sans-serif;
    font-size: 11px; font-weight: 600; letter-spacing: 1px;
    z-index: 2; opacity: 0.9;
    transition: opacity 0.35s ease;
  }
  .pcard:hover .pcard-num { opacity: 0; }

  .pcard::before, .pcard::after {
    content: ""; position: absolute;
    width: 18%; height: 18%;
    background: rgba(166,124,68,0.92);
    z-index: 2;
    transition: width 0.55s cubic-bezier(0.22,1,0.36,1),
                height 0.55s cubic-bezier(0.22,1,0.36,1),
                border-radius 0.55s cubic-bezier(0.22,1,0.36,1);
    pointer-events: none;
  }
  .pcard::before { top: 0; right: 0; border-radius: 0 18px 0 100%; }
  .pcard::after  { bottom: 0; left: 0; border-radius: 0 100% 0 18px; }
  .pcard:hover::before, .pcard:hover::after {
    width: 100%; height: 100%; border-radius: 18px;
  }

  .pcard-overlay {
    position: absolute; inset: 0;
    display: flex; flex-direction: column;
    align-items: center; justify-content: center;
    gap: 6px; z-index: 3;
    opacity: 0;
    transition: opacity 0.4s ease 0.12s;
  }
  .pcard:hover .pcard-overlay { opacity: 1; }

  .pcard-overlay-label {
    font-family: sans-serif; font-size: 10px; font-weight: 600;
    color: rgba(255,248,236,0.7); letter-spacing: 2px;
    text-transform: uppercase;
    transform: translateY(8px);
    transition: transform 0.4s ease 0.08s;
  }
  .pcard:hover .pcard-overlay-label { transform: translateY(0); }

  .pcard-overlay-title {
    font-family: serif; font-size: 16px; font-weight: 600;
    color: #fff8ec; letter-spacing: 0.3px;
    transform: translateY(8px);
    transition: transform 0.4s ease 0.12s;
  }
  .pcard:hover .pcard-overlay-title { transform: translateY(0); }

  .pcard-drive-btn {
    background: rgba(255,248,236,0.18);
    border: 1.5px solid rgba(255,248,236,0.75);
    color: #fff8ec;
    font-family: sans-serif; font-size: 10px;
    font-weight: 700; letter-spacing: 1.2px;
    text-transform: uppercase;
    padding: 6px 14px; border-radius: 24px;
    cursor: pointer; margin-top: 4px;
    transform: translateY(8px);
    transition: transform 0.4s ease 0.16s, background 0.2s;
  }
  .pcard:hover .pcard-drive-btn { transform: translateY(0); }
  .pcard-drive-btn:hover { background: rgba(255,248,236,0.32); }
`;

const styles = {
  wrapper: {
    background: "#fff",
    minHeight: "100vh",
    padding: "clamp(2rem, 5vw, 3rem) clamp(1rem, 3vw, 2rem)",
    fontFamily: "serif",
    position: "relative",
    overflow: "hidden",
  },
  header: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: "2.5rem",
    position: "relative",
    zIndex: 1,
  },
  kicker: {
    fontFamily: "sans-serif",
    fontSize: "11px",
    letterSpacing: "3px",
    color: "#A67C44",
    textTransform: "uppercase",
    margin: "0 0 6px",
  },
  heading: {
    fontFamily: "'Playfair Display', serif",
    fontSize: "clamp(36px, 6vw, 56px)",
    fontWeight: 700,
    color: "#3B2A18",
    margin: 0,
    letterSpacing: "4px",
  },
  underline: {
    width: "48px",
    height: "3px",
    background: "#A67C44",
    borderRadius: "2px",
    marginTop: "14px",
  },

  modalBg: {
    position: "fixed",
    inset: 0,
    background: "rgba(30,18,8,0.55)",
    zIndex: 999,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  modal: {
    background: "#fff",
    borderRadius: "20px",
    padding: "2.5rem 3rem",
    textAlign: "center",
    position: "relative",
    minWidth: "300px",
    boxShadow: "0 24px 64px rgba(30,18,8,0.28)",
  },
  modalClose: {
    position: "absolute",
    top: "14px",
    right: "16px",
    background: "none",
    border: "none",
    fontSize: "18px",
    color: "#b8956a",
    cursor: "pointer",
  },
  modalIcon: { marginBottom: "12px" },
  modalTitle: {
    fontFamily: "serif",
    fontSize: "22px",
    fontWeight: 600,
    color: "#3B2A18",
    margin: "0 0 4px",
  },
  modalLabel: {
    fontFamily: "sans-serif",
    fontSize: "11px",
    letterSpacing: "2px",
    textTransform: "uppercase",
    color: "#A67C44",
    margin: "0 0 10px",
  },
  modalSub: {
    fontFamily: "sans-serif",
    fontSize: "13px",
    color: "#8a6a44",
    margin: "0 0 22px",
  },
  driveBtn: {
    display: "inline-block",
    background: "#A67C44",
    color: "#fff",
    fontFamily: "sans-serif",
    fontSize: "14px",
    fontWeight: 700,
    letterSpacing: "0.5px",
    padding: "11px 28px",
    borderRadius: "30px",
    textDecoration: "none",
    transition: "background 0.2s",
  },
};