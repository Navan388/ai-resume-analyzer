import { useState } from "react";
import axios from "axios";

function Register({ setIsLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    if (!email || !password) {
      return alert("Please fill all fields");
    }

    // 🔐 Strong password validation
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

    if (!passwordRegex.test(password)) {
      return alert(
        "Password must contain:\n\n" +
        "• At least 8 characters\n" +
        "• One uppercase letter\n" +
        "• One lowercase letter\n" +
        "• One number\n" +
        "• One special character"
      );
    }

    try {
      await axios.post(
        "http://localhost:5000/api/auth/register",
        { email, password }
      );

      alert("Registration successful! Please login.");

      // Switch to login
      setIsLogin(true);

    } catch (err) {
      console.error(err);

      if (err.response?.status === 400) {
        alert(err.response.data.message || "Registration failed");
      } else {
        alert("Server error");
      }
    }
  };

  return (
    <div style={{ maxWidth: "300px", margin: "auto" }}>
      <h2>Register</h2>

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{
          display: "block",
          marginBottom: "10px",
          width: "100%",
          padding: "8px"
        }}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{
          display: "block",
          marginBottom: "5px",
          width: "100%",
          padding: "8px"
        }}
      />

      {/* Password Helper Text */}
      <p
        style={{
          fontSize: "12px",
          color: "gray",
          marginBottom: "15px"
        }}
      >
        Password must include uppercase, lowercase, number,
        special character, and be at least 8 characters.
      </p>

      <button
        onClick={handleRegister}
        style={{
          width: "100%",
          padding: "10px"
        }}
      >
        Register
      </button>

      {/* Switch to Login */}
      <p style={{ marginTop: "10px" }}>
        Already have an account?{" "}
        <span
          style={{ color: "blue", cursor: "pointer" }}
          onClick={() => setIsLogin(true)}
        >
          Login
        </span>
      </p>
    </div>
  );
}

export default Register;