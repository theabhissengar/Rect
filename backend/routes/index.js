const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Property = require('../models/Property');

router.post('/register', async (req, res) => {
    const { firstName, lastName, email, phoneNumber, userType } = req.body;
    const user = new User({ firstName, lastName, email, phoneNumber, userType });
    await user.save();
    res.status(201).send(user);
});

router.post('/properties', async (req, res) => {
    const { sellerId, location, area, bedrooms, bathrooms, nearbyAmenities } = req.body;
    const property = new Property({ sellerId, location, area, bedrooms, bathrooms, nearbyAmenities });
    await property.save();
    res.status(201).send(property);
});

router.get('/properties', async (req, res) => {
    const properties = await Property.find().populate('sellerId');
    res.status(200).send(properties);
});

router.post('/properties/:id/interest', async (req, res) => {
    const property = await Property.findById(req.params.id);
    property.interestedBuyers.push(req.body.buyerId);
    await property.save();
    res.status(200).send(property);
});

router.get('/properties/search', async (req, res) => {
    const filters = req.query;
    const properties = await Property.find(filters);
    res.status(200).send(properties);
});

module.exports = router;
