const mongoose = require('mongoose');

const PropertySchema = new mongoose.Schema({
    sellerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    location: String,
    area: Number,
    bedrooms: Number,
    bathrooms: Number,
    nearbyAmenities: String,
    interestedBuyers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
});

module.exports = mongoose.model('Property', PropertySchema);
