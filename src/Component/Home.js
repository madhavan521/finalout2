import React from 'react';
import Navbar from './Navbar'
import Header from './Header'
import FeaturesSection from './Features'
import Vehical from './Vehical'
import Pricing from './Pricing'
import Booking from './Booking'
import Footer from './Footer'

const Home = () => {
    const handleBook = () => {  
        console.log("handleBook called"); 
        const bookingElement = document.getElementById("booking");  
        console.log(bookingElement); 
        if (bookingElement) {  
          bookingElement.scrollIntoView({ behavior: 'smooth' });  
        }  
      };
  return (
    <div>
      <Navbar handleBook={handleBook} />
    <Header />
    <FeaturesSection />
    <Vehical />
    <Pricing />
    <Booking id="booking" />
    <Footer />
    </div>
  );
}

export default Home;
