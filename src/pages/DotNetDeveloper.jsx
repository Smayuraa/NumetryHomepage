import React from "react";
import "../styles/DotNetDeveloper.css";
import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
import dotnetImg from '../assets/dotnet.jpg'
import  question from '../assets/question-mark.webp'

const DotNetDeveloper = () => {
  return (
    <div>
      <Navbar/>
    <div className="dotnet-container">
      {/* Hero Section */}
     {/* Hero Section */}
     <section className="hero-section">
  <div className="hero-text">
    <h1>Hire .NET Developers</h1>
    <ul className="features-list">
      <li><span className="bullet-icon"></span> Upto 50% Cost Saving</li>
      <li><span className="bullet-icon"></span> Non-Disclosure Agreement</li>
      <li><span className="bullet-icon"></span> Agile & DevOps Enablement</li>
      <li><span className="bullet-icon"></span> Direct Communication</li>
      <li><span className="bullet-icon"></span> Flawless Project Management (via JIRA, Asana…)</li>
      <li><span className="bullet-icon"></span> Microsoft Certified Developers</li>
    </ul>
    <button className="hire-now-btn">Hire Now</button>
  </div>
  
  {/* Placeholder for Image */}
  <div className="hero-image">
    <img src={dotnetImg} alt="DotNet Developer" />
  </div>
</section>


      {/* Hiring Models */}
      <section className="hiring-models">
  <h2>Choose Your Hiring Model</h2>
  <div className="model-cards">
    <div className="model-card">
      <img src="../hireDeveloper/parttime.png" alt="Part-Time Model Logo" className="model-logo" />
      <h3>Part-Time Model</h3>
      <p>You can hire a .NET Developer for 4 hours a day.</p>
    </div>
    <div className="model-card">
      <img src="../hireDeveloper/fulltime.png" alt="Dedicated Model Logo" className="model-logo" />
      <h3>Dedicated Model</h3>
      <p>If you need daily assistance, hire developers for 8 hours per day.</p>
    </div>
    <div className="model-card">
      <img src="../hireDeveloper/sandTimer.png" alt="Hourly Model Logo" className="model-logo" />
      <h3>Hourly Model</h3>
      <p>Hire .NET Application Developers on an hourly basis as per project needs.</p>
    </div>
  </div>
</section>





      {/* Why Hire .NET Developers? */}
      <section className="why-hire">
      <div className="left-card">
 
  <h2>Why Hire Our .NET Developers?</h2>
  <img src={question} alt="Question Mark" className="question-mark" />
</div>

  <div className="right-content">
    <p>We have expert developers with 5+ years of experience in Microsoft technology stack.
      Our dedicated developers offer a wide range of .NET Development Services:
    </p>
    <ul>
      <li>.NET Core Development</li>
      <li>.NET Web App Development</li>
      <li>ASP.NET MVC Development</li>
      <li>REST API Development</li>
      <li>WPF Application</li>
      <li>Azure Cloud Integration</li>
    </ul>
  </div>
</section>


      {/* Our .NET Solutions */}
      <section className="dotnet-section">
  <h2 className="section-title">Our .NET Solutions</h2>
  <div className="solutions-grid">
    <div className="solution-item"> Custom CRM Solutions</div>
    <div className="solution-item"> ASP.NET Apps Maintenance and Support</div>
    <div className="solution-item"> Multi-Tenant Web API Solutions</div>
    <div className="solution-item"> SQL/C# Database Management</div>
    <div className="solution-item"> Custom Enterprise Apps Development</div>
    <div className="solution-item"> .NET B2B Portal Development</div>
    <div className="solution-item"> .NET Migration of Legacy Systems</div>
    <div className="solution-item"> Azure Cloud-based Solutions</div>
  </div>

  <h2 className="section-title">.NET Technologies We Work On</h2>
  <div className="technologies-grid">
    <div className="tech-item"> .NET 6, .NET 5, .NET Core, ASP.NET MVC, C#</div>
    <div className="tech-item"> .NET Framework (4.0 - 4.8), VB.NET, Microservices</div>
    <div className="tech-item"> WPF, WinForms, WCF, REST API, SOAP, JSON</div>
    <div className="tech-item"> SQL Server (2012 - 2019), Azure Development</div>
  </div>

  <h2 className="section-title">Payment Gateway & Third-Party Integrations</h2>
  <div className="integrations-grid">
    <div className="integration-item"> Stripe, PayPal, Authorize.Net, Adyen, MiGS, FirstData</div>
    <div className="integration-item"> DocuSign, Google Maps, AWS & Azure Services</div>
  </div>
</section>


      {/* Client Reviews */}
      <section className="reviews">
      <h2>What Our Clients Say</h2>
      <div className="review-container">
        <div className="review-card">
          <p>“Their communication and sense of urgency in responding to my emails and changes was impressive.”</p>
          <span>- Health & Fitness Coach</span>
        </div>
        <div className="review-card">
          <p>“I needed help with my website, and Numetry Technologies got me back on track. Highly recommended!”</p>
          <span>- Business Owner</span>
        </div>
        <div className="review-card">
          <p>“Great web design & development service at very affordable rates.”</p>
          <span>- Startup Founder</span>
        </div>
      </div>
    </section>

      {/* Hiring Process */}
      <section className="hiring-process">
  <h2>How to Hire .NET Developers?</h2>
  <div className="process-container">
    <div className="process-card">
      <div className="step-number">1</div>
      <h3>Filter Candidates</h3>
      <p>Shortlist top 5 developers for an interview.</p>
    </div>
    <div className="process-card">
      <div className="step-number">2</div>
      <h3>Interview</h3>
      <p>Analyze their skills and expertise.</p>
    </div>
    <div className="process-card">
      <div className="step-number">3</div>
      <h3>Finalize Team</h3>
      <p>Hire developers, designers, and QA testers.</p>
    </div>
    <div className="process-card">
      <div className="step-number">4</div>
      <h3>Project Development</h3>
      <p>Assign tasks and start the development.</p>
    </div>
    <div className="process-card">
      <div className="step-number">5</div>
      <h3>Track Progress</h3>
      <p>Monitor updates via Jira, Asana, Basecamp.</p>
    </div>
    <div className="process-card">
      <div className="step-number">6</div>
      <h3>Project Delivery</h3>
      <p>Final development and deployment.</p>
    </div>
    <div className="process-card">
      <div className="step-number">7</div>
      <h3>Support & Maintenance</h3>
      <p>Instant support and feature enhancements.</p>
    </div>
  </div>
</section>


      {/* FAQs */}
      <section className="faqs">
  <h2>FAQs About Hiring .NET Developers</h2>
  <div className="faq-container">
    <div className="faq-item">
      <h3>How can I find a reliable .NET developer?</h3>
      <p>Check experience, portfolio, client reviews, and technology stack expertise.</p>
    </div>
    <div className="faq-item">
      <h3>How do I communicate with developers?</h3>
      <p>We use Skype, Teams, Google Meet, email, and phone calls.</p>
    </div>
    <div className="faq-item">
      <h3>Can I work with developers in my time zone?</h3>
      <p>Yes, we provide developers who match your preferred working hours.</p>
    </div>
    <div className="faq-item">
      <h3>Do you sign an NDA?</h3>
      <p>Yes, we sign NDAs to ensure confidentiality.</p>
    </div>
  </div>
</section>


      {/* Contact Section */}
      <section className="contact-section">
     
        <h2>Let’s Discuss Your .NET Project</h2>
        <p>We work with businesses of all sizes to build amazing software.</p>
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <input type="text" placeholder="Your Phone Number" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit">Submit</button>
        </form>

    </section>
    </div>
    {/* <Footer/> */}
    </div>
  );
};

export default DotNetDeveloper;
