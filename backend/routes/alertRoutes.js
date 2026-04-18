const express = require('express');
const twilio = require('twilio');
const router = express.Router();

// Put your Twilio credentials here (In production, put these in .env)
const accountSid = 'process.env.TWILIO_SID'; // Replace with yours
const authToken = 'process.env.AUTH';             // Replace with yours
const twilioPhone = '+1 218 306 0442';                  // Replace with your Twilio SMS number
const twilioWhatsApp = 'whatsapp:+14155238886';     // This is the universal Twilio Sandbox number

const client = new twilio(accountSid, authToken);

router.post('/send-alerts', async (req, res) => {
    try {
        const { userPhone, schemeName, message } = req.body;
        // Make sure the phone number has +91
        const formattedPhone = userPhone.startsWith('+') ? userPhone : `+91${userPhone}`;

        const alertText = `🔔 Mera Sahara Alert:\nNamaste! You are eligible for the ${schemeName}. \n${message}\n\nReply with 'HELP' to connect to a local CSC agent.`;

        // 1. Send SMS
        const smsResponse = await client.messages.create({
            body: alertText,
            from: twilioPhone,
            to: formattedPhone
        });

        // 2. Send WhatsApp (Requires user to join sandbox first during demo)
        const waResponse = await client.messages.create({
            body: alertText,
            from: twilioWhatsApp,
            to: `whatsapp:${formattedPhone}`
        });

        res.json({ 
            success: true, 
            message: "Alerts sent successfully!", 
            smsId: smsResponse.sid,
            waId: waResponse.sid
        });

    } catch (error) {
        console.error("Twilio Error:", error);
        res.status(500).json({ error: "Failed to send alerts." });
    }
});

module.exports = router;