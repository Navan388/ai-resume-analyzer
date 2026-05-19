def generate_suggestions(skills, text):
    suggestions = []

    text_lower = text.lower()

    # ✅ Skill suggestions
    if "react" not in skills:
        suggestions.append("Consider adding React for frontend roles")

    if "node" not in skills:
        suggestions.append("Learn Node.js for backend development")

    if "machine learning" not in skills:
        suggestions.append("Add Machine Learning projects for AI roles")

    # ✅ Section suggestions
    if "project" not in text_lower:
        suggestions.append("Include a Projects section")

    if "experience" not in text_lower:
        suggestions.append("Add work experience or internships")

    if len(skills) < 5:
        suggestions.append("Add more relevant technical skills")

    return suggestions