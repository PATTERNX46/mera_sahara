require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// 1. 🚀 SOB ROUTE IMPORT (Check koro path gulo thik ache kina)
const chatRoutes = require('./routes/chatRoutes');
const authRoutes = require('./routes/authRoutes');     
const alertRoutes = require('./routes/alertRoutes');
const citizenRoutes = require('./routes/citizenRoutes'); 

const app = express();

// 2. Middleware
app.use(cors());
app.use(express.json());

// 🚀 DEBUGGING LOG (Eta check korbe kon file error korche)
console.log('--- Route Debugging ---');
console.log('Chat Routes:', typeof chatRoutes);
console.log('Auth Routes:', typeof authRoutes);
console.log('Alert Routes:', typeof alertRoutes);
console.log('Citizen Routes:', typeof citizenRoutes);
console.log('-----------------------');

// 3. Database Connection
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/mera-sahara')
  .then(() => console.log('✅ MongoDB Connected Successfully'))
  .catch(err => console.log('❌ MongoDB connection error:', err));

// 4. 🚀 SAFE ROUTE REGISTRATION
// Jeta 'function' (router) pabe, shudhu setai use korbe, undefined hole crash korbe na
if (typeof chatRoutes === 'function') app.use('/api/chat', chatRoutes);
if (typeof authRoutes === 'function') app.use('/api/auth', authRoutes);       
if (typeof alertRoutes === 'function') app.use('/api/alerts', alertRoutes);
if (typeof citizenRoutes === 'function') app.use('/api/citizen', citizenRoutes); 

// 5. Start the Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`🚀 Backend Server running on port ${PORT}`);
});