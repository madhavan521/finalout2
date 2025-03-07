import React from 'react';
import logo from '../Assests/logo.png'

const Navbar = ({handleBook}) => {
  return (
    <header className="container-fluid ">  
    <div className="row align-items-center py-2"> 
      <div className="col-4 d-flex align-items-center">
        <img src={logo} alt="Company Logo" className="img-fluid" style={{ width: '140px', height: 'auto' }} /> {/*  Make image responsive and adjust height dynamically */}  
      </div>  
      <div className="col-8">  
        <nav>
          <ul className="d-flex justify-content-end align-items-center list-unstyled mb-0">
             <li className="mx-3 ">  
              {/* <h6  className="text-decoration-none text-dark">  
                <strong>Careers</strong>  
              </h6>   */}
            </li>  
           {/* <li className="mx-3">  
              <a  className="text-decoration-none text-dark">  
                <strong>About Us</strong>  
              </a>  
            </li>   */}
            <li className="mx-3">  
              <button className="btn loginButton text-light" onClick={handleBook}>Book Now</button> 
            </li>  
          </ul>  
        </nav>  
      </div>  
    </div>  
  </header>  
  );
}

export default Navbar;
