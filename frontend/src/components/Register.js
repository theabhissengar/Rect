import React, { useState } from 'react';
import axios from 'axios';

function Register() {
    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        userType: 'Buyer'
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/register', form);
            alert('Registration successful');
        } catch (error) {
            console.error(error);
            alert('Registration failed');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Register</h2>
            <input name="firstName" placeholder="First Name" value={form.firstName} onChange={handleChange} />
            <input name="lastName" placeholder="Last Name" value={form.lastName} onChange={handleChange} />
            <input name="email" placeholder="Email" value={form.email} onChange={handleChange} />
            <input name="phoneNumber" placeholder="Phone Number" value={form.phoneNumber} onChange={handleChange} />
            <select name="userType" value={form.userType} onChange={handleChange}>
                <option value="Buyer">Buyer</option>
                <option value="Seller">Seller</option>
            </select>
            <button type="submit">Register</button>
        </form>
    );
}

export default Register;
