const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const app = express();
app.use(express.json());
app.use(cors({ origin: "http://localhost:3000" })); // السماح لواجهة React

// 🔗 MongoDB Atlas
const MONGO_URL = "mongodb+srv://tradat:1235789@cluster0.gkttyjp.mongodb.net/RentCar";

mongoose.connect(MONGO_URL)
  .then(() => console.log("✅ MongoDB Connected..."))
  .catch(err => console.error("❌ MongoDB Error:", err));

// 🔑 JWT Secret
const JWT_SECRET = "supersecretkey";

// 🗂️ User model
const UserSchema = new mongoose.Schema({
  email: { type: String, unique: true },
  password: String,
});
const User = mongoose.model("User", UserSchema);

// ✨ Register route
app.post("/register", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) return res.status(400).json({ error: "Email and password required" });

  const hashedPassword = await bcrypt.hash(password, 10);
  try {
    const user = new User({ email, password: hashedPassword });
    await user.save();
    res.json({ message: "✅ User registered" });
  } catch (err) {
    res.status(400).json({ error: "❌ User already exists" });
  }
});

// 🔹 Login route
app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) return res.status(400).json({ error: "Email and password required" });

  let user;
  try {
    user = await User.findOne({ email });
  } catch {
    return res.status(500).json({ error: "Database connection error" });
  }

  if (!user) return res.status(400).json({ error: "User not found" });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).json({ error: "Invalid password" });

  const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: "1h" });

  res.json({
    message: "Login successful",
    token,
    user: { id: user._id, email: user.email },
  });
});

// 🔹 Start server
const PORT = 5000;
app.listen(PORT, () => console.log(`🚀 Backend running on http://localhost:${PORT}`));
