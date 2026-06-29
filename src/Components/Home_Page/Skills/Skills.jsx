import React from "react";

const softwareSkills = [
  {
    id: 1,
    line1: "Ad Scriptwriting",
    line2: "Copywriting for Advertisements",
    iconText: "Ad",
    bg: "#00005b",
    color: "#ff3366"
  },
  {
    id: 2,
    line1: "AI Content Creation",
    line2: "Artificial Intelligence Content Creation",
    iconText: "Ai",
    bg: "#10a37f",
    color: "#ffffff"
  },
  {
    id: 3,
    line1: "SaaS Storytelling",
    line2: "Software as a Service Storytelling",
    iconText: "Ss",
    bg: "#001e36",
    color: "#31a8ff"
  },
  {
    id: 4,
    line1: "Video Editing",
    line2: "Post-Production & Motion",
    iconText: "Ve",
    bg: "#330000",
    color: "#ff9a00"
  },
  {
    id: 5,
    line1: "Lead Generation",
    line2: "Customer/Business Lead Generation",
    iconText: "Lg",
    bg: "#1a2327",
    color: "#f9a825"
  },
  {
    id: 6,
    line1: "Content Strategy",
    line2: "Content Planning & Strategy",
    iconText: "Cs",
    bg: "#4a148c",
    color: "#ea77ff"
  },
];

export default function Skills() {
  return (
    <section className="skills-section">
      <style>{styles}</style>
      {/* Background Pattern */}
      <div className="pattern-layer">

      </div>

      <div className="skills-container">
        <div className="left-column">
          <div className="vertical-text-wrapper">
            <h1 className="main-heading">SKILLS</h1>
            <p className="sub-heading">(Software & Tools)</p>
          </div>
        </div>

        <div className="right-column">
          <div className="skills-grid">
            {softwareSkills.map((skill) => (
              <div key={skill.id} className="skill-card">
                <div
                  className="app-icon"
                  style={{ backgroundColor: skill.bg, color: skill.color }}
                >
                  {skill.iconText}
                </div>
                <h3 className="card-title">{skill.line1}</h3>

              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const styles = `
.skills-section {
  background: #FCF9F6;
  height: auto;
  padding: 3rem 0;
  position: relative;
  overflow: hidden;
  font-family: 'Inter', sans-serif;
  width: 100%;
}

.pattern-layer {
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 400px;
  height: 600px;
  z-index: 0;
}

.skills-container {
  display: flex;
  width: 90%;
  max-width: 1100px;
  margin: 0 auto;
  gap: 4rem;
  position: relative;
  z-index: 1;
}

.left-column {
  width: 60px;
  display: flex;
  justify-content: center;
  padding-top: 20px;
}

.vertical-text-wrapper {
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  text-align: center;
  height: fit-content;
}

.main-heading {
  font-family: 'Playfair Display', serif;
  font-size: 56px;
  font-weight: 700;
  color: #3b2c21;
  margin: 0;
  letter-spacing: 4px;
  white-space: nowrap;
}

.sub-heading {
  font-size: 16px;
  color: #8B5A2B;
  margin: 20px 0 0 0;
  white-space: nowrap;
  font-weight: 500;
  letter-spacing: 1px;
}

.right-column {
  flex: 1;
  display: flex;
  align-items: center;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem 2rem;
  width: 100%;
}

.skill-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: transform 0.3s ease;
  cursor: pointer;
}

.skill-card:hover {
  transform: translateY(-8px);
}

.app-icon {
  width: 80px;
  height: 80px;
  border-radius: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.2rem;
  box-shadow: 0 8px 20px rgba(0,0,0,0.15);
  font-size: 38px;
  font-weight: 700;
  font-family: Arial, sans-serif;
  letter-spacing: -1px;
  transition: box-shadow 0.3s ease;
}

.skill-card:hover .app-icon {
  box-shadow: 0 12px 25px rgba(0,0,0,0.25);
}

.card-title {
  margin: 0 0 0.3rem 0;
  font-size: 16px;
  font-weight: 600;
  color: #5d534b;
}

.card-subtitle {
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  color: #5d534b;
}

/* Responsive Styles */
@media (max-width: 992px) {
  .skills-container {
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }
  .left-column {
    width: 100%;
    padding-top: 0;
  }
  .vertical-text-wrapper {
    writing-mode: horizontal-tb;
    transform: none;
  }
  .main-heading {
    letter-spacing: 2px;
  }
  .sub-heading {
    margin: 10px 0 0 0;
  }
  .pattern-layer {
    display: none;
  }
}

@media (max-width: 650px) {
  .skills-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem 1rem;
  }
  .app-icon {
    width: 65px;
    height: 65px;
    font-size: 30px;
    border-radius: 14px;
  }
  .card-title, .card-subtitle {
    font-size: 14px;
  }
}
`;