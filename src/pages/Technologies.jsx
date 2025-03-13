import React from "react";
import { Helmet } from "react-helmet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3,
  faJs,
  faReact,
  faAngular,
  faBootstrap,
  faNodeJs,
  faAws,
  faGoogle,
  faMicrosoft,
} from "@fortawesome/free-brands-svg-icons";

import "../styles/technologies.css";

const Technologies = () => {
  return (
    <>
      <Helmet>
        <title>Technologies - Numetry Technologies</title>
        <meta name="description" content="Explore the core technologies used at Numetry Technologies." />
      </Helmet>

      <div className="technologies-container">
        <h1 className="technologies-heading">Core Technologies</h1>

        {/* Grid Layout: 3 Rows & 2 Columns */}
        <div className="technologies-grid">
          {/* Data Science & Analytics */}
          <div className="tech-category">
            <h3>Data Science & Analytics</h3>
            <ul>
              <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hadoop/hadoop-original.svg" width="20" height="20" alt="Hadoop" /> Hadoop</li>
              <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" width="20" height="20" alt="Python" /> Python</li>
              <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" width="20" height="20" alt="MySQL" /> MySQL</li>
              <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scala/scala-original.svg" width="20" height="20" alt="Scala" /> Scala</li>
            </ul>
          </div>

          {/* DevOps */}
          <div className="tech-category">
            <h3>DevOps</h3>
            <ul>
              <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" width="20" height="20" alt="Jenkins" /> Jenkins</li>
              <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" width="20" height="20" alt="Docker" /> Docker</li>
              <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" width="20" height="20" alt="Kubernetes" /> Kubernetes</li>
              <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg" width="20" height="20" alt="GitLab" /> GitLab</li>
            </ul>
          </div>

          {/* UI/UX */}
          <div className="tech-category">
            <h3>UI/UX</h3>
            <ul>
              <li><FontAwesomeIcon icon={faHtml5} style={{ color: "#E34F26" }} /> HTML5</li>
              <li><FontAwesomeIcon icon={faCss3} style={{ color: "#1572B6" }} /> CSS3</li>
              <li><FontAwesomeIcon icon={faJs} style={{ color: "#F7DF1E" }} /> JavaScript</li>
              <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg" width="20" height="20" alt="jQuery" /> jQuery</li>
              <li><FontAwesomeIcon icon={faAngular} style={{ color: "#DD0031" }} /> AngularJS</li>
              <li><FontAwesomeIcon icon={faReact} style={{ color: "#61DAFB" }} /> React</li>
              <li><FontAwesomeIcon icon={faBootstrap} style={{ color: "#7952B3" }} /> Bootstrap</li>
            </ul>
          </div>

          {/* Server-Side */}
          <div className="tech-category">
            <h3>Server-Side</h3>
            <ul>
              <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" width="20" height="20" alt="Python" /> Python</li>
              <li><FontAwesomeIcon icon={faNodeJs} style={{ color: "#339933" }} /> Node.js</li>
              <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scala/scala-original.svg" width="20" height="20" alt="Scala" /> Scala</li>
              <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" width="20" height="20" alt="MySQL" /> MySQL</li>
              <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" width="20" height="20" alt="Java" /> Java</li>
              <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" width="20" height="20" alt="Spring" /> Spring</li>
            </ul>
          </div>

          {/* Cloud Services */}
          <div className="tech-category">
            <h3>Cloud Services</h3>
            <ul>
              <li><FontAwesomeIcon icon={faAws} style={{ color: "#FF9900" }} /> AWS</li>
              <li><FontAwesomeIcon icon={faGoogle} style={{ color: "#4285F4" }} /> Google Cloud Platform</li>
              <li><FontAwesomeIcon icon={faMicrosoft} style={{ color: "#0078D4" }} /> Azure</li>
            </ul>
          </div>

          {/* Digital Marketing */}
          <div className="tech-category">
            <h3>Digital Marketing</h3>
            <ul>
              <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" width="20" height="20" alt="Website Development" /> Website Development</li>
              <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg" width="20" height="20" alt="Social Media Marketing" /> Social Media Marketing</li>
              <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg" width="20" height="20" alt="Canva" /> Graphics Designing</li>
              <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-original.svg" width="20" height="20" alt="Logo Designing" /> Logo Designing</li>
              <li><FontAwesomeIcon icon={faReact} style={{ color: "#61DAFB" }} /> UI/UX Designing</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Technologies;
