import React, { useEffect, useRef } from 'react';
import './Competencies.css';

const Competencies = () => {
  const sectionRef = useRef(null);
  const competenciesData = [
    {
      icon: 'fas fa-network-wired',
      title: 'System Integration Architecture',
      description: 'Led core switching integrations and middleware for real-time banking systems.'
    },
    {
      icon: 'fab fa-java',
      title: 'Enterprise Java Engineering',
      description: 'Deep expertise in Java EE, Spring Boot, jPOS, Vert.x, and Kafka.'
    },
    {
      icon: 'fas fa-shield-alt',
      title: 'Secure Transactions',
      description: 'Built secure JWT/RSA-based token systems and OAuth integrations.'
    },
    {
      icon: 'fas fa-cloud',
      title: 'Cloud-Native Microservices',
      description: 'Designed and deployed services on AWS, using Lambda, EC2, API Gateway, and SQS/SNS.'
    },
    {
      icon: 'fas fa-cogs',
      title: 'DevOps Automation',
      description: 'CI/CD pipelines with GitLab, Jenkins, Docker, and Kubernetes.'
    },
    {
      icon: 'fas fa-chart-line',
      title: 'Observability',
      description: 'Monitoring solutions using Prometheus, Grafana, and OpenTelemetry.'
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
    <section id="competencies" ref={sectionRef} className="fade-in">
      <div className="container">
        <h2 className="section-title">Core Competencies</h2>
        <div className="competencies-grid">
          {competenciesData.map((competency, index) => (
            <div 
              className="competency-card" 
              key={index}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="competency-icon">
                <i className={competency.icon}></i>
              </div>
              <h3>{competency.title}</h3>
              <p>{competency.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Competencies;