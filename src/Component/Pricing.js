import React from 'react';  
import { FaClock, FaRoad, FaWeight } from 'react-icons/fa';  

function Pricing() {  
    const pricingData = [  
        { id: 1, title: 'Per Hour', price: 20, unit: '₹', description: 'Hourly service charge', icon: <FaClock /> },  
        { id: 2, title: 'Per KM', price: 2, unit: '₹', description: 'Charge per kilometer', icon: <FaRoad /> },  
        { id: 3, title: 'Per KG', price: 0.50, unit: '₹', description: 'Charge per kilogram', icon: <FaWeight /> },  
    ];  

    const iconStyle = {  
        fontSize: '3em', // Increased size  
        color: '#1d467a', // Specified color  
        marginBottom: '10px' // Add some spacing between the icon and the title  
    };  

    return (  
        <section className="">  
            <h2 className='text-center mt-2' style={{color:"#1d467a"}}>Our Pricing</h2>  
            <div className="pricing-container">  
                {pricingData.map((item) => (  
                    <div key={item.id} className="pricing-card">  
                        <div style={iconStyle}>{item.icon}</div> {/* Render the icon with inline styles */}  
                        <h3>{item.title}</h3>  
                        <div className="price-tag" style={{color:"#1d467a"}}>  
                            {item.unit}{item.price}  
                        </div>  
                        <p className="description">{item.description}</p>  
                    </div>  
                ))}  
            </div>  
        </section>  
    );  
}  

export default Pricing;  