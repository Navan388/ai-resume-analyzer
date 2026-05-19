def score_resume(skills, text):
    score = 0

    # ✅ Skill-based scoring
    skill_count = len(skills)

    if skill_count >= 8:
        score += 40
    elif skill_count >= 5:
        score += 30
    elif skill_count >= 3:
        score += 20
    else:
        score += 10

    # ✅ Section-based scoring
    text_lower = text.lower()

    if "education" in text_lower:
        score += 10
    if "experience" in text_lower:
        score += 20
    if "project" in text_lower:
        score += 20
    if "skill" in text_lower:
        score += 10

    return min(score, 100)