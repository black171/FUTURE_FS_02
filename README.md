# Client Lead Management System (Mini CRM) 📊
**Built for Future Interns - Full Stack Web Development Task 2**

A streamlined, dark-mode CRM designed for small businesses to track incoming leads, manage conversion pipelines, and log administrative follow-ups.

## 🚀 Features
* **Automated Lead Capture:** Integrated contact form that feeds directly into the database.
* **Real-Time Analytics:** Live calculation of Conversion Rates and Active Pipeline stats.
* **Interactive Dashboard:** Doughnut charts for status distribution using Chart.js.
* **Lead Management:** Update status (New, Contacted, Converted) and save admin notes instantly.
* **Security Gate:** Simple PIN-protected admin access.
* **Search & Filter:** Quickly find leads by name, email, or message content.

## 🛠️ Tech Stack
* **Frontend:** HTML5, Bootstrap 5 (Glassmorphism UI), JavaScript (ES6+), Chart.js
* **Backend:** Node.js, Express.js
* **Database:** MongoDB via Mongoose

## 📦 Setup Instructions
1. Clone the repo: `git clone [YOUR_REPO_URL]`
2. Install dependencies: `npm install`
3. Create a `.env` file and add your `MONGO_URI`.
4. Start the server: `npm start`
5. Access the dashboard at `/dashboard.html` (PIN: `admin123`)
