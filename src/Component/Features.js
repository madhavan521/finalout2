import React from 'react';  
import { FaTruck, FaHeadset, FaShieldAlt } from 'react-icons/fa';  


const Features = () => {  
  const featuresData = [  
    {  
      feature: "Goods Transport",  
      icon: <FaTruck size="2em" color="#1d467a" />,
      quote: "Safe and timely delivery of your goods, guaranteed.",  
    },  
    {  
      feature: "24x7 Customer Support",  
      icon: <FaHeadset size="2em" color="#1d467a" />,   
      quote: "We're here for you around the clock to address any concerns.",  
    },  
    {  
      feature: "Reliable & Safe Transportation",  
      icon: <FaShieldAlt size="2em" color="#1d467a" />, 
      quote: "Your trust is our priority; we ensure secure transport always.",  
    },  
  ];  

  const FeatureCard = ({ feature, icon, quote }) => {  
    return (  
      <div className="col-md-4 mb-4">  
        <div className="card feature-card shadow h-100">  
          <div className="card-body text-center">  
            <div className="icon-wrapper">  
              {icon}  
            </div>  
            <h5 className="card-title">{feature}</h5>  
            <p className="card-text">"{quote}"</p>  
          </div>  
        </div>  
      </div>  
    );  
  };  

  return (  
    <section className="container py-5">  
      <h2 className="text-center mb-4" style={{color:"#1d467a"}}>Our Features</h2>  
      <div className="row">  
        {featuresData.map((item, index) => (  
          <FeatureCard key={index} feature={item.feature} icon={item.icon} quote={item.quote} />  
        ))}  
      </div>  
    </section>  
  );  
};  

export default Features;  