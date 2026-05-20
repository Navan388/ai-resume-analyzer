# AI Resume Analyzer

An AI-powered Resume Analyzer built using MERN stack + Machine Learning.

## Features

- Resume upload (PDF)
- Resume parsing using NLP
- Skill extraction
- Job-role matching
- Resume scoring
- Improvement suggestions
- User authentication (JWT)
- Multi-user data isolation

## Tech Stack

### Frontend
- React
- Axios

### Backend
- Node.js
- Express.js
- MongoDB Atlas
- JWT Authentication

### ML API
- FastAPI
- pdfminer
- NLP skill extraction

## Architecture

React → Node.js API → FastAPI ML Service → MongoDB

## Installation

### Client
```bash
cd client
npm install
npm start
```

### Server
```bash
cd server
npm install
npm run dev
```

### ML API
```bash
cd ml-api
pip install -r requirements.txt
source venv/Scripts/activate
uvicorn main:app --reload --port 8000
```
