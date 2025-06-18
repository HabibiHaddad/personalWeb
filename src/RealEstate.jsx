import { FaHome, FaUsers, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import './App.css'
import propertiesData from './properties.json';

function RealEstate() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [submissionCount, setSubmissionCount] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  
  useEffect(() => {
    const count = localStorage.getItem('emailSubmissionCount');
    const lastSubmission = localStorage.getItem('lastSubmissionDate');
    const today = new Date().toDateString();
    
    if (lastSubmission !== today) {
      localStorage.setItem('emailSubmissionCount', '0');
      localStorage.setItem('lastSubmissionDate', today);
      setSubmissionCount(0);
    } else {
      setSubmissionCount(parseInt(count) || 0);
    }
  }, []);

  const properties = propertiesData;

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (submissionCount >= 3) {
      setSubmitMessage('Maximum 3 submissions per day reached. Please try again tomorrow.');
      return;
    }
    
    setIsSubmitting(true);
    setSubmitMessage('');
    
    try {
      // Replace these with your actual EmailJS values
      const result = await emailjs.send(
        'service_sh5q4aj',     // Get from EmailJS dashboard
        'template_q55i3fv',    // Get from EmailJS dashboard
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
          time: new Date().toLocaleString()
        },
        '2HgJ3y5kkbWgmYSsQ'      // Get from EmailJS dashboard
      );
      
      const newCount = submissionCount + 1;
      setSubmissionCount(newCount);
      localStorage.setItem('emailSubmissionCount', newCount.toString());
      
      setSubmitMessage('Thank you for your inquiry! I will get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
      
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitMessage('Sorry, there was an error sending your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f8fafc' }}>
      {/* Navigation */}
      <nav style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        right: 0, 
        backgroundColor: 'white', 
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)', 
        zIndex: 1000,
        padding: '1rem 0'
      }}>
        <div style={{ 
          maxWidth: '1200px', 
          margin: '0 auto', 
          display: 'flex', 
          justifyContent: 'center', 
          gap: '2rem',
          padding: '0 1rem'
        }}>
          <a href="/" style={{ color: '#374151', textDecoration: 'none', fontWeight: '500' }}>
            Home
          </a>
          <a href="/real-estate" style={{ color: '#7c3aed', textDecoration: 'none', fontWeight: '600' }}>
            Real Estate
          </a>
          <a href="https://github.com/HabibiHaddad" target="_blank" rel="noopener noreferrer" 
             style={{ color: '#374151', textDecoration: 'none', fontWeight: '500' }}>
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/majd-haddad-a6aba4204/" target="_blank" rel="noopener noreferrer"
             style={{ color: '#374151', textDecoration: 'none', fontWeight: '500' }}>
            LinkedIn
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={{ 
        padding: '8rem 1rem 4rem 1rem', 
        textAlign: 'center',
        backgroundColor: 'white'
      }}>
        <h1 style={{ 
          fontSize: '3.5rem', 
          fontWeight: 'bold', 
          color: '#1f2937', 
          marginBottom: '1rem'
        }}>
          Majd Haddad Real Estate
        </h1>
        <p style={{ 
          fontSize: '1.3rem', 
          color: '#6b7280', 
          maxWidth: '600px', 
          margin: '0 auto 2rem auto'
        }}>
          Licensed Real Estate Agent in Maryland | Combining Technology Expertise with Real Estate Excellence
        </p>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          gap: '1rem', 
          flexWrap: 'wrap'
        }}>
          <span style={{
            background: '#7c3aed',
            color: 'white',
            padding: '0.5rem 1rem',
            borderRadius: '2rem',
            fontSize: '0.9rem'
          }}>
            Maryland Licensed Agent
          </span>
          <span style={{
            background: '#10b981',
            color: 'white',
            padding: '0.5rem 1rem',
            borderRadius: '2rem',
            fontSize: '0.9rem'
          }}>
            Tech-Savvy Approach
          </span>
        </div>
      </section>

      {/* Properties Section */}
      <section style={{ 
        padding: '4rem 1rem', 
        backgroundColor: '#f8fafc'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ 
            fontSize: '2.5rem', 
            fontWeight: 'bold', 
            textAlign: 'center', 
            color: '#1f2937', 
            marginBottom: '3rem'
          }}>
            Properties for Sale
          </h2>
          
          <div style={{ 
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '2rem' 
          }}>
            {properties.map((property) => (
              <div key={property.id} className="project-card" style={{ 
                background: 'white',
                maxWidth: '400px',
                width: '100%'
              }}>
                <img 
                  src={property.image} 
                  alt={property.title}
                  style={{
                    width: '100%',
                    height: '200px',
                    objectFit: 'cover',
                    borderRadius: '8px',
                    marginBottom: '1rem'
                  }}
                />
                <div style={{ padding: '0 0.5rem' }}>
                  <div style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center',
                    marginBottom: '1rem'
                  }}>
                    <h3 style={{ 
                      fontSize: '1.5rem', 
                      fontWeight: 'bold', 
                      color: '#1f2937', 
                      margin: 0
                    }}>
                      {property.title}
                    </h3>
                    <span style={{
                      background: '#10b981',
                      color: 'white',
                      padding: '0.25rem 0.75rem',
                      borderRadius: '1rem',
                      fontSize: '0.8rem',
                      fontWeight: '500'
                    }}>
                      {property.status}
                    </span>
                  </div>
                  
                  <p style={{ 
                    fontSize: '2rem', 
                    fontWeight: 'bold', 
                    color: '#7c3aed', 
                    margin: '0 0 1rem 0'
                  }}>
                    {property.price}
                  </p>
                  
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    color: '#6b7280',
                    marginBottom: '1rem'
                  }}>
                    <FaMapMarkerAlt style={{ marginRight: '0.5rem' }} />
                    {property.location}
                  </div>
                  
                  <div style={{ 
                    display: 'flex', 
                    gap: '1rem', 
                    marginBottom: '1.5rem',
                    fontSize: '0.9rem',
                    color: '#4b5563'
                  }}>
                    <span>{property.bedrooms} bed</span>
                    <span>{property.bathrooms} bath</span>
                    <span>{property.sqft} sqft</span>
                  </div>
                  
                  <button style={{
                    width: '100%',
                    padding: '0.75rem',
                    backgroundColor: '#7c3aed',
                    color: 'white',
                    border: 'none',
                    borderRadius: '0.5rem',
                    fontWeight: '500',
                    cursor: 'pointer',
                    transition: 'background-color 0.3s ease'
                  }}
                  onMouseOver={(e) => e.target.style.backgroundColor = '#6d28d9'}
                  onMouseOut={(e) => e.target.style.backgroundColor = '#7c3aed'}
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section style={{ 
        padding: '4rem 1rem', 
        backgroundColor: 'white'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ 
            fontSize: '2.5rem', 
            fontWeight: 'bold', 
            color: '#1f2937', 
            marginBottom: '3rem'
          }}>
            My Real Estate Stats
          </h2>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
            gap: '2rem' 
          }}>
            <div style={{
              background: '#f8fafc',
              padding: '2rem',
              borderRadius: '1rem',
              border: '2px solid #e5e7eb'
            }}>
              <FaHome style={{ 
                fontSize: '3rem', 
                color: '#7c3aed', 
                marginBottom: '1rem' 
              }} />
              <h3 style={{ 
                fontSize: '2.5rem', 
                fontWeight: 'bold', 
                color: '#1f2937', 
                margin: '0 0 0.5rem 0'
              }}>
                3
              </h3>
              <p style={{ 
                color: '#6b7280', 
                fontSize: '1.1rem',
                margin: 0
              }}>
                Properties Sold
              </p>
            </div>
            
            <div style={{
              background: '#f8fafc',
              padding: '2rem',
              borderRadius: '1rem',
              border: '2px solid #e5e7eb'
            }}>
              <FaUsers style={{ 
                fontSize: '3rem', 
                color: '#10b981', 
                marginBottom: '1rem' 
              }} />
              <h3 style={{ 
                fontSize: '2.5rem', 
                fontWeight: 'bold', 
                color: '#1f2937', 
                margin: '0 0 0.5rem 0'
              }}>
                8
              </h3>
              <p style={{ 
                color: '#6b7280', 
                fontSize: '1.1rem',
                margin: 0
              }}>
                Total Clients Assisted
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section style={{ 
        padding: '4rem 1rem', 
        backgroundColor: '#f8fafc'
      }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2 style={{ 
            fontSize: '2.5rem', 
            fontWeight: 'bold', 
            textAlign: 'center', 
            color: '#1f2937', 
            marginBottom: '3rem'
          }}>
            Contact Me
          </h2>
          
          <form onSubmit={handleSubmit} style={{
            background: 'white',
            padding: '2rem',
            borderRadius: '1rem',
            boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)'
          }}>
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ 
                display: 'block', 
                marginBottom: '0.5rem', 
                fontWeight: '500',
                color: '#374151'
              }}>
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '2px solid #e5e7eb',
                  borderRadius: '0.5rem',
                  fontSize: '1rem',
                  boxSizing: 'border-box'
                }}
              />
            </div>
            
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ 
                display: 'block', 
                marginBottom: '0.5rem', 
                fontWeight: '500',
                color: '#374151'
              }}>
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '2px solid #e5e7eb',
                  borderRadius: '0.5rem',
                  fontSize: '1rem',
                  boxSizing: 'border-box'
                }}
              />
            </div>
            
            <div style={{ marginBottom: '2rem' }}>
              <label style={{ 
                display: 'block', 
                marginBottom: '0.5rem', 
                fontWeight: '500',
                color: '#374151'
              }}>
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows="5"
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '2px solid #e5e7eb',
                  borderRadius: '0.5rem',
                  fontSize: '1rem',
                  boxSizing: 'border-box',
                  resize: 'vertical'
                }}
                placeholder="Have a question with Real Estate? Submit an inquiry form and I would be happy to help!"
              />
            </div>
            
            <button 
              type="submit" 
              disabled={isSubmitting || submissionCount >= 3}
              style={{
                width: '100%',
                padding: '1rem',
                backgroundColor: isSubmitting || submissionCount >= 3 ? '#9ca3af' : '#7c3aed',
                color: 'white',
                border: 'none',
                borderRadius: '0.5rem',
                fontSize: '1.1rem',
                fontWeight: '600',
                cursor: isSubmitting || submissionCount >= 3 ? 'not-allowed' : 'pointer',
                transition: 'background-color 0.3s ease'
              }}
              onMouseOver={(e) => {
                if (!isSubmitting && submissionCount < 3) {
                  e.target.style.backgroundColor = '#6d28d9';
                }
              }}
              onMouseOut={(e) => {
                if (!isSubmitting && submissionCount < 3) {
                  e.target.style.backgroundColor = '#7c3aed';
                }
              }}
            >
              {isSubmitting ? 'Sending...' : submissionCount >= 3 ? 'Daily Limit Reached' : 'Submit Inquiry'}
            </button>
            
            {submitMessage && (
              <div style={{
                marginTop: '1rem',
                padding: '1rem',
                borderRadius: '0.5rem',
                backgroundColor: submitMessage.includes('error') || submitMessage.includes('Maximum') ? '#fef2f2' : '#f0fdf4',
                color: submitMessage.includes('error') || submitMessage.includes('Maximum') ? '#dc2626' : '#16a34a',
                border: `1px solid ${submitMessage.includes('error') || submitMessage.includes('Maximum') ? '#fecaca' : '#bbf7d0'}`,
                textAlign: 'center'
              }}>
                {submitMessage}
              </div>
            )}
            
            <div style={{
              marginTop: '0.5rem',
              textAlign: 'center',
              fontSize: '0.9rem',
              color: '#6b7280'
            }}>
              Submissions today: {submissionCount}/3
            </div>
          </form>
          
          <div style={{ 
            textAlign: 'center', 
            marginTop: '2rem',
            display: 'flex',
            justifyContent: 'center',
            gap: '2rem',
            flexWrap: 'wrap'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <FaPhone style={{ color: '#7c3aed' }} />
              <span style={{ color: '#4b5563' }}>(301) 332-5423</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <FaEnvelope style={{ color: '#7c3aed' }} />
              <span style={{ color: '#4b5563' }}>majd.haddad@longandfoster.com</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ 
        padding: '2rem', 
        textAlign: 'center', 
        color: '#6b7280',
        backgroundColor: 'white'
      }}>
        <p>&copy; 2025 Majd Haddad Real Estate. Licensed in Maryland.</p>
      </footer>
    </div>
  );
}

export default RealEstate;