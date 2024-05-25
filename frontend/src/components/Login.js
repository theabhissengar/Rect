import React, { useState } from 'react';
import axios from 'axios';

function Login() {
    const [form, setForm] = useState({
        email: '',
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
        // Here should be the login logic
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>
            <input name="email" placeholder="Email" value={form.email} onChange={handleChange} />
            <select name="userType" value={form.userType} onChange={handleChange}>
                <option value="Buyer">Buyer</option>
                <option value="Seller">Seller</option>
            </select>
            <button type="submit">Login</button>
        </form>
    );
}

export default Login;
