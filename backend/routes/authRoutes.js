const express = require('express');
const User = require('../models/User');
const router = express.Router();

// REGISTRATION
router.post('/register', async (req, res) => {
    try {
        const { phone, password, role, aadharNumber, employeeId } = req.body;
        
        // Admins cannot register here, they have predefined access
        if (role === 'admin') {
            return res.status(400).json({ error: "Admins cannot register." });
        }

        const newUser = new User({ phone, password, role, aadharNumber, employeeId });
        await newUser.save();
        res.json({ message: "Registration successful!" });
    } catch (error) {
        res.status(500).json({ error: "Registration failed. User might already exist." });
    }
});

router.post('/login', async (req, res) => {
    try {
        const { phone, loginId, password, role } = req.body;

        // ✅ 100% REAL DATABASE CHECK (Kono Demo nei)
        let query;
        if (role === 'admin' || role === 'govt') {
            query = { loginId: loginId, password: password, role: role };
        } else {
            query = { phone: phone, password: password, role: role };
        }

        const user = await User.findOne(query);

        if (user) {
            console.log("✅ Real Login Success for:", user.name);
            res.json({ 
                success: true, 
                role: user.role, 
                name: user.name 
            });
        } else {
            console.log(`❌ Login Failed - ID: ${loginId}, Pass: ${password}`);
            res.status(401).json({ success: false, message: "Invalid Credentials" });
        }
    } catch (error) {
        console.error("🔥 Server Error:", error);
        res.status(500).json({ success: false, message: "Server Error" });
    }
});