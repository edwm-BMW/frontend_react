import React, { useState } from 'react';
import "./form.css";
import { useParams } from 'react-router-dom';

const BookingForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        guests: 1,
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        
    };
    const {hotelid} = useParams()
    return (
        
        <form className='form-container' onSubmit={handleSubmit}>
            <div>
                <input type='hidden' value={hotelid}></input>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="phone">Phone:</label>
                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="date">Date:</label>
                <input
                    type="date"
                    id="date"
                    name="date"
                   value={formData.date}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="time">Time:</label>
                <input
                    type="time"
                    id="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="guests">Number of Guests:</label>
                <input
                    type="number"
                    id="guests"
                    name="guests"
                    value={formData.guests}
                    min="1"
                    onChange={handleChange}
                    required
                />
            </div>
            <button type="submit">Book Now</button>
        </form>
    );
};

export default BookingForm;
