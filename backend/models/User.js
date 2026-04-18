const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    phone: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['citizen', 'govt', 'admin'], required: true },
    aadharNumber: { type: String }, // Only for citizens
    employeeId: { type: String }    // Only for govt workers
});

module.exports = mongoose.model('User', UserSchema);