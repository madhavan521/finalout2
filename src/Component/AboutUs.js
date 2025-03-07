import React from 'react';  
import { FaTruckMoving, FaCheckCircle, FaShippingFast, FaBoxOpen, FaEye, FaTruck, FaDollarSign, FaHeadset, FaCalendarCheck, FaUserTie } from 'react-icons/fa';  
import 'bootstrap/dist/css/bootstrap.min.css';  
// import Navbar from './Navbar.js'

const About = () => {  
  return (
    <>
      {/* <Navbar /> */}
      <div className="container-fluid text-black mt-2 " style={{ backgroundColor: '#FFFFFF' }}>  
  
      <div className="container">  
        <h1 className="text-center mb-4" style={{ color: '#153969' }}>About Us</h1>  
        <p className="text-center lead">  
          Welcome to <strong>Streamline Freight</strong> – Your Trusted Goods Transportation Partner!  
        </p>  
        <p className="text-center">  
          We specialize in providing reliable and efficient vehicle services to transport your goods with utmost care.  
        </p>  

        <section className="py-4">  
          <h2 className="text-center mb-4" style={{ color: '#153969' }}>Why Choose Us?</h2>  
          <div className="row text-center">  
            {[{  
              icon: <FaTruck size={30} style={{ color: '#153969' }} />, title: 'Reliable Service', text: 'We prioritize punctuality and safety in every delivery.'  
            }, {  
              icon: <FaBoxOpen size={30} style={{ color: '#153969' }} />, title: 'Wide Range of Vehicles', text: 'From pickups to large trucks, we meet all transportation needs.'  
            }, {  
              icon: <FaDollarSign size={30} style={{ color: '#153969' }} />, title: 'Affordable Pricing', text: 'Competitive rates with no hidden charges.'  
            }, {  
              icon: <FaHeadset size={30} style={{ color: '#153969' }} />, title: '24/7 Support', text: 'Dedicated support team available at all times.'  
            }].map((item, index) => (  
              <div key={index} className="col-lg-3 col-md-6 mb-4">  
                <div className="card h-100 p-3 shadow-sm border-0" style={{ borderRadius: '10px' }}>  
                  <div className="d-flex justify-content-center align-items-center mb-2" style={{ height: '60px' }}>  
                    {item.icon}  
                  </div>  
                  <h5 className="font-weight-bold">{item.title}</h5>  
                  <p className="text-muted">{item.text}</p>  
                </div>  
              </div>  
            ))}  
          </div>  
        </section>  

        <section className="py-4">  
          <h2 className="text-center mb-4" style={{ color: '#153969' }}>How It Works</h2>  
          <div className="row text-center">  
            {[{  
              icon: <FaTruckMoving size={30} style={{ color: '#153969' }} />, title: 'Book Your Vehicle', text: 'Choose the vehicle type based on your goods and distance.'  
            }, {  
              icon: <FaCheckCircle size={30} style={{ color: '#153969' }} />, title: 'Confirmation', text: 'Get instant booking confirmation with pricing details.'  
            }, {  
              icon: <FaShippingFast size={30} style={{ color: '#153969' }} />, title: 'Transportation', text: 'Our professional drivers ensure safe and timely delivery.'  
            }, {  
              icon: <FaBoxOpen size={30} style={{ color: '#153969' }} />, title: 'Delivery Completion', text: 'Receive your goods at the desired location without hassle.'  
            }].map((item, index) => (  
              <div key={index} className="col-lg-3 col-md-6 mb-4">  
                <div className="card h-100 p-3 shadow-sm border-0" style={{ borderRadius: '10px' }}>  
                  <div className="d-flex justify-content-center align-items-center mb-2" style={{ height: '60px' }}>  
                    {item.icon}  
                  </div>  
                  <h5 className="font-weight-bold">{item.title}</h5>  
                  <p className="text-muted">{item.text}</p>  
                </div>  
              </div>  
            ))}  
          </div>  
        </section>  

        <section className="py-4">  
          <h2 className="text-center mb-4" style={{ color: '#153969' }}>Our Vision</h2>  
          <div className="text-center">  
            <FaEye size={30} style={{ color: '#153969' }} className="me-2" />  
            <p className="lead">  
              To become the most trusted and customer-friendly freight service provider, offering seamless logistics solutions across the region.  
            </p>  
          </div>  
        </section>  

        <section className="py-4">  
          <h2 className="text-center mb-4" style={{ color: '#153969' }}>Our Team</h2>  
          <div className="row text-center">  
            {[{  
              icon: <FaUserTie size={30} style={{ color: '#153969' }} />, title: 'A. S. Naveen Kumar', text: 'Managing Director (MD) | 8681971636'  
            }, {  
              icon: <FaUserTie size={30} style={{ color: '#153969' }} />, title: 'S. ISWARRAJ', text: 'Manager | 9944319348'  
            }].map((item, index) => (  
              <div key={index} className="col-md-6 col-lg-6 mb-3">  
                <div className="card p-3 text-dark shadow-sm border-0" style={{ borderRadius: '10px' }}>  
                  <div className="mb-2">{item.icon}</div>  
                  <h5>{item.title}</h5>  
                  <p>{item.text}</p>  
                </div>  
              </div>  
            ))}  
          </div>  
        </section>  

        <section className="py-4">  
          <h2 className="text-center mt-4" style={{ color: '#153969' }}>Contact Us</h2>  
          <p className="text-center">Have questions? Reach out through our contact page or call our support hotline.</p>  
        </section>  

        <section className="py-4">  
          <h2 className="text-center mt-4" style={{ color: '#153969' }}>Our Location</h2>  
          <div className="d-flex justify-content-center">  
            <iframe title="Streamline Freight Location" src="https://maps.google.com/maps?q=Streamline%20Freight&t=&z=13&ie=UTF8&iwloc=&output=embed"  
              width="600" height="300" style={{ borderRadius: '10px', border: 'none' }} allowFullScreen loading="lazy"></iframe>  
          </div>  
        </section>  
      </div>  
    </div> </>   
  );  
};  

export default About;  