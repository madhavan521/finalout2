import React from 'react';  
import Slider from 'react-slick';  
import 'slick-carousel/slick/slick.css';  
import 'slick-carousel/slick/slick-theme.css';  
import image1 from "../Assests/IMG_20250306_205212.jpg";  
import image2 from "../Assests/IMG-20250307-WA0004.jpg";  
import image3 from "../Assests/IMG-20250307-WA0005.jpg";  
import image4 from "../Assests/IMG-20250307-WA0007.jpg";  
import image5 from "../Assests/IMG-20250307-WA0008.jpg";  

function Header() {  
  const settings = {  
    dots: true,  
    infinite: true,  
    speed: 500,  
    slidesToShow: 1,  
    slidesToScroll: 1,  
    autoplay: true, // Corrected: Use 'autoplay' instead of 'auto'  
  };  

  const images = [image1, image2, image3, image4, image5];  

  return (  
    <div className="container-fluid"> 
    <h1 className='text-center mb-3' style={{ color: "#1d467a" }}>Your Trusted Goods Transport Partner</h1>  
   <section className="text-center mt-2">  
        <Slider {...settings} className="w-100 ">  
          {images.map((image, index) => (  
            <div key={index}>  
              <img className="d-block w-100 " style={{height:"290px",borderRadius:"20px"}} src={image} alt={`Transport ${index + 1}`} />  
            </div>  
          ))}  
        </Slider>  
      </section>  
    </div>  
  );  
}  

export default Header;  