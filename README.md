Personal Portfolio Project Website (Web Development)

A personal portfolio website built with React (Vite) for the frontend and Node.js / Express for the backend.Features a REST API backed by MongoDB for dynamic content (example countries, user input), with reusable UI components (Gallery, Contact, User List, Country CRUD).

Features:
* Personal portfolio with homepage, about, projects, and contact sections
* Full CRUD for countries via REST API
* Contact form that submits messages to backend (can be stored in DB or emailed)
* Reusable React components: Gallery, Contact, UserList, CountryCRUD
* Responsive and accessible design
* Easy to extend: add new project cards, blog posts, or CV entries via the API

Tools and technologies
Frontend: React (Vite), React Router, React Hooks, CSS / Tailwind / SCSS
Backend: Node.js, Express
Database: MongoDB (Atlas or local)

Project Structure

a8-avinasha-portfolio/
├── backend-countries/         
│   ├── country-controller.mjs # Controller logic for country routes
│   ├── country-model.mjs      # Mongoose schema/model for countries
│   ├── test-request.http      # Sample API requests
│   ├── package.json           # Backend dependencies & scripts
│   └── package-lock.json
│
├── frontend/                  
│   ├── index.html             
│   ├── package.json           
│   ├── vite.config.js         
│   ├── public/                
│   └── src/                   # React components, pages, assets
│
├── README.md                  
└── package.json               # Optional root config

Getting Started!!
1. Clone the Repository
    git clone https://github.com/yourusername/a8-avinasha-portfolio.git
    cd a8-avinasha-portfolio
    
2. Backend Setup
    cd backend-countries
    npm install          # Install backend dependencies

    Create a .env file in backend-countries
        PORT=3000
        MONGODB_CONNECT_STRING=mongodb://127.0.0.1:27017/countriesDB
        # Or use MongoDB Atlas connection string
    Start the backend server: npm run dev

3. Frontend Setup 
    cd ../frontend
    npm install          # Install frontend dependencies
    npm run dev          # Start Vite dev server

  ⚠️ Note: Vite requires Node.js 20.19+ or 22.12+. Upgrade Node.js if needed.
  
4. Notes
    The frontend fetches data from the backend automatically for components like CountryCRUD and UserList.
    Use npm run dev -- --host in frontend to expose the site to your local network.
    MongoDB can be local or Atlas; make sure the connection string is valid.


