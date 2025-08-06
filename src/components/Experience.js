import React, { useEffect, useRef } from 'react';
import './Experience.css';

const Experience = () => {
  const sectionRef = useRef(null);
  const experienceData = [
    {
      period: 'Aug 2020 - Aug 2025',
      title: 'Principal Engineer – PayNet',
      description: 'Led development of PayNet\'s core switching system with ISO 8583 integration over TCP/IP. Designed asynchronous framework with Spring Boot, Vert.x, and jPOS for Base24 integration. Optimized CI/CD pipelines for FPX Push Notification and JomPAY services.',
      skills: 'MuleSoft CloudHub · Gitlab · Spring · MuleSoft Anypoint Platform · Spring Boot · Java Enterprise Edition · Amazon Web Services (AWS) · JPOS · Vert.x · Jenkins · Kafka · Redis · Docker · Maven · AWS Lambda · Amazon Simple Notification Service (SNS) · Amazon SQS · Prometheus · OpenTelemetry · Grafana'
    },
    {
      period: 'May 2017 - June 2020',
      title: 'Technical Manager – iCIMB',
      description: 'Oversaw development activities including system requirements, project interdependencies, and technical solutions. Developed integration services for SIBS and DuitNow. Led team in delivering PrimeCash features using Struts, Ant, and Jenkins.',
      skills:'WebLogic · Spring · Spring Boot · Java Enterprise Edition · Jenkins · OAuth · PrismaGateway · Dynatrace'
    },
    {
      period: 'Sep 2016 - May 2017',
      title: 'Quality Assurance Engineer Lead – Wirecard',
      description: 'Designed and implemented automation framework for functional testing with multiple service integration. Led QA team in developing supporting services and creating Selenium test scripts. Built test automation framework using Selenium WebDriver and Spring Boot for banking applications.',
      skills: 'Selenium WebDriver, WebSphere, Payment Gateways, Spring, Selenium, Java Enterprise Edition, Spring Boot, Java, Struts, PrismaGateway, Oracle, Weblogic'
    },
    {
      period: 'Mar 2014 - Aug 2016',
      title: 'System Integration Engineer Lead – Wirecard',
      description: 'Developed middleware systems connecting PrimeCash with core banking systems and external platforms. Designed reusable integration architectures for high performance. Contributed to projects for CIMB Thailand, Qatar National Bank, Mandiri Bank, and Military Bank of Vietnam.',
      skills: 'Spring, ISO8583, Java Enterprise Edition, PrismaGateway, Spring Boot, Struts, Weblogic, WebSphere Application Server, JBoss EAP'
    },
    {
      period: 'Jan 2013 - Feb 2014',
      title: 'IBM Rational consultant & Software Architect – Asimetris Data Sentosa, PT.',
      description: 'Developed web applications for major business areas and provided consulting services. Created custom plugins for IBM Collaborative Lifecycle Management RTC supporting development processes.',
      skills: 'ZK, IBM Rational, Java Enterprise Edition, Spring Framework, Hibernate, MySQL, Maven, Apache Ant'
    },
    {
      period: 'Sep 2012 - Dec 2012',
      title: 'C#.Net Developer – PT. Mastersystem Infotama',
      description: 'Developed web applications supporting business processes using C#, .Net Framework, DevExpress, and SQL Server Reporting Services.',
      skills: 'SQL Server Integration Services (SSIS), Microsoft SQL Server, SQL Server Management Studio, ASP.NET MVC, SQL Server Reporting Services (SSRS)'
    },
    {
      period: 'Mar 2012 - Aug 2012',
      title: 'PHP & Java Programmer – PT. Karlwei Multi Global (Karltigo)',
      description: 'Developed web applications for payroll, scheduling, accounting, and reporting using Yii Framework, Struts 2, and Ibatis.',
      skills: 'PHP, Yii, WAMP, MySQL'
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
    <section id="experience" ref={sectionRef} className="fade-in">
      <div className="container">
        <h2 className="section-title">Key Experience</h2>
        <div className="timeline">
          {experienceData.map((experience, index) => (
            <div 
              className="timeline-item" 
              key={index}
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              <div className="timeline-dot"></div>
              <div className="timeline-date">{experience.period}</div>
              <div className="timeline-content">
                <h3>{experience.title}</h3>
                <p>{experience.description}</p>
                {experience.skills && <p className="skills"><strong>Technology Implementation:</strong> {experience.skills}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;