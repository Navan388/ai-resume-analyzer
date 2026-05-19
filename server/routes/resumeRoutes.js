const express = require("express");
const router = express.Router();

const {
  uploadResume,
  getMyResumes,
} = require("../controllers/resumeController");

const verifyToken = require("../middleware/authMiddleware");
const upload = require("../middleware/upload");

// 🔐 Protected routes
router.post("/upload", verifyToken, upload.single("resume"), uploadResume);

router.get("/my-resumes", verifyToken, getMyResumes);

module.exports = router;