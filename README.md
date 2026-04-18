🇮🇳 Mera Sahara AIBridging the Gap Between Rural India and Government Social Security.📌 OverviewMera Sahara AI is a multi-lingual, AI-powered platform designed to simplify the discovery and application of Indian government schemes. By leveraging Google Gemini AI, we eliminate the complex jargon of government policies, providing citizens with personalized recommendations in their native language via voice and text.✨ Key Features🤖 Sahayak AI: A Gemini-powered assistant that explains schemes in simple Bengali, Hindi, or English.🎙️ Voice First: Full voice support for elderly or non-literate users using expo-speech.📍 Location Intelligence: Automatically identifies district-specific schemes using GPS.📊 Eligibility Scoring: Real-time percentage-based matching based on user profile and documents.🌓 Admin Dashboard: Real-time analytics for government authorities to track scheme dispersal.🛠️ Tech StackComponentTechnologyFrontendReact Native, Expo, TypeScriptBackendNode.js, Express.jsDatabaseMongoDB (Atlas)AI/MLGoogle Gemini 1.5 Flash APIState ManagementReact Hooks & AsyncStorage🚀 Installation & SetupPrerequisitesNode.js (v18+)Expo Go app on your mobile1. Clone the repoBashgit clone https://github.com/PATTERNX46/mera_sahara.git
cd mera-sahara
2. Backend SetupBashcd backend
npm install
# Create a .env file and add your MONGO_URI and GEMINI_API_KEY
node index.js
3. Frontend SetupBashcd frontend
npm install
npx expo start -c
📸 Screenshots[Place your App Screenshots Here]Pro-Tip: Use a tool like Canva to put your screenshots inside a mobile frame!🛣️ Roadmap[ ] Integration with DigiLocker for 1-click document verification.[ ] Offline support for remote villages.[ ] WhatsApp bot integration for wider reach.
