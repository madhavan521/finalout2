import React from "react";

const Testing = () => {
  const vehicles = [
    { name: "Truck A", model: "Model X", image: "truckA.jpg", load: "5 Tons" },
    { name: "Truck B", model: "Model Y", image: "truckB.jpg", load: "10 Tons" },
  ];

  return (
    <div className="bg-light " style={{color:"#rgba(20, 27, 225, 0.99)"}}>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg " >
        <div className="container">
          <a className="navbar-brand text-white" href="#">TransportX</a>
          <div>
            <a className="nav-link text-white d-inline mx-2" href="#career">Career</a>
            <a className="nav-link text-white d-inline mx-2" href="#about">About</a>
            <a className="nav-link text-white d-inline mx-2" href="#book">Book Now</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="text-center py-5">
        <h1>Your Trusted Goods Transport Partner</h1>
        <div id="heroCarousel" className="carousel slide w-75 mx-auto" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="d-block w-100" src="image1.jpg" alt="Transport 1" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src="image2.jpg" alt="Transport 2" />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
          </button>
        </div>
      </section>

      {/* Features */}
      <section className="container py-4">
        <h2 className="text-center">Our Features</h2>
        <div className="row">
          {["Goods Transport", "24x7 Customer Support", "Reliable & Safe Transportation"].map((feature, index) => (
            <div key={index} className="col-md-4">
              <div className="card shadow-sm text-center border-0">
                <div className="card-body">
                  <h5 className="card-title">{feature}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Vehicle Details */}
      <section className="container py-4">
        <h2 className="text-center">Our Vehicles</h2>
        <div className="row">
          {vehicles.map((v, index) => (
            <div key={index} className="col-md-6">
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

      {/* Pricing Details */}
      <section className="container py-4">
        <h2 className="text-center">Pricing Details</h2>
        <div className="card shadow-sm border-0">
          <div className="card-body text-center">
            <p>Per Hour: $20 | Per KM: $2 | Per KG: $0.50</p>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section id="book" className="container py-4">
        <h2 className="text-center">Book Your Transport</h2>
        <div className="card shadow-sm border-0 p-4">
          <form>
            <div className="mb-3">
              <input type="text" className="form-control" placeholder="Customer Name" required />
            </div>
            <div className="mb-3">
              <input type="tel" className="form-control" placeholder="Mobile Number" required />
            </div>
            <div className="mb-3">
              <input type="email" className="form-control" placeholder="Email" required />
            </div>
            <div className="mb-3">
              <input type="text" className="form-control" placeholder="Load Type" required />
            </div>
            <div className="mb-3">
              <select className="form-control">
                <option>Select Vehicle</option>
                {vehicles.map((v, index) => (
                  <option key={index}>{v.name}</option>
                ))}
              </select>
            </div>
            <div className="mb-3">
              <input type="text" className="form-control" placeholder="From Destination" required />
            </div>
            <div className="mb-3">
              <input type="text" className="form-control" placeholder="To Destination" required />
            </div>
            <button type="submit" className="btn btn-primary w-100">Book Now</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-white bg-primary py-3">
        <p>&copy; 2025 TransportX. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Testing;
