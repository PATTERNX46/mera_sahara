const express = require('express');
const { GoogleGenerativeAI } = require('@google/generative-ai');
const router = express.Router();

// Tomar .env theke original API Key ekhane asche
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

router.post('/', async (req, res) => {
    try {
        const { message } = req.body;
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });

        // System Prompt: AI ke tairi kora hocche PDF features er sathe
        const prompt = `
        You are 'Sahayak', an AI assistant for the Indian app 'Mera Sahara'.
        Your job is to help users with government schemes. 
        Incorporate these features in your tone:
        1. Agentic RAG: Act like you are scanning PDFs.
        2. Eligibility: Explain why they qualify.
        3. Multilingual: If they ask in Hindi/Bengali, reply in that language.
        
        User's message: "${message}"
        
        Keep the response short, use bullet points, and add emojis. 
        Always end by asking if they want to apply or check required documents.
        `;

        const result = await model.generateContent(prompt);
        const reply = result.response.text();

        res.json({ reply });

    } catch (error) {
        console.error("Gemini Error:", error);
        res.status(500).json({ reply: "⚠️ Network issue or Invalid API Key. Activating Offline Mode..." });
    }
});

module.exports = router;