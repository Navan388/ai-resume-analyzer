from fastapi import FastAPI, UploadFile, File
import pdfminer.high_level
import os
import re

from skills import SKILLS
from jobs import JOBS
from utils.extract_skills import extract_skills
from utils.match_jobs import match_jobs
from utils.score_resume import score_resume
from utils.suggestions import generate_suggestions

app = FastAPI()

TEMP_DIR = "temp"

if not os.path.exists(TEMP_DIR):
    os.makedirs(TEMP_DIR)


@app.post("/parse")
async def parse_resume(file: UploadFile = File(...)):
    try:
        file_path = os.path.join(TEMP_DIR, file.filename)

        with open(file_path, "wb") as f:
            content = await file.read()
            f.write(content)

        # Extract text
        text = pdfminer.high_level.extract_text(file_path)

        # Preserve formatting
        cleaned_text = text.replace("\r", "")

        # Normalize excessive line breaks
        cleaned_text = re.sub(r'\n{3,}', '\n\n', cleaned_text)

        # Skills extraction
        skills = extract_skills(cleaned_text, SKILLS)

        # Job matching
        job_matches = match_jobs(skills, JOBS)

        # Resume scoring
        score = score_resume(skills, cleaned_text)

        # Suggestions
        suggestions = generate_suggestions(skills, cleaned_text)

        return {
            "text": cleaned_text[:3000],
            "skills": skills,
            "job_matches": job_matches,
            "score": score,
            "suggestions": suggestions
        }

    except Exception as e:
        return {"error": str(e)}