
import React from "react";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import ServiceCards from '../pages/ServiceCards'
import '../Styles/Service.css'

const Service = () => {

  const articles = [
    {
      title: "How Power BI Works For Cloud Computing And On-Premises?",
      text: "Power BI is a suite of Smartphone platforms developed by Microsoft for use on several mobile devices. The Power BI report server, for example, is a web interface...",
      date: "14 FEB 2022",
    },
    {
      title: "How To Leverage BI Analytics For Improved Business Functioning?",
      text: "Intelligent buildings have moved from the future to the physical reality, yet the genuine guarantee of the advancements is only understood at the core of this...",
      date: "3 MAY 2021",
    },
    {
      title: "How Do I Create Power BI Report With Direct Query In Dynamics 365?",
      text: "Last year December, Microsoft announced the general availability of Dynamics 365 customer engagement...",
      date: "15 JAN 2021",
    },
  ];
  
  return ( 
    <div
    className="container-fluid p-0 m-0"
    style={{
      minHeight: "100%", // Allow the page to grow dynamically
      background: "black",
      color: "white",
      overflowY: "auto", // Ensure scrolling is allowed
    }}
  >
  
  <div
    style={{
      backgroundColor: "black", // Dark section using #373538
      padding: "20px",
      borderRadius: "8px",
      textAlign: "center",
      color: "white", // Bright blue text for contrast
    }}
  >
   <div className="position-relative " style={{ marginTop: "4%" }}>
  <img 
    src="https://www.infosys.com/content/dam/infosys-web/en/global-resource/banner-images/cloud-cobalt-lead.jpg" 
    alt="Power BI Cloud Image" 
    className="w-100 d-block"  
    style={{ height: "auto" }} 
  />
  
  {/* Text Positioned on Left Side */}
  <div 
    className="position-absolute top-50 start-0 translate-middle-y text-white p-4"
    style={{
      // backgroundColor: "rgba(0, 0, 0, 0.6)", 
      borderRadius: "10px",
      width: "50%",  // Controls text box width
      textAlign: "top-left",
      padding: "50px",
      marginLeft: "30px" 
       // Adjust space from the left edge
    }}
  >
    <h2 style={{ fontWeight: "bold", color:"white", fontSize:"40px" }}>
      Power BI services for data visualization and business analytics.
    </h2>
    <p>
      Power BI is an advanced all-in-one platform that offers complete control over the data in your organization. It’s developed by Microsoft to help businesses gather insights from data stored in a cloud platform or an on-premise system. Numetry Technologies can help you make the most of Power BI via Power BI consulting. Our Power BI developers offer Power BI development services to companies globally.
    </p>
  </div>
</div>

      
      <h2 className="text-center fw-bold my-4" style={{color:"white"}}>How Do We Help With Power BI Development?</h2>
      <p className="text-center mt-3 mb-4">
        Power BI has numerous features that can be used for any data challenge. You can use these features to create any platform for any industry for any data capability. As an organization, you need to customize the platform from scratch with these features. This customization should be based on your business and your expected applications from Power BI.
      </p>
     
      
      <h3 className="fw-bold my-4">We Can Help You With:</h3>
    <div className="d-flex justify-content-start mb-5">
  <img 
    src="https://numetry.in/wp-content/uploads/2023/04/power-bi.png" 
    alt="Power BI" 
    className="me-4" 
    style={{ width: "500px", height: "250px", marginLeft: "50px" }} 
  />  

        <div>
          <ul className="list-group" style={{ marginLeft: "200px" }}>
            <li className="list-group-item">Creation of data lakes and gathering from multiple data sources.</li>
            <li className="list-group-item">Setup of analytics and accessible reporting features.</li>
            <li className="list-group-item">Quick, easy-to-use, prebuilt visualizations built just for your application.</li>
            <li className="list-group-item">Management of interactive reports that everyone can share with Power BI.</li>
            <li className="list-group-item">Transfer of data from Excel to Power BI.</li>
            <li className="list-group-item">Tracking of social media conversations and data storage directly in Power BI.</li>
          </ul>
        </div>
      </div>
      <p className="text-center mb-5">
        These are just a few things that we customize depending on your key takeaways from Power BI. You can always reach out to us for further customization as and when the need arises.
      </p>
      
      <h3 className="text-center fw-bold my-4" style={{color:"white"}}>Power BI Consulting Services - Get the Best Out of Its Features</h3>
      <p className="text-center mb-5">
        Power BI is a great platform, yes, but you need the help of expert Power BI developers to get the best out of it. We ensure that you get the right information needed to drive informed decisions. We work practically with the complete breadth of Power BI development and are, therefore, quite adept at helping you out with anything regarding this platform. Our Power BI services cover the platform. Let’s partner together to simplify how you analyze, interact, and work with data.
      </p>
      
      
  
  
      <ServiceCards/>
      <div className="mt-5">
        <h2 className="text-center fw-bold my-4">Experience Efficiency Like Never Before with Our Power BI Consulting</h2>
        <p className="text-center mt-3 mb-4">
          Is your team already using Power BI but still think there’s a scope for improvement? We completely understand. Power BI has vast features that can be combined and leveraged for numerous purposes to uncover the true potential of what they can do with data as well as Power BI to become a market leader truly.
        </p>
        <p className="text-center mb-5">
          We have some of the highly skilled and experienced Power BI consultants who have helped many global companies to grow their business with data as the backbone. If you aren’t sure about your data needs, you can always schedule a Power BI consulting session and get your queries answered.
        </p>
      </div>
      {/* <img 
        src="https://static.vecteezy.com/system/resources/previews/007/692/124/non_2x/people-concept-illustration-of-our-team-management-about-us-for-graphic-and-web-design-business-presentation-and-marketing-material-vector.jpg" 
        alt="Our Team" 
        className="w-100 d-block my-4" 
        style={{ height: "auto" }} 
      /> */}


      <h2 className="mb-5">Related Article</h2>
      <div className="row">
        {articles.map((article, index) => (
          <motion.div
            key={index}
            className="col-md-4 d-flex"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div
              className="w-100 p-3 shadow-sm d-flex flex-column"
              style={{
                backgroundColor: "#D6D8FF",
                borderRadius: "",
                minHeight: "250px", // Ensures equal height
              }}
            >
              <h5 className="fw-bold">{article.title}</h5>
              <p className="text-muted flex-grow-1">{article.text}</p>
              <hr />
              <p className="text-secondary">
                DATE: {article.date} <span className="fw-bold">AUTHOR</span>
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
      </div>

  );
};

const services = [
  { title: "BI Consulting", description: "Expert guidance for Power BI implementation." },
  { title: "Dashboard Development", description: "Create powerful, user-friendly dashboards." },
  { title: "Power BI Reporting", description: "Generate insightful reports for better decisions." },
  { title: "Power BI Migration", description: "Seamless migration to Power BI with minimal downtime." },
  { title: "Data Analytics", description: "Transform raw data into actionable insights." },
  { title: "Custom Visualizations", description: "Interactive and tailored data visual representations." }
];

export default Service;