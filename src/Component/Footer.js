import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="text-center text-white  py-3" style={{backgroundColor:"#1d467a"}}>  
    <div className="container">
    <div className="row">  
            <div className="col-md-12"> 
               <Link to='/about'> <strong  className="text-white mx-3">About Us</strong></Link>
                <Link to='/carrer'><strong  className="text-white mx-3">Careers</strong>  </Link>
            </div>  
        </div>    
        <div className="row mt-2">  
            <div className="col-md-12">  
                <p>&copy; 2025 Streamline Freight. All Rights Reserved.</p>  
            </div>  
        </div>  
      
    </div>  
    <style jsx>{`  
        footer {  
            background:  #1d467a;  
        }  
    `}</style>  
</footer>  
  );
}

export default Footer;
