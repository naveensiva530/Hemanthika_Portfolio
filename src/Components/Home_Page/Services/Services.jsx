import React, { useState, useEffect } from 'react';
import { Video, Edit3, MonitorPlay, Palette, Mic, Camera, TrendingUp, RefreshCw, ChevronLeft, ChevronRight } from 'lucide-react';

const servicesData = [
  {
    id: "01",
    icon: <Video size={40} strokeWidth={1.5} />,
    title: "AI Video Creation",
    desc: "End-to-end AI-powered video creation. From concept to render, using Sora and Veo for high-impact visual storytelling.",
    theme: { dark: "#8B5A2B" }
  },
  {
    id: "02",
    icon: <Edit3 size={40} strokeWidth={1.5} />,
    title: "Scriptwriting",
    desc: "High-converting ad scripts crafted for social media and product launches. Hooks, arcs, and CTAs that convert.",
    theme: { dark: "#A67C44" }
  },
  {
    id: "03",
    icon: <MonitorPlay size={40} strokeWidth={1.5} />,
    title: "Social Media",
    desc: "Platform-specific content strategies for Instagram, LinkedIn, and YouTube. Data-backed growth frameworks.",
    theme: { dark: "#694622" }
  },
  {
    id: "04",
    icon: <Palette size={40} strokeWidth={1.5} />,
    title: "Creative Design",
    desc: "Stunning AI-generated imagery and brand assets, blending creative direction with cutting-edge models.",
    theme: { dark: "#C18F55" }
  },
  {
    id: "05",
    icon: <Mic size={40} strokeWidth={1.5} />,
    title: "Voice-over & Audio",
    desc: "Professional-grade AI voiceover scripting, training, and integration into your video assets.",
    theme: { dark: "#936B46" }
  },
  {
    id: "06",
    icon: <Camera size={40} strokeWidth={1.5} />,
    title: "Prod. Support",
    desc: "Assisting with shoots, creative planning, and production workflows to ensure seamless execution.",
    theme: { dark: "#52361B" }
  },
  {
    id: "07",
    icon: <TrendingUp size={40} strokeWidth={1.5} />,
    title: "AI Ad Creatives",
    desc: "Innovative, high-performing ad creatives optimized for marketing campaigns and conversion.",
    theme: { dark: "#8B5A2B" }
  },
  {
    id: "08",
    icon: <RefreshCw size={40} strokeWidth={1.5} />,
    title: "Full Production",
    desc: "Handling the complete process from concept, research, and scripting to creation and final delivery.",
    theme: { dark: "#A67C44" }
  }
];

const Services = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(4);
  const totalItems = servicesData.length;

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 650) {
        setItemsPerPage(1);
      } else if (window.innerWidth <= 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(4);
      }
    };
    handleResize(); // Initialize on mount
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Ensure currentIndex is within bounds if screen resizes
  useEffect(() => {
    if (currentIndex > totalItems - itemsPerPage) {
      setCurrentIndex(Math.max(0, totalItems - itemsPerPage));
    }
  }, [itemsPerPage, currentIndex, totalItems]);

  const nextSlide = () => {
    if (currentIndex < totalItems - itemsPerPage) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  // CSS variables calculated for the dynamic track width and transform
  const trackWidth = `${(totalItems / itemsPerPage) * 100}%`;
  const transformX = `translateX(-${currentIndex * (100 / totalItems)}%)`;

  return (
    <section className="services-section">
      <style>{styles}</style>

      <div className="services-container">
        {/* Header */}
        <div className="services-header">
          <h2>My Services</h2>
          <p>What I offer to bring your ideas to life</p>
        </div>

        {/* Carousel */}
        <div className="carousel-wrapper">
          <button 
            className="carousel-btn prev-btn" 
            onClick={prevSlide} 
            disabled={currentIndex === 0}
          >
            <ChevronLeft size={24} />
          </button>
          
          <div className="carousel-viewport">
            <div 
              className="carousel-track" 
              style={{ 
                width: trackWidth, 
                transform: transformX 
              }}
            >
              {servicesData.map((service, index) => (
                <div key={index} className="carousel-item-wrapper">
                  <a
                    href={`#service-${service.id}`}
                    className="service-card"
                    style={{ '--theme-color': service.theme.dark }}
                  >
                    <div className="card-icon" style={{ color: service.theme.dark }}>
                      {service.icon}
                    </div>

                    <h3 className="service-title">{service.title}</h3>
                    <p className="service-desc">{service.desc}</p>
                  </a>
                </div>
              ))}
            </div>
          </div>

          <button 
            className="carousel-btn next-btn" 
            onClick={nextSlide} 
            disabled={currentIndex === totalItems - itemsPerPage}
          >
            <ChevronRight size={24} />
          </button>
        </div>

      </div>
    </section>
  );
};

const styles = `
.services-section {
  width: 100%;
  padding: 80px 0;
  background-color: #8B5A2B;
  font-family: 'Inter', sans-serif;
  overflow: hidden;
  position: relative;
}

.services-container {
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 10;
}

.services-header {
  text-align: center;
  margin-bottom: 70px;
}

.services-header h2 {
  font-family: 'Playfair Display', serif;
  font-size: 56px;
  font-weight: 700;
  color: #FFFFFF;
  margin-bottom: 10px;
  letter-spacing: 4px;
}

.services-header p {
  font-size: 18px;
  color: #EBE0D2;
}

/* --- Carousel Layout --- */

.carousel-wrapper {
  display: flex;
  align-items: center;
  gap: 15px; /* Spacing between arrows and cards */
  width: 100%;
}

.carousel-viewport {
  flex: 1;
  overflow: hidden;
  padding: 20px 0; /* Padding allows hover shadow to not be clipped */
}

.carousel-track {
  display: flex;
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.carousel-item-wrapper {
  /* Width is perfectly calculated to be 1/8th of track width */
  width: calc(100% / 8); 
  padding: 0 15px; /* Creates exactly 30px gap between cards */
  box-sizing: border-box;
}

/* --- Arrow Buttons --- */
.carousel-btn {
  background: #ffffff;
  border: 1px solid #EBE0D2;
  color: #8B5A2B;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
  flex-shrink: 0;
}

.carousel-btn:hover:not(:disabled) {
  background: #EBE0D2;
  transform: scale(1.05);
}

.carousel-btn:disabled {
  opacity: 0.4;
  cursor: not-allowed;
  box-shadow: none;
}

/* --- Card Styles --- */

.service-card {
  position: relative;
  background: #ffffff;
  border-radius: 24px;
  padding: 40px 30px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  transition: transform 0.4s ease, box-shadow 0.4s ease;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-decoration: none;
  z-index: 2;
  height: 100%;
  box-sizing: border-box;
}

/* Animated Corner Borders */
.service-card::before, 
.service-card::after {
  content: '';
  position: absolute;
  box-sizing: border-box;
  border-radius: 24px;
  transition: width 0.5s cubic-bezier(0.4, 0, 0.2, 1), height 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  pointer-events: none;
}

.service-card::before {
  top: 0; left: 0;
  width: 50px; height: 50px;
  border-top: 4px solid var(--theme-color);
  border-left: 4px solid var(--theme-color);
}

.service-card::after {
  bottom: 0; right: 0;
  width: 50px; height: 50px;
  border-bottom: 4px solid var(--theme-color);
  border-right: 4px solid var(--theme-color);
}

/* On hover, expand the corners to draw a full border! */
.service-card:hover::before,
.service-card:hover::after {
  width: 100%;
  height: 100%;
}

.service-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 25px 45px rgba(0,0,0,0.25);
}

.card-icon {
  margin-bottom: 25px;
  transition: transform 0.4s ease;
}

.service-card:hover .card-icon {
  transform: scale(1.1);
}

.service-title {
  font-size: 20px;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 15px;
  line-height: 1.2;
}

.service-desc {
  font-size: 14px;
  color: #666;
  line-height: 1.6;
}

/* --- Responsive Styles --- */
@media (max-width: 650px) {
  .services-header h2 {
    font-size: 42px;
  }
  .carousel-wrapper {
    gap: 5px;
  }
  .carousel-btn {
    width: 40px;
    height: 40px;
  }
}
`;

export default Services;