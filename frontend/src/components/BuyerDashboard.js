import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './BuyerDashboard.css';

function BuyerDashboard() {
    const [properties, setProperties] = useState([]);
    const [filters, setFilters] = useState({
        location: '',
        area: '',
        bedrooms: '',
        bathrooms: ''
    });

    useEffect(() => {
        async function fetchProperties() {
            const response = await axios.get('/api/properties');
            setProperties(response.data);
        }
        fetchProperties();
    }, []);

    const handleChange = (e) => {
        setFilters({
            ...filters,
            [e.target.name]: e.target.value
        });
    };

    const applyFilters = async () => {
        const response = await axios.get('/api/properties/search', { params: filters });
        setProperties(response.data);
    };

    const expressInterest = async (propertyId) => {
        await axios.post(`/api/properties/${propertyId}/interest`, { buyerId: 'buyer_id' });
        alert('Interest expressed to the seller!');
    };

    return (
        <div className="buyer-dashboard">
            <h2>Buyer Dashboard</h2>
            <div className="filters">
                <input name="location" placeholder="Location" value={filters.location} onChange={handleChange} />
                <input name="area" placeholder="Area" value={filters.area} onChange={handleChange} />
                <input name="bedrooms" placeholder="Bedrooms" value={filters.bedrooms} onChange={handleChange} />
                <input name="bathrooms" placeholder="Bathrooms" value={filters.bathrooms} onChange={handleChange} />
                <button onClick={applyFilters}>Apply Filters</button>
            </div>
            <div className="property-list">
                <h3>Available Properties</h3>
                {properties.map(property => (
                    <div key={property._id} className="property-item">
                        <p>{property.location}</p>
                        <p>{property.area} sq ft</p>
                        <p>{property.bedrooms} Bedrooms</p>
                        <p>{property.bathrooms} Bathrooms</p>
                        <p>Nearby: {property.nearbyAmenities}</p>
                        <button onClick={() => expressInterest(property._id)}>I'm Interested</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default BuyerDashboard;
