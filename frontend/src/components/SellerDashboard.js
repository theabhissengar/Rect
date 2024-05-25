import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./SellerDashboard.css"

function SellerDashboard() {
    const [properties, setProperties] = useState([]);
    const [form, setForm] = useState({
        location: '',
        area: '',
        bedrooms: '',
        bathrooms: '',
        nearbyAmenities: ''
    });

    useEffect(() => {
        async function fetchProperties() {
            const response = await axios.get('/api/properties');
            setProperties(response.data);
        }
        fetchProperties();
    }, []);

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/properties', form);
            setProperties([...properties, response.data]);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h2>Seller Dashboard</h2>
            <form onSubmit={handleSubmit}>
                <input name="location" placeholder="Location" value={form.location} onChange={handleChange} />
                <input name="area" placeholder="Area" value={form.area} onChange={handleChange} />
                <input name="bedrooms" placeholder="Bedrooms" value={form.bedrooms} onChange={handleChange} />
                <input name="bathrooms" placeholder="Bathrooms" value={form.bathrooms} onChange={handleChange} />
                <input name="nearbyAmenities" placeholder="Nearby Amenities" value={form.nearbyAmenities} onChange={handleChange} />
                <button type="submit">Add Property</button>
            </form>
            <div className="property-list">
                <h3>Your Properties</h3>
                {properties.map(property => (
                    <div key={property._id} className="property-item">
                        <p>{property.location}</p>
                        <p>{property.area} sq ft</p>
                        <p>{property.bedrooms} Bedrooms</p>
                        <p>{property.bathrooms} Bathrooms</p>
                        <p>Nearby: {property.nearbyAmenities}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SellerDashboard;