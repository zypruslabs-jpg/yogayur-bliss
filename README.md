# Yog Ayur Bliss Complete Website Project

Included:
- Premium 3D-style frontend website
- Booking form
- Admin dashboard
- Node.js + Express backend API
- MongoDB booking database
- Deployment-ready structure

Preview:
Open `frontend/index.html`

Admin:
Open `frontend/admin.html`
Demo password: `admin123`

Run backend:
```bash
cd backend
npm install
cp .env.example .env
npm run dev
```

Backend URL:
http://localhost:5000

Deploy Frontend:
Use Netlify Drop and drag-drop the `frontend` folder.

Deploy Backend:
Use Render.
Build command: npm install
Start command: npm start
Environment variable: MONGO_URI

After backend deploy:
Change API_URL in `frontend/script.js` and `frontend/admin.js`
from:
http://localhost:5000/api
to your live Render backend API URL.
