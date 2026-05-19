def match_jobs(user_skills, jobs_dict):
    scores = {}

    for job, required_skills in jobs_dict.items():
        match_count = len(set(user_skills) & set(required_skills))
        total_skills = len(required_skills)

        score = match_count / total_skills
        scores[job] = round(score, 2)

    return scores