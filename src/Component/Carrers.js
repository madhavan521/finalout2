import React from "react";  
import 'bootstrap/dist/css/bootstrap.min.css';  

const CareerPage = () => {  
  const headingStyle = {  
    color: '#1d467a',  
  };  

  return (  
    <div className="container career-container py-5 bg-white text-dark">  
      {/* Header Section */}  
      <header className="career-header text-center">  
        <h1 className="display-4" style={headingStyle}>Join Our Team</h1>  
        <p className="lead text-secondary">Exciting career opportunities at Streamline Freight</p>  
      </header>  

      {/* Job Openings Section */}  
      <section className="career-section mt-5">  
        <h2 className="mb-4 text-center" style={headingStyle} >Current Openings</h2>  

        <div className="job-list row row-cols-1 row-cols-md-2 g-4 mt-3">  
          {/* Mini Truck Driver */}  
          <div className="col">  
            <div className="card h-100 shadow-sm">  
              <div className="card-body">  
                <h3 className="card-title text-center"  style={headingStyle} >🚚 Mini Truck Drivers</h3>  
                <div className="job-requirements">  
                  <div className="requirement-item bg-light border p-2 rounded mb-2">Age not more than 27 years</div>  
                  <div className="requirement-item bg-light border p-2 rounded mb-2">Experience in driving two-wheelers & mini trucks</div>  
                  <div className="requirement-item bg-light border p-2 rounded mb-2">Familiarity with smartphone applications</div>  
                  <div className="requirement-item bg-light border p-2 rounded mb-2">Good communication skills</div>  
                </div>  
                <p className="salary text-muted mt-3">💰 Salary: ₹22,000 - ₹30,000</p>  
                <p className="card-text">🎯 Flexible working hours & performance incentives</p>  
              </div>  
            </div>  
          </div>  

          {/* Customer Support Executive */}  
          <div className="col">  
            <div className="card h-100 shadow-sm">  
              <div className="card-body">  
                <h3 className="card-title text-center"  style={headingStyle} >📞 Customer Support Executive</h3>  
                <div className="job-requirements">  
                  <div className="requirement-item bg-light border p-2 rounded mb-2">Strong communication and problem-solving skills</div>  
                  <div className="requirement-item bg-light border p-2 rounded mb-2">Experience in customer handling preferred</div>  
                  <div className="requirement-item bg-light border p-2 rounded mb-2">Ability to multitask and manage queries efficiently</div>  
                </div>  
                <p className="salary text-muted mt-3">💰 Competitive salary & career growth opportunities</p>  
              </div>  
            </div>  
          </div>  
        </div>  
      </section>  

      {/* Contact Section */}  
      <section className="career-contact mt-5 text-center">  
        <h2 style={headingStyle}>How to Apply?</h2>  
        <p className="text-secondary">📧 Email us at: streamlinefr8@gmail.com</p>  
        <p className="text-secondary">📞 Call us at: +91 86819 71636 | +91 99443 19348</p>  
      </section>  
    </div>  
  );  
};  

export default CareerPage;  