const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: { type: String, unique: true },
    phoneNumber: String,
    userType: { type: String, enum: ['Seller', 'Buyer'] }
});

module.exports = mongoose.model('User', UserSchema);
