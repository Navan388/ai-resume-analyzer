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
- Tailwind CSS

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


# Hosting

Since the project has some parts:

### Frontend
### Node Backend
### ML API
### Database

# Hosting Order (Important)

## 1. Deploy ML API

Because backend depends on it.

---

## 2. Deploy Node Backend

Update:

```js
axios.post("YOUR_ML_API_URL/parse")
