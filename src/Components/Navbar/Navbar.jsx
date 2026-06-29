import React, { useState, useEffect } from "react";
import { FaYoutube, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Menu, X } from "lucide-react";
import logoImg from "../../assets/c.png";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScrollTo = (e, targetId) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false);
  };

  useEffect(() => {
    const checkScroll = () => {
      const container = document.querySelector(".fullpage-container");
      const scrollY = container ? container.scrollTop : window.scrollY;
      setScrolled(scrollY > 40);
    };

    const container = document.querySelector(".fullpage-container");
    if (container) {
      container.addEventListener("scroll", checkScroll, { passive: true });
    }
    // fallback for window scroll as well
    window.addEventListener("scroll", checkScroll, { passive: true });

    checkScroll(); // run once on mount
    return () => {
      if (container) container.removeEventListener("scroll", checkScroll);
      window.removeEventListener("scroll", checkScroll);
    };
  }, []);

  return (
    <header className={`navbar${scrolled ? " scrolled" : ""}`}>
      <style>{styles}</style>

      <div className="navbar-inner">
        {/* Logo */}
        <a href="#home" className="navbar-logo" style={{ display: 'flex', alignItems: 'center' }}>
          <img src={logoImg} alt="Hemanthika Portfolio" style={{ height: '46px', width: '46px', borderRadius: '50%', objectFit: 'cover' }} />
        </a>

        {/* Desktop nav links */}
        <nav className="navbar-links">
          {navLinks.map((link) => (
            <a 
              key={link.label} 
              href={link.href} 
              className="nav-link"
              onClick={(e) => handleScrollTo(e, link.href)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right side — socials + CTA */}
        <div className="navbar-right">
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/rk-hemanthika-74a765355?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noreferrer" className="social-icon" aria-label="LinkedIn">
              <FaLinkedinIn size={16} />
            </a>
          </div>
          <a href="#contact" className="hire-btn" onClick={(e) => handleScrollTo(e, '#contact')}>Hire Me</a>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="mobile-menu">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="mobile-link"
              onClick={(e) => handleScrollTo(e, link.href)}
            >
              {link.label}
            </a>
          ))}
          <div className="mobile-socials">
            <a href="https://www.linkedin.com/in/rk-hemanthika-74a765355?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noreferrer" className="social-icon"><FaLinkedinIn size={16} /></a>
          </div>
          <a href="#contact" className="hire-btn mobile-hire" onClick={(e) => handleScrollTo(e, '#contact')}>Hire Me</a>
        </div>
      )}
    </header>
  );
}

const styles = `
/* ===== NAVBAR ===== */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  padding: 0 60px;
  background: transparent;
  transition: background 0.4s cubic-bezier(0.4,0,0.2,1),
              box-shadow 0.4s ease,
              border-bottom 0.4s ease,
              padding 0.35s ease;
  box-sizing: border-box;
}

/* ─── Scrolled State ─── */
.navbar.scrolled {
  background: #ffffff;
  box-shadow: 0 6px 40px rgba(139, 90, 43, 0.14),
              0 1px 0 rgba(193, 143, 85, 0.18);
  border-bottom: 1.5px solid rgba(193, 143, 85, 0.2);
  padding: 0 60px;
}

.navbar-inner {
  max-width: 1400px;
  margin: 0 auto;
  height: 76px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  transition: height 0.35s cubic-bezier(0.4,0,0.2,1);
}

.navbar.scrolled .navbar-inner {
  height: 60px;
}

/* Logo */
.navbar-logo {
  font-family: 'Playfair Display', serif;
  font-size: 34px;
  font-weight: 900;
  color: #3b2c21;
  text-decoration: none;
  line-height: 1;
  letter-spacing: -1px;
  flex-shrink: 0;
  transition: font-size 0.3s ease, color 0.3s ease;
}

.navbar.scrolled .navbar-logo {
  font-size: 30px;
  color: #3b2c21;
}

.logo-dot {
  color: #C18F55;
}

/* Desktop nav links */
.navbar-links {
  display: flex;
  gap: 4px;
  align-items: center;
}

.nav-link {
  font-size: 14.5px;
  font-weight: 600;
  color: #3b2c21;
  text-decoration: none;
  padding: 9px 16px;
  border-radius: 10px;
  transition: color 0.25s ease, background 0.25s ease;
  position: relative;
  letter-spacing: 0.2px;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 5px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 2.5px;
  background: #C18F55;
  border-radius: 2px;
  transition: width 0.35s cubic-bezier(0.4,0,0.2,1);
}

.nav-link:hover {
  color: #8B5A2B;
  background: rgba(193, 143, 85, 0.07);
}

.nav-link:hover::after {
  width: 55%;
}

/* Right side */
.navbar-right {
  display: flex;
  align-items: center;
  gap: 16px;
  flex-shrink: 0;
}

.social-icons {
  display: flex;
  gap: 8px;
  align-items: center;
}

.social-icon {
  width: 34px;
  height: 34px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #8B5A2B;
  border: 1.5px solid rgba(139, 90, 43, 0.25);
  text-decoration: none;
  transition: all 0.3s ease;
  background: transparent;
}

.social-icon:hover {
  background: #8B5A2B;
  color: #ffffff;
  border-color: #8B5A2B;
  transform: translateY(-2px);
}

/* Hire Me button */
.hire-btn {
  padding: 10px 24px;
  background: #8B5A2B;
  color: #ffffff;
  font-size: 14px;
  font-weight: 700;
  border-radius: 10px;
  text-decoration: none;
  letter-spacing: 0.5px;
  transition: background 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease;
  box-shadow: 0 4px 16px rgba(139, 90, 43, 0.25);
  white-space: nowrap;
}

.hire-btn:hover {
  background: #694622;
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(139, 90, 43, 0.35);
}

/* Mobile toggle */
.menu-toggle {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  color: #3b2c21;
  padding: 4px;
}

/* Mobile dropdown */
.mobile-menu {
  background: rgba(252, 249, 246, 0.98);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  padding: 20px 40px 30px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  border-top: 1px solid rgba(139, 90, 43, 0.1);
  box-shadow: 0 8px 30px rgba(0,0,0,0.08);
}

.mobile-link {
  font-size: 16px;
  font-weight: 600;
  color: #3b2c21;
  text-decoration: none;
  padding: 12px 0;
  border-bottom: 1px solid rgba(139, 90, 43, 0.08);
  transition: color 0.2s ease;
}

.mobile-link:hover {
  color: #8B5A2B;
}

.mobile-socials {
  display: flex;
  gap: 10px;
  margin-top: 12px;
}

.mobile-hire {
  margin-top: 12px;
  text-align: center;
  border-radius: 12px;
  padding: 14px;
}

/* Responsive */
@media (max-width: 900px) {
  .navbar-links,
  .navbar-right {
    display: none;
  }
  .menu-toggle {
    display: block;
  }
}

@media (max-width: 480px) {
  .navbar {
    padding: 0 20px;
  }
  .mobile-menu {
    padding: 20px 20px 28px;
  }
}
`;
