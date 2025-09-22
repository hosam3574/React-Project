import React, { useState } from "react";

const BASE_URL = "http://localhost:5000";

export default function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(`${BASE_URL}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      setLoading(false);

      if (res.ok && data.token && data.user) {
        onLogin(data.user);
      } else {
        alert(data.error || "Login failed");
      }
    } catch (err) {
      setLoading(false);
      alert("Server error, try again");
    }
  };

  return (
    <div style={{ padding: "40px", maxWidth: "400px", margin: "50px auto", border: "1px solid #ccc", borderRadius: "10px", backgroundColor: "#f8f8f8" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>تسجيل الدخول</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="البريد الإلكتروني"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ display: "block", width: "100%", padding: "10px", marginBottom: "15px", borderRadius: "6px", border: "1px solid #ccc" }}
        />
        <input
          type="password"
          placeholder="كلمة المرور"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{ display: "block", width: "100%", padding: "10px", marginBottom: "15px", borderRadius: "6px", border: "1px solid #ccc" }}
        />
        <button type="submit" style={{ width: "100%", padding: "10px", border: "none", borderRadius: "6px", backgroundColor: "#007bff", color: "#fff", cursor: "pointer" }}>
          {loading ? "جاري الدخول..." : "تسجيل الدخول"}
        </button>
      </form>
    </div>
  );
}
