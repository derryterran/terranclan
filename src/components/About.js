import React, { useEffect, useRef } from 'react';
import './About.css';

const About = () => {
  const sectionRef = useRef(null);

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
    <section id="about" ref={sectionRef} className="fade-in">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-image">
            <div className="image-placeholder">
              <img 
                src="./dt.png" 
                alt="Derry Liandana" 
                className="profile-image"
              />
            </div>
          </div>
          <div className="about-text">
            <p>
              I’m a technology professional with over 13 years of experience in enterprise software development, system integration, and cloud architecture, primarily in the banking and financial services industry.
              <br/><br/>
              Skilled in Java EE, Spring Boot, Microservices, AWS, Docker, CI/CD pipelines, Quality Testing, and System Integration. I’ve been actively involved in building mission critical platforms, integrating systems across banking networks, and implementing automation to improve performance and scalability.
              <br/><br/>
              Throughout my career, I’ve worked across multiple teams and roles, from developer to technical manager, delivering solutions that are not only technically sound but also aligned with business goals.
              <br/><br/>
              I'm the kind of person who:
              <br/>
              - Learns fast and adapts quickly<br/>
              - Takes full responsibility for assigned tasks<br/>
              - Works well independently or as part of a collaborative team<br/><br/>

              I’m always eager to grow, take on new challenges, and contribute to meaningful projects that create real impact.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;