import React, { useEffect, useRef } from 'react';
import './Education.css';

const Education = () => {
  const sectionRef = useRef(null);
  const certifications = [
    'AWS Certified Solutions Architect – Associate',
    'Mulesoft Certified Developer',
    'Banking Business Certification (Aprisma)'
  ];
  
  const languages = [
    'English',
    'Bahasa Indonesia'
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('appear');
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="education" ref={sectionRef} className="fade-in">
      <div className="container">
        <h2 className="section-title">Education & Certifications</h2>
        <div className="education-content">
          <div className="education-item">
            <h3>Bachelor of Computer Science</h3>
            <p>Bina Nusantara University (2012)</p>
          </div>
          
          <div className="certifications">
            <h3>Certifications</h3>
            <ul>
              {certifications.map((certification, index) => (
                <li 
                  key={index}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {certification}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="languages">
            <h3>Languages</h3>
            <ul>
              {languages.map((language, index) => (
                <li 
                  key={index}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {language}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;