import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = () => {
    // حساب وهمي
    const dummyEmail = "user@example.com";
    const dummyPassword = "123456";

    if (!email || !password) return setError("Please fill all fields");

    if (email === dummyEmail && password === dummyPassword) {
      const user = { email };
      localStorage.setItem("user", JSON.stringify(user));
      onLogin(user);
      navigate("/part1"); // الانتقال للـ Part1
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>Login</h1>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ padding: "10px", width: "250px", margin: "10px" }}
      />
      <br />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ padding: "10px", width: "250px", margin: "10px" }}
      />
      <br />
      <button
        onClick={handleLogin}
        style={{
          padding: "10px 20px",
          backgroundColor: "blue",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        Login
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <p>Use: user@example.com / 123456</p>
    </div>
  );
}
