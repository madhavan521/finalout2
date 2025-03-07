import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';
import { ClimbingBoxLoader } from 'react-spinners';

const Booking = () => {
    const form = useRef();
    const [loading, setLoading] = useState(false);

    const vehicles = [
        { name: "Euler HiLoad EV", model: "2023", load: "688 kg" },
        { name: "Euler HiLoad EV Plus", model: "2024", load: "750 kg" },
        { name: "Euler HiLoad Pro", model: "2025", load: "800 kg" },
    ];

    const sendEmail = async (e) => {
        e.preventDefault();
        setLoading(true);
        let emailSentSuccessfully = false; // Local variable

        try {
            const result = await emailjs.sendForm(
                'service_egobn8o',
                'template_2o2wgqo',
                form.current,
                { publicKey: 'rBpbxakJfGDyx7ydB' }
            );

            setLoading(false);

            if (result.status === 200) {
                emailSentSuccessfully = true;
                form.current.reset();
            } else {
                console.error("EmailJS error (non-200 status):", result);
            }
        } catch (error) {
            console.error("EmailJS error (catch block):", error);
            setLoading(false);
        }

        // Display toast based on the local variable
        if (emailSentSuccessfully) {
            setTimeout(() => {
                toast.success("Booking request sent successfully!");
            }, 100);
        } else if (!loading) {
            setTimeout(() => {
                toast.error("Failed to send booking request. Please check your network and try again.");
            }, 100);
        }
    };

    return (
        <section id="booking" className="container py-5">
            <Toaster position="top-center" reverseOrder={false} />
            <h2 className="text-center mb-4" style={{ color: "#1d467a" }}>Book Your Transport</h2>
            <div className="card shadow-lg border-0 p-5" style={{ borderRadius: '15px', minHeight: '300px' }}>
                {loading ? (
                    <div className="d-flex justify-content-center align-items-center" style={{ height: "200px" }}>
                        <ClimbingBoxLoader color="#1d467a" />
                    </div>
                ) : (
                    <form ref={form} onSubmit={sendEmail}>
                        <div className="mb-4">
                            <label className="form-label">Customer Name</label>
                            <input type="text" className="form-control" name="customer_name" placeholder="Enter your name" required style={{ borderRadius: '8px' }} />
                        </div>

                        <div className="mb-4">
                            <label className="form-label">Mobile Number</label>
                            <input type="tel" className="form-control" name="mobile_number" placeholder="Enter your mobile number" required style={{ borderRadius: '8px' }} pattern="[0-9]{10,15}" title="Please enter a valid mobile number (10-15 digits)" />
                        </div>

                        <div className="mb-4">
                            <label className="form-label">Email</label>
                            <input type="email" className="form-control" name="email" placeholder="Enter your email" required style={{ borderRadius: '8px' }} />
                        </div>

                        <div className="mb-4">
                            <label className="form-label">Load Type</label>
                            <input type="text" className="form-control" name="load_type" placeholder="Specify load type" required style={{ borderRadius: '8px' }} />
                        </div>

                        <div className="mb-4">
                            <label className="form-label">Select Vehicle</label>
                            <select className="form-control" name="vehicle" required style={{ borderRadius: '8px' }}>
                                <option value="">Select Vehicle</option>
                                {vehicles.map((v, index) => (
                                    <option key={index} value={`${v.name} - ${v.model} (${v.load})`}>
                                        {v.name} - {v.model} ({v.load})
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="mb-4">
                            <label className="form-label">From Destination</label>
                            <input type="text" className="form-control" name="from_destination" placeholder="Enter starting location" required style={{ borderRadius: '8px' }} />
                        </div>

                        <div className="mb-4">
                            <label className="form-label">To Destination</label>
                            <input type="text" className="form-control" name="to_destination" placeholder="Enter destination" required style={{ borderRadius: '8px' }} />
                        </div>

                        <button type="submit" className="btn btn-primary btn-lg w-100" disabled={loading} style={{
                            background: 'linear-gradient(45deg, #1d467a 0%, #153969 51%, #1d467a 100%)',
                            border: 'none',
                            borderRadius: '8px',
                            padding: '12px'
                        }}>
                            Book Now
                        </button>
                    </form>
                )}
            </div>
        </section>
    );
}

export default Booking;