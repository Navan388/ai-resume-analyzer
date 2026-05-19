import { useState } from "react";
import axios from "axios";

function UploadForm({ setData }) {
  const [file, setFile] = useState(null);

  const handleUpload = async () => {
    if (!file) return alert("Please select a file");

    const formData = new FormData();
    formData.append("resume", file);

    // 🔐 Get token from localStorage
    const token = localStorage.getItem("token");

    try {
      const res = await axios.post(
        "http://localhost:5000/api/resume/upload",
        formData,
        {
          headers: {
            Authorization: token, // 🔥 SEND TOKEN
          },
        }
      );

      setData(res.data);

    } catch (err) {
      console.error(err);

      if (err.response?.status === 401) {
        alert("Unauthorized! Please login again.");
      } else {
        alert("Upload failed");
      }
    }
  };

  return (
    <div>
      <input
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
      />
      <button onClick={handleUpload}>
        Analyze Resume
      </button>
    </div>
  );
}

export default UploadForm;