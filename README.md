# QuickHelp

**QuickHelp** is an emergency response web application built using React.js. It helps users save critical medical and personal details once, and then use features like sending SOS messages, accessing emergency guides, and contacting trusted people instantly in emergency situations.

---

## 🚀 Features

* **One-Time Registration**
  Collects user's name, age, sex, address, allergies, and prescriptions.

* **Avatar Generation**
  Auto-generates a user profile image using Dicebear Avatar API.

* **SOS Alerts**
  Instantly sends a WhatsApp message with your location to emergency contacts.

* **Emergency Contacts**
  Add/edit/delete contacts and directly call or message them.

* **Chatbot Simulation**
  A basic simulated chatbot interface for quick help (future scope for AI integration).

* **Emergency Guides**
  Cards with instructions for common emergencies like CPR, road accidents, and electric shock.

* **Responsive UI**
  Mobile and desktop optimized using Tailwind CSS.

* **Data Persistence**
  User and contact info is saved using `localStorage`.

---

## 🌐 Live Project

🔗 [Live Link](https://your-live-link.vercel.app)
*Replace with your deployed project link (e.g., Netlify, Vercel)*

---

## 🛠️ Tech Stack & Tools

* **React.js** – Component-based frontend library
* **React Router DOM** – Routing between pages
* **Tailwind CSS** – Utility-first styling
* **Vite** – Fast dev server
* **react-hot-toast** – Toast notifications
* **Dicebear API** – Random profile avatars
* **localStorage** – Save user/contact info locally

---

## 📸 Avatar API Used

We use the [Dicebear Avatar API](https://www.dicebear.com/) to generate user profile images:

```
https://api.dicebear.com/7.x/thumbs/svg?seed=<username>
```

---

## 📋 Use Cases

* Quickly notify trusted people during emergencies
* Share location and medical info via WhatsApp
* Access guides for dealing with emergencies like road accidents or CPR
* One-stop personal safety & health assistant

---

## 📂 Folder Structure

```
src/
├── components/        // Navbar, Footer, SOS, Chatbot
├── pages/             // HomePage, UserPage, SettingPage
├── guide/             // guide.jsx and guide.js
├── assets/            // Icons and static images
├── App.jsx
└── index.js
```

---

## 💥 Challenges We Faced

* **localStorage Quota Issue**:
  Custom uploaded images were too large. Solved it by switching to Dicebear-generated avatars.

* **Content Not Showing After Form Submit**:
  Content didn’t appear immediately after registration. Fixed by tracking `localStorage` updates via `useEffect` and `useLocation`.

* **Page Reload Returning to Form**:
  After refresh, form reappeared. Fixed by using a boolean `isUserAdded` state and conditionally rendering based on `localStorage`.

---

## 📊 Future Plans

* Real AI chatbot integration using OpenAI API
* Backend storage using Firebase or MongoDB
* Real-time geolocation-based hospital or service suggestions
* Multi-user login and dashboard for doctors/NGOs

---

## 📄 License

This project is open-source and available under the **MIT License**.

---

## 🤝 Contributing

Pull requests and suggestions are welcome! Fork it, improve it, and help us build something that could save lives.
