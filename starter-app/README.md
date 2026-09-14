# Starter App

Minimal React + Python (Flask) project. Built as a real test target for the RCA automation
pipeline (n8n-workflows/simple-rca-nvidia*.json) -- not a real product.

## Backend (Flask)

```
cd backend
pip install -r requirements.txt
python app.py
```

Serves on http://localhost:5000, endpoints: `/api/health`, `/api/greeting`.

## Frontend (React + Vite)

```
cd frontend
npm install
npm run dev
```

Fetches `/api/greeting` from the backend and renders it.
