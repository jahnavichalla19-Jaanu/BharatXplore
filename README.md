# BharatXplore

One intelligent, multilingual, safety-focused tourism ecosystem for India. 🗺️

🔗 Live Demo: https://jahnavichalla19-jaanu.github.io/BharatXplore/

🏆 Smart India Hackathon 2026 | PS 26204 | Theme: Travel & Tourism | Category: Software

# 💡 Idea

Tourists depend on many disconnected platforms for discovery, language help, travel, payments and safety. This is harder in rural and lesser-known places. BharatXplore brings these into one app that guides a traveller from state to district to village.

# ✨ Key Features

      🗺️ State → District → Village map navigation
      🎙️ Voice-to-voice translation
      🔊 Location-aware history narration
      🚦 Crowd alerts and weather info
      🔳 Vendor QR with verified menus and fixed prices
      🏛️ Heritage QR scan for badges and discounts
      🚆 Bus and train deep links
      💳 Simple wallet with USD to INR conversion
      🆘 SOS alert and a 5-hour "Are you safe?" check-in
      📌 What Is Built vs Planned
      
# Status	Feature
✅ Built (live in demo)	Opening page with India outline, login page, dashboard with India map
🧪 Simulated in prototype	Wallet screen (no real money), static transport links, simulated SOS alert
🔜 Planned	Everything else: state to village drill-down, voice translator, narration, vendor and heritage QR, crowd alerts, backend and database

# ❓ Questions and Answers

1. Who verifies vendor QRs, and how do vendors join?

Vendors register with a short form and basic proof (shop or stall details and a phone number). Our admin team verifies each vendor with a local partner such as the district tourism office or a panchayat, starting as a pilot in one district. The vendor sets the menu and prices, the QR opens that verified page, and tourists can report overpricing. Repeated complaints lead to a review or removal. (Planned, not yet built.)

2. How does the app earn money?

The app is free for tourists, and basic vendor listing is free. Planned income:

Premium or featured vendor listings
Referral commission from transport and booking partners
Partnerships with state tourism departments for heritage and offbeat-destination promotion

(Planned model, not yet validated with real users.)

3. How does the wallet stay legal if you hold user funds?

BharatXplore will not hold user money itself. The full version will route payments through RBI-regulated partners such as payment gateways (Razorpay and Cashfree, already in our stack) or a licensed wallet provider, and the USD to INR conversion will be handled by an authorised partner. The prototype wallet is only a screen with no real transaction. The exact legal setup will be confirmed with the partner before launch.

4. How does SOS work with no network in a village?

An alert cannot be sent with zero signal, so we use layers:

SMS to the emergency contact needs less signal than mobile data.
If sending fails, the alert is saved on the phone and sent as soon as signal returns, with the last known location.
The 5-hour check-in is tracked by the server. If the user does not respond, the server alerts the emergency contact even when the phone stays offline. This is our main safety net.
A "Call 112" button works wherever any mobile coverage exists.
Police and helpline numbers for each area are cached on the phone.
5. Which translation API powers the voice translator?

The browser Web Speech API handles speech-to-text and text-to-speech. The translation step will use BHASHINI (Government of India's language mission) for Indian languages, with Google Cloud Translation as a fallback for foreign languages. (Planned, not yet built.)

6. What is actually built today, and what is simulated?

Built: opening page, login page and dashboard with the India map. Simulated: wallet screen, transport links and SOS alert. Everything else is planned. See the table above.

# 🛠️ Tech Stack
Layer	Prototype (built)	Planned full version
🎨 Frontend	HTML, CSS, JavaScript	Next.js / React, Tailwind CSS, i18next
🗺️ Map	SVG India outline and JavaScript	SVG boundary data for state, district and village
⚙️ Backend	none	Node.js, PostgreSQL, Socket.io
💳 Payments and QR	none	Razorpay and Cashfree (test mode), qrcode.js
📍 Location and alerts	none	Geolocation API, push notifications, SMS
🚆 Transit	none	IRCTC and RedBus deep links
☁️ Hosting	GitHub Pages	to be decided
▶️ Run Locally
# bash
      git clone https://github.com/jahnavichalla19-Jaanu/BharatXplore.git
      cd BharatXplore

Open index.html in your browser.

👩‍💻 Jahnavi Challa | @jahnavichalla19-Jaanu
