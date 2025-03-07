import React from 'react';
import auto from '../Assests/auto.png'

const Vehical = () => {
    const vehicles = [  
        { name: "Euler HiLoad EV", model: "2023", image: auto, load: "688 kg" },  
        { name: "Euler HiLoad EV Plus", model: "2024", image: auto, load: "750 kg" },  
        { name: "Euler HiLoad Pro", model: "2025", image: auto, load: "800 kg" },  
      ];  
  return (
    <section className="container py-4">
        <h2 className="text-center" style={{color:"#1d467a"}}>Our Vehicles</h2>
        <div className="row">
          {vehicles.map((v, index) => (
            <div key={index} className="col-lg-4 col-md-4 col-12">
              <div className="card shadow-sm border-0">
                <img src={v.image} className="card-img-top" alt={v.name} />
                <div className="card-body text-center">
                  <h5 className="card-title">{v.name} - {v.model}</h5>
                  <p className="card-text">Load Capacity: {v.load}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
  );
}

export default Vehical;
