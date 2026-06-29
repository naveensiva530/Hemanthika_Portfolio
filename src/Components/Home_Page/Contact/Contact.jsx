import React, { useState } from "react";
import profileImg from "../../../assets/Hero.png";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    subject: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, number, subject } = formData;

    // Construct the email body
    const emailBody = `Name: ${name}%0D%0AEmail: ${email}%0D%0APhone: ${number}%0D%0A%0D%0A`;

    // Open the default email client
    window.location.href = `mailto:hemanthika74@gmail.com?subject=${encodeURIComponent(subject || 'New Contact Form Submission')}&body=${emailBody}`;

    // Optional: show alert and clear form
    alert("Redirecting to your email client...");
    setFormData({ name: "", email: "", number: "", subject: "" });
  };

  return (
    <section className="contact-section">
      <style>{styles}</style>

      <div className="contact-outer">
        <div className="contact-card">

          {/* LEFT — Image */}
          <div className="contact-left">
            <img src={profileImg} alt="Hemanthika" className="contact-img" />
          </div>

          {/* RIGHT — Form */}
          <div className="contact-right">
            <div className="badge-pill">
              <span className="badge-dot">✦</span> GET IN TOUCH NOW
            </div>

            <h2 className="contact-heading">
              Reach out or <span className="highlight">contact</span>
              <br /> me for more info!
            </h2>
            <p className="contact-sub">
              I'd love to hear from you! Whether you have a project idea, a question,
              or just want to say hello — drop me a message.
            </p>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name.."
                  value={formData.name}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email.."
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
              </div>
              <div className="form-row">
                <input
                  type="tel"
                  name="number"
                  placeholder="Your Number.."
                  value={formData.number}
                  onChange={handleChange}
                  className="form-input"
                />
                <input
                  type="text"
                  name="subject"
                  placeholder="Your Subjects.."
                  value={formData.subject}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>
              <button type="submit" className="send-btn">
                SEND MESSAGE
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}

const styles = `
.contact-section {
  width: 100%;
  padding: 80px 20px;
  background-color: #FFFFFF;
  font-family: 'Inter', sans-serif;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: auto;
}

.contact-outer {
  width: 100%;
  max-width: 980px;
  margin: 0 auto;
}

.contact-card {
  background: #a67843;
  border-radius: 28px;
  display: flex;
  align-items: stretch;
  overflow: hidden;
 
  min-height: 440px;
}

/* LEFT — image side */
.contact-left {
  width: 44%;
  flex-shrink: 0;
  position: relative;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  overflow: hidden;
  background: #a67843;
  border-radius: 28px 0 0 28px;
}

.contact-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: bottom center;
  display: block;
}

/* RIGHT — form side */
.contact-right {
  flex: 1;
  padding: 48px 44px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
}

/* Badge pill */
.badge-pill {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(0,0,0,0.18);
  border: none;
  color: rgba(255,255,255,0.85);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 2px;
  padding: 9px 20px;
  border-radius: 999px;
  width: fit-content;
  text-transform: uppercase;
}

.badge-dot {
  color: rgba(255,255,255,0.6);
  font-size: 12px;
}

/* Main heading */
.contact-heading {
  font-family: 'Playfair Display', serif;
  font-size: 56px;
  font-weight: 700;
  color: #ffffff;
  line-height: 1.25;
  margin: 0;
  letter-spacing: 4px;
}

/* Italic light gold "contact" word */
.highlight {
  color: #f5d8a0;
  font-style: italic;
  font-weight: 700;
}

/* Sub description */
.contact-sub {
  font-size: 13.5px;
  color: rgba(255,255,255,0.72);
  line-height: 1.65;
  margin: 0;
  max-width: 420px;
}

/* Form layout */
.contact-form {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 4px;
}

.form-row {
  display: flex;
  gap: 12px;
}

/* Inputs — semi-transparent on the golden bg */
.form-input {
  flex: 1;
  padding: 14px 18px;
  background: rgba(0,0,0,0.15);
  border: none;
  border-radius: 10px;
  color: #ffffff;
  font-size: 14px;
  font-family: 'Inter', sans-serif;
  outline: none;
  transition: background 0.3s ease;
  min-width: 0;
}

.form-input::placeholder {
  color: rgba(255,255,255,0.5);
}

.form-input:focus {
  background: rgba(0,0,0,0.25);
  outline: 2px solid rgba(255,255,255,0.3);
}

/* SEND MESSAGE — white button with dark brown text */
.send-btn {
  width: fit-content;
  padding: 15px 36px;
  background: #ffffff;
  color: #7a5520;
  font-size: 13px;
  font-weight: 800;
  letter-spacing: 2px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease;
  box-shadow: 0 4px 18px rgba(0,0,0,0.15);
  text-transform: uppercase;
  margin-top: 4px;
}

.send-btn:hover {
  background: #f5e8d0;
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(0,0,0,0.2);
}

/* Responsive */
@media (max-width: 768px) {
  .contact-card {
    flex-direction: column;
  }
  .contact-left {
    width: 100%;
    height: 280px;
    border-radius: 28px 28px 0 0;
  }
  .contact-right {
    padding: 36px 28px;
  }
  .contact-heading {
    font-size: 26px;
  }
  .form-row {
    flex-direction: column;
    gap: 12px;
}

@media (max-width: 480px) {
  .contact-section {
    padding: 40px 15px;
  }
  .contact-right {
    padding: 28px 20px;
  }
  .contact-left {
    height: 260px;
  }
  .contact-heading {
    font-size: 24px;
    letter-spacing: 2px;
  }
  .send-btn {
    width: 100%;
    text-align: center;
  }
}
`;
