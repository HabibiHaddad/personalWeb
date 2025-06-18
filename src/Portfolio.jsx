import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { BsMoon, BsSun } from "react-icons/bs";
import { useState, useEffect } from 'react';
import './App.css'

function Portfolio() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved ? JSON.parse(saved) : false;
  });

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const theme = {
    bg: darkMode ? '#0f172a' : '#f8fafc',
    cardBg: darkMode ? '#1e293b' : 'white',
    text: darkMode ? '#f1f5f9' : '#1f2937',
    textSecondary: darkMode ? '#94a3b8' : '#6b7280',
    textMuted: darkMode ? '#64748b' : '#4b5563',
    accent: '#7c3aed',
    accentHover: '#6d28d9',
    border: darkMode ? '#334155' : '#e5e7eb'
  };

  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: theme.bg,
      transition: 'background-color 0.3s ease',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Animated Particle Background */}
      <div className="particles-container" style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0
      }}>
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              position: 'absolute',
              width: Math.random() * 4 + 1 + 'px',
              height: Math.random() * 4 + 1 + 'px',
              backgroundColor: darkMode ? '#64748b' : '#cbd5e1',
              borderRadius: '50%',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              animation: `float ${Math.random() * 20 + 10}s infinite linear`,
              opacity: Math.random() * 0.5 + 0.1
            }}
          />
        ))}
      </div>
      {/* Navigation */}
      <nav style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        right: 0, 
        backgroundColor: theme.cardBg, 
        boxShadow: darkMode ? '0 2px 4px rgba(0,0,0,0.3)' : '0 2px 4px rgba(0,0,0,0.1)', 
        zIndex: 1000,
        padding: '1rem 0',
        transition: 'all 0.3s ease',
        backdropFilter: 'blur(10px)'
      }}>
        <div style={{ 
          maxWidth: '1200px', 
          margin: '0 auto', 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          gap: '2rem',
          padding: '0 1rem'
        }}>
          <div style={{ display: 'flex', gap: '2rem' }}>
            <a href="/" style={{ color: theme.accent, textDecoration: 'none', fontWeight: '600', transition: 'color 0.3s ease' }}>
              Home
            </a>
            <a href="/real-estate" style={{ color: theme.text, textDecoration: 'none', fontWeight: '500', transition: 'color 0.3s ease' }}>
              Real Estate
            </a>
            <a href="https://github.com/HabibiHaddad" target="_blank" rel="noopener noreferrer" 
               style={{ color: theme.text, textDecoration: 'none', fontWeight: '500', transition: 'color 0.3s ease' }}>
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/majd-haddad-a6aba4204/" target="_blank" rel="noopener noreferrer"
               style={{ color: theme.text, textDecoration: 'none', fontWeight: '500', transition: 'color 0.3s ease' }}>
              LinkedIn
            </a>
            <a href="#projects" style={{ color: theme.text, textDecoration: 'none', fontWeight: '500', transition: 'color 0.3s ease' }}>
              Projects
            </a>
            <a href="/mhaddad_resume.pdf" target="_blank" rel="noopener noreferrer"
               style={{ color: theme.text, textDecoration: 'none', fontWeight: '500', transition: 'color 0.3s ease' }}>
              Resume
            </a>
          </div>
          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            style={{
              background: 'none',
              border: `2px solid ${theme.border}`,
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: theme.text,
              transition: 'all 0.3s ease',
              fontSize: '1.2rem'
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = theme.accent;
              e.target.style.color = 'white';
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = 'transparent';
              e.target.style.color = theme.text;
            }}
          >
            {darkMode ? <BsSun /> : <BsMoon />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center', 
        minHeight: '100vh', 
        paddingTop: '5rem',
        padding: '5rem 1rem 2rem 1rem',
        textAlign: 'center'
      }}>
        {/* Profile Picture */}
        <div className="profile-container fade-in">
          <img
            src="/profilePicZ.png"
            alt="Majd Haddad"
          />
        </div>

        {/* Name and Title */}
        <h1 style={{ 
          fontSize: '3rem', 
          fontWeight: 'bold', 
          color: theme.text, 
          marginBottom: '1rem',
          lineHeight: '1.2',
          transition: 'color 0.3s ease',
          position: 'relative',
          zIndex: 1
        }}>
          Majd Haddad
        </h1>
        
        <h2 style={{ 
          fontSize: '1.5rem', 
          color: theme.textSecondary, 
          marginBottom: '2rem',
          fontWeight: '400',
          transition: 'color 0.3s ease',
          position: 'relative',
          zIndex: 1
        }}>
          Computer Science Graduate @ UMD | Software Engineer | Real Estate Agent
        </h2>

        {/* Description */}
        <p style={{ 
          fontSize: '1.2rem', 
          color: theme.textMuted, 
          maxWidth: '600px', 
          lineHeight: '1.6',
          marginBottom: '2rem',
          transition: 'color 0.3s ease',
          position: 'relative',
          zIndex: 1
        }}>
          Welcome to my digital space! I'm a passionate Computer Science graduate from the University of Maryland, 
          specializing in Software Engineering, Machine Learning, and AI. I also hold a real estate license in Maryland,
          combining tech expertise with real estate excellence.
        </p>

        {/* CTA Buttons */}
        <div style={{ 
          display: 'flex', 
          gap: '1rem', 
          marginBottom: '2rem',
          flexWrap: 'wrap',
          justifyContent: 'center'
        }}>
          <a href="/real-estate" style={{
            padding: '0.75rem 1.5rem',
            backgroundColor: '#7c3aed',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '0.5rem',
            fontWeight: '500',
            transition: 'background-color 0.3s ease'
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#6d28d9'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#7c3aed'}
          >
            View Real Estate Portfolio
          </a>
          <a href="#projects" style={{
            padding: '0.75rem 1.5rem',
            backgroundColor: 'transparent',
            color: '#7c3aed',
            textDecoration: 'none',
            borderRadius: '0.5rem',
            fontWeight: '500',
            border: '2px solid #7c3aed',
            transition: 'all 0.3s ease'
          }}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = '#7c3aed';
            e.target.style.color = 'white';
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = 'transparent';
            e.target.style.color = '#7c3aed';
          }}
          >
            View Tech Projects
          </a>
        </div>

        {/* Social Icons */}
        <div style={{ display: 'flex', gap: '1.5rem', fontSize: '2rem' }}>
          <a
            href="https://github.com/HabibiHaddad"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#374151', transition: 'color 0.3s ease' }}
            onMouseOver={(e) => e.target.style.color = '#7c3aed'}
            onMouseOut={(e) => e.target.style.color = '#374151'}
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/majd-haddad-a6aba4204/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#374151', transition: 'color 0.3s ease' }}
            onMouseOver={(e) => e.target.style.color = '#7c3aed'}
            onMouseOut={(e) => e.target.style.color = '#374151'}
          >
            <FaLinkedin />
          </a>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" style={{ 
        padding: '4rem 1rem', 
        backgroundColor: theme.cardBg,
        transition: 'background-color 0.3s ease',
        position: 'relative',
        zIndex: 1
      }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{ 
            fontSize: '2.5rem', 
            fontWeight: 'bold', 
            textAlign: 'center', 
            color: theme.text, 
            marginBottom: '3rem',
            transition: 'color 0.3s ease'
          }}>
            Featured Tech Projects
          </h2>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', 
            gap: '2rem' 
          }}>
            {/* Project 1 */}
            <div className="project-card">
              <h3 style={{ 
                fontSize: '1.5rem', 
                fontWeight: 'bold', 
                color: '#1f2937', 
                marginBottom: '1rem'
              }}>
                ANTS Project
              </h3>
              <p style={{ 
                color: '#6b7280', 
                marginBottom: '1.5rem',
                lineHeight: '1.6'
              }}>
                Automated identification and rigging of joints in 3D ant models combining computer vision, 
                machine learning, and 3D graphics. Built preprocessing pipelines, synthetic data generation 
                workflows, and 2D to 3D back-projection systems using DeepLabCut for pose estimation.
              </p>
              <div style={{ marginBottom: '1rem' }}>
                {['Python', 'Computer Vision', 'Machine Learning', 'Blender Scripting', 'DeepLabCut', '3D Graphics', 'Research & Analysis'].map(tech => (
                  <span key={tech} style={{
                    display: 'inline-block',
                    background: '#e5e7eb',
                    color: '#374151',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '1rem',
                    fontSize: '0.875rem',
                    marginRight: '0.5rem',
                    marginBottom: '0.5rem'
                  }}>
                    {tech}
                  </span>
                ))}
              </div>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                padding: '0.75rem 1.5rem',
                backgroundColor: '#f59e0b',
                color: 'white',
                borderRadius: '0.5rem',
                fontWeight: '500',
                fontSize: '0.875rem'
              }}>
                Project Finalizing - Code Coming Soon
              </div>
            </div>

            {/* Project 2 */}
            <div className="project-card">
              <h3 style={{ 
                fontSize: '1.5rem', 
                fontWeight: 'bold', 
                color: '#1f2937', 
                marginBottom: '1rem'
              }}>
                Machine Learning Research @ UMD
              </h3>
              <p style={{ 
                color: '#6b7280', 
                marginBottom: '1.5rem',
                lineHeight: '1.6'
              }}>
                Research focused on enhancing Large Language Models (LLMs) in answering religious questions.
                Working on improving distractor generation for QA datasets on the Quran to reduce hallucinations
                and increase reliability in Islamic domain responses.
              </p>
              <div style={{ marginBottom: '1rem' }}>
                {['Research & Analysis', 'Python', 'Dataset Design', 'Large Language Models', 'Literature Review', 'Academic Collaboration'].map(tech => (
                  <span key={tech} style={{
                    display: 'inline-block',
                    background: '#e5e7eb',
                    color: '#374151',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '1rem',
                    fontSize: '0.875rem',
                    marginRight: '0.5rem',
                    marginBottom: '0.5rem'
                  }}>
                    {tech}
                  </span>
                ))}
              </div>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                padding: '0.75rem 1.5rem',
                backgroundColor: '#6b7280',
                color: 'white',
                borderRadius: '0.5rem',
                fontWeight: '500',
                fontSize: '0.875rem'
              }}>
                Ongoing Research Project
              </div>
            </div>

            {/* Project 3 */}
            <div className="project-card">
              <h3 style={{ 
                fontSize: '1.5rem', 
                fontWeight: 'bold', 
                color: '#1f2937', 
                marginBottom: '1rem'
              }}>
                Flight Tracker Project
              </h3>
              <p style={{ 
                color: '#6b7280', 
                marginBottom: '1.5rem',
                lineHeight: '1.6'
              }}>
                A web application for tracking flights with real-time data integration.
                Built using modern web technologies with Express.js backend and
                responsive frontend design.
              </p>
              <div style={{ marginBottom: '1rem' }}>
                {['JavaScript', 'EJS', 'HTML', 'CSS', 'Express.js', 'REST API'].map(tech => (
                  <span key={tech} style={{
                    display: 'inline-block',
                    background: '#e5e7eb',
                    color: '#374151',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '1rem',
                    fontSize: '0.875rem',
                    marginRight: '0.5rem',
                    marginBottom: '0.5rem'
                  }}>
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href="https://github.com/MusaW650/FlightTracker"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  padding: '0.75rem 1.5rem',
                  backgroundColor: '#7c3aed',
                  color: 'white',
                  textDecoration: 'none',
                  borderRadius: '0.5rem',
                  fontWeight: '500',
                  transition: 'background-color 0.3s ease'
                }}
                onMouseOver={(e) => e.target.style.backgroundColor = '#6d28d9'}
                onMouseOut={(e) => e.target.style.backgroundColor = '#7c3aed'}
              >
                View on GitHub <FiExternalLink style={{ marginLeft: '0.5rem' }} />
              </a>
            </div>

            {/* Project 4 */}
            <div className="project-card">
              <h3 style={{ 
                fontSize: '1.5rem', 
                fontWeight: 'bold', 
                color: '#1f2937', 
                marginBottom: '1rem'
              }}>
                Quantum Support Vector Machines Research
              </h3>
              <p style={{ 
                color: '#6b7280', 
                marginBottom: '1.5rem',
                lineHeight: '1.6'
              }}>
                Explored Quantum Support Vector Machines (QSVMs) as part of CMSC457 final project.
                Investigated quantum kernels, hybrid algorithms, and quantum feature mapping to leverage
                quantum Hilbert spaces for high-dimensional classification tasks.
              </p>
              <div style={{ marginBottom: '1rem' }}>
                {['Quantum Computing', 'Machine Learning', 'Hybrid Algorithms', 'Quantum Kernels', 'Support Vector Machines', 'Research'].map(tech => (
                  <span key={tech} style={{
                    display: 'inline-block',
                    background: '#e5e7eb',
                    color: '#374151',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '1rem',
                    fontSize: '0.875rem',
                    marginRight: '0.5rem',
                    marginBottom: '0.5rem'
                  }}>
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href="/QuantumFinalReport.pdf"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  padding: '0.75rem 1.5rem',
                  backgroundColor: '#7c3aed',
                  color: 'white',
                  textDecoration: 'none',
                  borderRadius: '0.5rem',
                  fontWeight: '500',
                  transition: 'background-color 0.3s ease'
                }}
                onMouseOver={(e) => e.target.style.backgroundColor = '#6d28d9'}
                onMouseOut={(e) => e.target.style.backgroundColor = '#7c3aed'}
              >
                View Research Report <FiExternalLink style={{ marginLeft: '0.5rem' }} />
              </a>
            </div>

            {/* Project 5 */}
            <div className="project-card">
              <h3 style={{ 
                fontSize: '1.5rem', 
                fontWeight: 'bold', 
                color: '#1f2937', 
                marginBottom: '1rem'
              }}>
                Diabetes Progression Predictor
              </h3>
              <p style={{ 
                color: '#6b7280', 
                marginBottom: '1.5rem',
                lineHeight: '1.6'
              }}>
                A machine learning model predicting diabetes progression using
                regression techniques and data visualization with scikit-learn
                and Matplotlib.
              </p>
              <div style={{ marginBottom: '1rem' }}>
                {['Python', 'scikit-learn', 'Matplotlib', 'Machine Learning'].map(tech => (
                  <span key={tech} style={{
                    display: 'inline-block',
                    background: '#e5e7eb',
                    color: '#374151',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '1rem',
                    fontSize: '0.875rem',
                    marginRight: '0.5rem',
                    marginBottom: '0.5rem'
                  }}>
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href="https://github.com/HabibiHaddad/Diabetes-Prediction"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  padding: '0.75rem 1.5rem',
                  backgroundColor: '#7c3aed',
                  color: 'white',
                  textDecoration: 'none',
                  borderRadius: '0.5rem',
                  fontWeight: '500',
                  transition: 'background-color 0.3s ease'
                }}
                onMouseOver={(e) => e.target.style.backgroundColor = '#6d28d9'}
                onMouseOut={(e) => e.target.style.backgroundColor = '#7c3aed'}
              >
                View on GitHub <FiExternalLink style={{ marginLeft: '0.5rem' }} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ 
        padding: '2rem', 
        textAlign: 'center', 
        color: theme.textSecondary,
        backgroundColor: theme.bg,
        transition: 'all 0.3s ease',
        position: 'relative',
        zIndex: 1
      }}>
        <p>&copy; 2025 Majd Haddad. Built with React.</p>
      </footer>
    </div>
  );
}

export default Portfolio;