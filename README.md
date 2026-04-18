# 🇮🇳 Mera Sahara AI - Empowering Rural India
> **The ultimate bridge between government social security and the common citizen.**

[![Framework: React Native](https://img.shields.io/badge/Framework-React_Native-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactnative.dev/)
[![AI: Gemini 1.5 Flash](https://img.shields.io/badge/AI-Google_Gemini-4285F4?style=for-the-badge&logo=google&logoColor=white)](https://deepmind.google/technologies/gemini/)
[![Backend: Node.js](https://img.shields.io/badge/Backend-Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![Database: MongoDB](https://img.shields.io/badge/DB-MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)

---

## 🔴 The Problem
In India, **millions of citizens** remain unaware of government schemes due to:
- Complex administrative jargon.
- Language barriers.
- Lack of digital literacy.
- Geographical isolation.

## 🟢 Our Solution: Mera Sahara AI
**Mera Sahara AI** is a smart, voice-first platform that uses Generative AI to decode government policies into simple, actionable information for every Indian.

### 🌟 Key Features
* **🤖 Sahayak AI Assistant:** Powered by **Gemini 1.5 Flash**, it answers queries in Bengali, Hindi, and English.
* **🎙️ Multi-lingual Voice UI:** Full text-to-speech support for non-literate users.
* **📍 Location-Aware Tracking:** Automatically filters schemes based on your district using GPS.
* **📊 Eligibility Scoring:** A real-time engine that calculates your match probability for schemes based on your profile.
* **🔒 Secure Document Vault:** Keeps track of Aadhaar, Income, and Ration card status locally.
* **📡 Admin Dashboard:** Real-time analytics for government authorities to track impact.

---

## 🛠️ Technology Stack
| Layer | Technologies |
| :--- | :--- |
| **Frontend** | React Native (Expo), TypeScript, AsyncStorage |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB Atlas (MERN Stack) |
| **AI Engine** | Google Gemini API (NLP) |
| **Voice** | Expo-Speech (Multi-language TTS) |
| **Maps** | Expo-Location (Reverse Geocoding) |

---

## 🚀 Getting Started

### 1. Clone & Install
```bash
git clone [https://github.com/PATTERNX46/mera_sahara.git](https://github.com/PATTERNX46/mera_sahara.git)
cd mera_sahara
2. Backend SetupBashcd backend
npm install
# Add MONGO_URI and GEMINI_API_KEY to your .env
npm start
3. Frontend SetupBashcd frontend
npm install
npx expo start
