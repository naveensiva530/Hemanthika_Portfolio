import React from "react";
import { FaYoutube, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Mail, Phone, MapPin, Heart } from "lucide-react";

const footerLinks = [
  {
    heading: "Navigation",
    links: [
      { label: "Home", href: "#home" },
      { label: "About", href: "#about" },
      { label: "Skills", href: "#skills" },
      { label: "Services", href: "#services" },
    ],
  },
  {
    heading: "Work",
    links: [
      { label: "Projects", href: "#projects" },
      { label: "Testimonials", href: "#testimonials" },
      { label: "FAQ", href: "#faq" },
      { label: "Contact", href: "#contact" },
    ],
  },
];

const socials = [
  { icon: <FaLinkedinIn size={18} />, href: "https://www.linkedin.com/in/rk-hemanthika-74a765355?utm_source=share_via&utm_content=profile&utm_medium=member_android", label: "LinkedIn" },
];

const contactInfo = [
  { icon: <Mail size={15} />, text: "hemanthika74@gmail.com" },
  { icon: <Phone size={15} />, text: "+91 9445415067" },
  { icon: <MapPin size={15} />, text: "Tamil Nadu, India" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer reveal-section">
      <style>{styles}</style>



      <div className="footer-body">
        <div className="footer-inner">

          {/* Brand column */}
          <div className="footer-brand">
            <a href="#home" className="footer-logo">
              H<span className="logo-dot">.</span>
            </a>
            <p className="footer-tagline">
              AI Video Creator crafting powerful stories through cutting-edge technology.
              Let's create something extraordinary together.
            </p>
            <div className="footer-socials">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="footer-social-icon"
                  aria-label={s.label}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Nav link columns */}
          {footerLinks.map((col) => (
            <div className="footer-col" key={col.heading}>
              <h4 className="footer-col-heading">{col.heading}</h4>
              <ul className="footer-col-list">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="footer-link" onClick={(e) => {
                      e.preventDefault();
                      const target = document.querySelector(link.href);
                      if (target) {
                        target.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}>
                      <span className="link-arrow">→</span> {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact info column */}
          <div className="footer-col">
            <h4 className="footer-col-heading">Get In Touch</h4>
            <ul className="footer-contact-list">
              {contactInfo.map((item, i) => (
                <li key={i} className="footer-contact-item">
                  <span className="contact-icon">{item.icon}</span>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
            <a href="#contact" className="footer-cta" onClick={(e) => {
              e.preventDefault();
              const target = document.querySelector('#contact');
              if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
              }
            }}>
              Send a Message
            </a>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <div className="footer-bottom-inner">
          <p className="footer-copy">
            © {year} Hemanthika. All rights reserved.
          </p>
          <p className="footer-made-with">
            Made with <Heart size={13} className="heart-icon" /> passion & AI
          </p>
        </div>
      </div>
    </footer>
  );
}

const styles = `
/* ===== FOOTER ===== */
.footer {
  background: #3b2c21;
  position: relative;
  font-family: 'Inter', sans-serif;
  scroll-snap-align: start;
}


.footer-body {
  padding: 60px 20px 40px;
}

.footer-inner {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1.5fr;
  gap: 50px;
}

/* Brand column */
.footer-brand {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.footer-logo {
  font-family: 'Playfair Display', serif;
  font-size: 40px;
  font-weight: 900;
  color: #EBE0D2;
  text-decoration: none;
  line-height: 1;
  letter-spacing: -1px;
}

.logo-dot {
  color: #C18F55;
}

.footer-tagline {
  font-size: 14px;
  color: rgba(235, 224, 210, 0.65);
  line-height: 1.7;
  margin: 0;
  max-width: 280px;
}

.footer-socials {
  display: flex;
  gap: 10px;
  margin-top: 4px;
}

.footer-social-icon {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #EBE0D2;
  border: 1.5px solid rgba(235, 224, 210, 0.2);
  text-decoration: none;
  transition: all 0.3s ease;
  background: transparent;
}

.footer-social-icon:hover {
  background: #C18F55;
  color: #ffffff;
  border-color: #C18F55;
  transform: translateY(-3px);
  box-shadow: 0 6px 18px rgba(193, 143, 85, 0.4);
}

/* Nav link columns */
.footer-col {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.footer-col-heading {
  font-size: 13px;
  font-weight: 700;
  color: #C18F55;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin: 0;
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(235, 224, 210, 0.1);
}

.footer-col-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.footer-link {
  font-size: 14px;
  color: rgba(235, 224, 210, 0.65);
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: color 0.25s ease, gap 0.25s ease;
}

.link-arrow {
  font-size: 12px;
  color: #C18F55;
  transition: transform 0.25s ease;
}

.footer-link:hover {
  color: #EBE0D2;
  gap: 12px;
}

.footer-link:hover .link-arrow {
  transform: translateX(3px);
}

/* Contact info */
.footer-contact-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.footer-contact-item {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  color: rgba(235, 224, 210, 0.65);
}

.contact-icon {
  color: #C18F55;
  flex-shrink: 0;
  display: flex;
  align-items: center;
}

/* CTA button */
.footer-cta {
  display: inline-flex;
  align-items: center;
  padding: 12px 24px;
  background: #C18F55;
  color: #ffffff;
  font-size: 13px;
  font-weight: 700;
  border-radius: 10px;
  text-decoration: none;
  letter-spacing: 0.5px;
  transition: background 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease;
  box-shadow: 0 4px 16px rgba(193, 143, 85, 0.3);
  margin-top: 4px;
  width: fit-content;
}

.footer-cta:hover {
  background: #A67C44;
  transform: translateY(-2px);
  box-shadow: 0 8px 22px rgba(193, 143, 85, 0.4);
}

/* Bottom bar */
.footer-bottom {
  background: rgba(0,0,0,0.2);
  padding: 18px 20px;
}

.footer-bottom-inner {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.footer-copy {
  font-size: 13px;
  color: rgba(235, 224, 210, 0.5);
  margin: 0;
}

.footer-made-with {
  font-size: 13px;
  color: rgba(235, 224, 210, 0.5);
  margin: 0;
  display: flex;
  align-items: center;
  gap: 5px;
}

.heart-icon {
  color: #C18F55;
  fill: #C18F55;
  display: inline-flex;
  vertical-align: middle;
}

/* Responsive */
@media (max-width: 1024px) {
  .footer-inner {
    grid-template-columns: 1fr 1fr;
    gap: 40px;
  }
  .footer-brand {
    grid-column: 1 / -1;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 20px;
    align-items: flex-start;
  }
  .footer-tagline {
    max-width: 100%;
  }
}

@media (max-width: 640px) {
  .footer-inner {
    grid-template-columns: 1fr;
    gap: 30px;
  }
  .footer-brand {
    flex-direction: column;
    grid-column: auto;
  }
  .footer-bottom-inner {
    flex-direction: column;
    gap: 8px;
    text-align: center;
  }
  .footer-body {
    padding: 50px 20px 30px;
  }
}
`;
