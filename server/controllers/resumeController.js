const Resume = require("../models/Resume");
const axios = require("axios");
const fs = require("fs");
const FormData = require("form-data");

exports.uploadResume = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    // 🔐 Attach user ID
    const newResume = new Resume({
      filename: req.file.filename,
      path: req.file.path,
      user: req.user.id, // 🔥 IMPORTANT
    });

    console.log("User ID:", req.user.id);

    const savedResume = await newResume.save();

    // Send to ML API
    const formData = new FormData();
    formData.append("file", fs.createReadStream(req.file.path));

    const mlResponse = await axios.post(
      "http://127.0.0.1:8000/parse",
      formData,
      {
        headers: formData.getHeaders(),
      }
    );

    const { text, skills, job_matches, score, suggestions } =
      mlResponse.data;

    res.status(200).json({
      message: "Resume uploaded & analyzed",
      resume: savedResume,
      parsedText: text,
      skills,
      jobMatches: job_matches,
      score,
      suggestions,
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error processing resume" });
  }
};

// 🔐 Get all resumes of logged-in user
exports.getMyResumes = async (req, res) => {
  try {
    // 🔥 Find resumes only for this user
    const resumes = await Resume.find({ user: req.user.id });

    res.status(200).json({
      message: "User resumes fetched successfully",
      resumes: resumes,
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching resumes" });
  }
};