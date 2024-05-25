import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import SellerDashboard from './components/SellerDashboard';
import BuyerDashboard from './components/BuyerDashboard';
import './App.css';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/register" element={<Register/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/seller" element={<SellerDashboard/>} />
                <Route path="/buyer" element={<BuyerDashboard/>} />
            </Routes>
        </Router>
    );
}

export default App;
