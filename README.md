A personal portfolio website built with a React (Vite) frontend and a Node.js / Express backend.
Features a REST API backed by MongoDB for dynamic content (countries, user input), and reusable UI components (Gallery, Contact, User List, Country CRUD).

Features:
- Personal portfolio with homepage, about, projects, and contact sections
- Full CRUD for Countries (example dataset) via REST API
- Contact form that submits messages to backend (and optionally stores in DB / sends email)
- Reusable React components: Gallery, Contact, UserList, CountryCRUD
- Responsive layout and simple, accessible design
- Easy to extend: add new project cards, blog posts, or CV entries via the API

Tools used: 
Frontend: React (Vite), React Router, React Hooks, CSS (or Tailwind / SCSS if used)
Backend: Node.js, Express
Database: MongoDB (Atlas or local)

## 📂 Project Structure

a8-avinasha-portfolio/
├── backend-countries/         # Backend (Node.js + Express + MongoDB API)
│   ├── country-controller.mjs # Controller logic for country routes
│   ├── country-model.mjs      # Mongoose schema/model for countries
│   ├── test-request.http      # Sample HTTP requests for testing API
│   ├── package.json           # Backend dependencies & scripts
│   └── package-lock.json
│
├── frontend/                  # Frontend (React + Vite)
│   ├── avinasha-a8-screenshot.png # Project screenshot
│   ├── eslint.config.js       # ESLint configuration
│   ├── index.html             # Entry HTML file
│   ├── package.json           # Frontend dependencies & scripts
│   ├── package-lock.json
│   ├── vite.config.js         # Vite configuration
│   ├── public/                # Static assets
│   └── src/                   # React source code (components, pages, etc.)
│
├── README.md                  # Project documentation
└── package.json               # Root config (if used for combined setup)


## 🚀 How to Run the Project

** 1. Clone the Repository
```bash
git clone https://github.com/yourusername/a8-avinasha-portfolio.git
cd a8-avinasha-portfolio

** 2. Run Backend 

cd backend-countries
npm install
npm run dev

Backend will start at http://localhost:5000 (By default)
Make sure you have MongoDB running locally or provide a connection string in .env (see Environment Variables section).

*** 3. Run the Frontend
cd frontend
npm install
npm run dev

Frontend will start at http://localhost:5173 (By default)
It fetches data from the backend API (base URL configurable via .env).

