import React, { useEffect, useRef } from 'react';
import './TechStack.css';

const TechStack = () => {
  const sectionRef = useRef(null);
  const techStackData = [
    {
      category: 'Languages',
      skills: ['Java', 'Python', 'PHP', 'C++', 'C#']
    },
    {
      category: 'Frameworks',
      skills: ['Spring Boot', 'Vert.x', 'Mulesoft', 'jPOS']
    },
    {
      category: 'Tools',
      skills: ['GitLab', 'Jenkins', 'SonarQube', 'Docker', 'Kubernetes']
    },
    {
      category: 'Messaging & Integration',
      skills: ['Kafka', 'Redis', 'WebSocket', 'ISO 8583']
    },
    {
      category: 'Monitoring',
      skills: ['Prometheus', 'Grafana', 'Dynatrace']
    },
    {
      category: 'Cloud',
      skills: ['AWS EC2', 'Lambda', 'API Gateway', 'SNS', 'SQS']
    },
    {
      category: 'Security',
      skills: ['JWT', 'RSA', 'OAuth', 'Keycloak']
    },
    {
      category: 'Testing',
      skills: ['Selenium', 'Karate', 'JUnit', 'JMeter']
    }
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
    <section id="tech-stack" ref={sectionRef} className="fade-in">
      <div className="container">
        <h2 className="section-title">Tech Stack</h2>
        <div className="tech-categories">
          {techStackData.map((category, index) => (
            <div 
              className="tech-category" 
              key={index}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3>{category.category}</h3>
              <div className="tech-pills">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    className="tech-pill" 
                    key={skillIndex}
                    style={{ animationDelay: `${(index * 0.1) + (skillIndex * 0.05)}s` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;