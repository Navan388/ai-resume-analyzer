import { useState } from "react";
import axios from "axios";

function Login({ setIsLoggedIn, setIsLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (!email || !password) {
      return alert("Please enter email and password");
    }

    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        { email, password }
      );

      // ✅ Save token
      localStorage.setItem("token", res.data.token);

      // ✅ Update login state
      setIsLoggedIn(true);

      alert("Login successful");

    } catch (err) {
      console.error(err);

      if (err.response?.status === 400) {
        alert("Invalid email or password");
      } else {
        alert("Login failed");
      }
    }
  };

  return (
    <div style={{ maxWidth: "300px", margin: "auto" }}>
      <h2>Login</h2>

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ display: "block", marginBottom: "10px", width: "100%" }}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ display: "block", marginBottom: "10px", width: "100%" }}
      />

      <button onClick={handleLogin} style={{ width: "100%" }}>
        Login
      </button>

      {/* 🔄 Switch to Register */}
      <p style={{ marginTop: "10px", textAlign: "center" }}>
        Don't have an account?{" "}
        <span
          style={{ color: "blue", cursor: "pointer" }}
          onClick={() => setIsLogin(false)}
        >
          Register
        </span>
      </p>
    </div>
  );
}

export default Login;