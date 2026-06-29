import React, { useState } from 'react';
import faqImg from '../../../assets/FAQ.png';

const faqData = [
  {
    question: "What makes you different from other AI Content Creators?",
    answer: "I don't just generate content with AI tools. I build complete content experiences. From strategy, scripting, and storytelling to AI video creation, voice-over coordination, design, and final delivery, I combine creativity with technology to produce content that connects with audiences and drives results."
  },
  {
    question: "What services do you specialize in?",
    answer: "I specialize in AI powered video creation, scriptwriting, ad creatives, social media content, poster design, voice-over coordination, and end-to-end content production."
  },
  {
    question: "Can you manage an entire project independently?",
    answer: "Yes. I handle the complete workflow from concept development and research to scripting, AI generation, editing, revisions, and final delivery ensuring consistency and quality throughout the project."
  },
  {
    question: "How do you ensure every piece of content stands out?",
    answer: "Every project begins with understanding the audience, objective, and brand voice. I then combine storytelling, creative direction, and advanced AI tools to create content that is engaging, relevant, and memorable."
  },
  {
    question: "Which tools and technologies do you work with?",
    answer: "I leverage leading AI and creative tools including ChatGPT, Gemini, Claude, Microsoft Copilot, Veo 3, Sora, Kling, Seedance 2.0, Adobe Firefly, Canva, Adobe premiere pro, and other industry-standard platforms."
  },
  {
    question: "What is your mission as an AI Content Creator?",
    answer: "My mission is to bridge creativity and technology, transforming ideas into impactful content that informs, inspires, and leaves a lasting impression."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-wrapper">
      <div className="faq-container">
        {/* Left Side - Image */}
        <div className="faq-left">
          <div className="faq-image-wrapper">
            <img
              src={faqImg}
              alt="FAQ Illustration"
              className="faq-image"
            />
          </div>
        </div>

        {/* Right Side - FAQ */}
        <div className="faq-right">
          <div style={styles.header}>
            <span style={styles.kicker}>FAQ</span>
            <h2 style={styles.heading}>Got Questions?</h2>
            <p style={styles.subheading}>Everything you need to know about my services</p>
          </div>

          <div style={styles.faqList}>
            {faqData.map((item, index) => (
              <div
                key={index}
                style={{
                  ...styles.faqItem,
                  ...(openIndex === index ? styles.faqItemOpen : {})
                }}
                onClick={() => toggleFAQ(index)}
              >
                <div style={styles.questionRow}>
                  <div style={styles.numberBadge}>{(index + 1).toString().padStart(2, '0')}</div>
                  <h3 style={styles.question}>{item.question}</h3>
                  <div style={{
                    ...styles.toggleIcon,
                    ...(openIndex === index ? styles.toggleIconOpen : {})
                  }}>
                    <span style={styles.toggleLine}></span>
                    <span style={{
                      ...styles.toggleLineVertical,
                      ...(openIndex === index ? { display: 'none' } : {})
                    }}></span>
                  </div>
                </div>

                <div style={{
                  ...styles.answerBox,
                  ...(openIndex === index ? styles.answerBoxOpen : {})
                }}>
                  <p style={styles.answer}>{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap');
        
        .faq-wrapper {
          min-height: 100vh;
          padding: 5rem 3rem;
          background: #FFFFFF;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .faq-container {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 5rem;
          max-width: 1200px;
          width: 100%;
        }
        .faq-left {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .faq-image-wrapper {
          width: 100%;
          max-width: 550px;
        }
        .faq-image {
          width: 100%;
          height: auto;
          object-fit: cover;
        }
        .faq-right {
          flex: 1.2;
          max-width: 600px;
          width: 100%;
        }

        @media (max-width: 900px) {
          .faq-container {
            flex-direction: column;
            gap: 3rem;
          }
          .faq-left, .faq-right {
            width: 100%;
            max-width: 100%;
          }
          .faq-wrapper {
            padding: 4rem 2rem;
          }
          .faq-image-wrapper {
            max-width: 400px;
          }
        }

        @media (max-width: 480px) {
          .faq-wrapper {
            padding: 3rem 1.25rem;
          }
          .faq-image-wrapper {
            max-width: 300px;
          }
        }
      `}</style>
    </div>
  );
};

const styles = {
  header: {
    marginBottom: "2.5rem",
    textAlign: "left",
  },
  kicker: {
    display: "inline-block",
    fontSize: "12px",
    fontWeight: "700",
    color: "#A67C44",
    textTransform: "uppercase",
    letterSpacing: "3px",
    marginBottom: "0.75rem",
    padding: "6px 14px",
    background: "rgba(166,124,68,0.1)",
    borderRadius: "20px",
  },
  heading: {
    fontSize: "clamp(36px, 6vw, 56px)",
    fontWeight: "700",
    color: "#1a1a1a",
    margin: "0 0 0.75rem 0",
    fontFamily: "'Playfair Display', serif",
    letterSpacing: "4px",
  },
  subheading: {
    fontSize: "1.05rem",
    color: "rgba(60,60,60,0.7)",
    margin: 0,
    fontFamily: "'Outfit', sans-serif",
    fontWeight: "400",
  },
  // FAQ List
  faqList: {
    display: "flex",
    flexDirection: "column",
    gap: "0.75rem",
  },
  // FAQ Item
  faqItem: {
    background: "#F5F5F5",
    borderRadius: "12px",
    padding: "1.25rem 1.5rem",
    cursor: "pointer",
    border: "1px solid #E5E5E5",
    transition: "all 0.3s ease",
  },
  faqItemOpen: {
    background: "#FFFFFF",
    border: "1px solid #A67C44",
    boxShadow: "0 4px 20px rgba(166,124,68,0.15)",
  },
  // Question Row
  questionRow: {
    display: "flex",
    alignItems: "center",
    gap: "1rem",
  },
  numberBadge: {
    minWidth: "36px",
    height: "36px",
    background: "linear-gradient(135deg, #A67C44 0%, #8B5A2B 100%)",
    borderRadius: "8px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "0.85rem",
    fontWeight: "700",
    color: "#FFFFFF",
    fontFamily: "'Outfit', sans-serif",
  },
  question: {
    flex: 1,
    fontSize: "1rem",
    fontWeight: "600",
    color: "#1a1a1a",
    fontFamily: "'Outfit', sans-serif",
    lineHeight: "1.4",
  },
  // Toggle Icon
  toggleIcon: {
    width: "28px",
    height: "28px",
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "transform 0.3s ease",
    flexShrink: 0,
  },
  toggleIconOpen: {
    transform: "rotate(90deg)",
  },
  toggleLine: {
    position: "absolute",
    width: "16px",
    height: "2px",
    background: "#A67C44",
    borderRadius: "1px",
  },
  toggleLineVertical: {
    position: "absolute",
    width: "2px",
    height: "16px",
    background: "#A67C44",
    borderRadius: "1px",
  },
  // Answer Box
  answerBox: {
    maxHeight: "0",
    overflow: "hidden",
    transition: "all 0.4s ease",
    opacity: 0,
  },
  answerBoxOpen: {
    maxHeight: "200px",
    opacity: 1,
    marginTop: "1rem",
    paddingTop: "1rem",
    borderTop: "1px solid #E5E5E5",
  },
  answer: {
    fontSize: "0.9rem",
    color: "rgba(60,60,60,0.8)",
    fontFamily: "'Outfit', sans-serif",
    lineHeight: "1.7",
    paddingLeft: "clamp(1rem, 4vw, 3.25rem)",
    margin: 0,
  },
};

export default FAQ;