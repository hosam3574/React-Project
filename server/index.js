const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const app = express();
app.use(express.json({ limit: "10mb" }));
app.use(cors({ origin: "http://localhost:3000" }));

// MongoDB
const MONGO_URL = "mongodb+srv://tradat:1235789@cluster0.gkttyjp.mongodb.net/RentCar";
mongoose.connect(MONGO_URL)
  .then(() => console.log("✅ MongoDB Connected..."))
  .catch(err => console.error("❌ MongoDB Error:", err));

// JWT
const JWT_SECRET = "supersecretkey";

// User model
const UserSchema = new mongoose.Schema({
  email: { type: String, unique: true },
  password: String,
});
const User = mongoose.model("User", UserSchema);

// Booking model
const BookingSchema = new mongoose.Schema({
  pickupDate: String,
  returnDate: String,
  createdAt: { type: Date, default: Date.now },
});
const Booking = mongoose.model("Booking", BookingSchema);

// Rental model
const RentalSchema = new mongoose.Schema({
  name: String,
  price: Number,
  days: Number,
  total: Number,
  driverAge: Number,
  phone: String,
  passport: String,
  createdAt: { type: Date, default: Date.now },
});
const Rental = mongoose.model("Rental", RentalSchema);

// Register route
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

// Login route
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

// Booking route (تاريخ الاستلام والتسليم فقط)
app.post("/api/book", async (req, res) => {
  const { pickupDate, returnDate } = req.body;
  if (!pickupDate || !returnDate) return res.status(400).json({ error: "Please provide pickup and return dates" });

  try {
    const booking = new Booking({ pickupDate, returnDate });
    await booking.save();

    console.log("✅ Booking received:", booking);
    res.json({ message: "    Booking data received successfully !" });
  } catch (err) {
    console.error("❌ Booking error:", err);
    res.status(500).json({ error: "An error occurred while saving the booking. " });
  }
});

// Rental route (بيانات استئجار السيارة فقط)
app.post("/api/rent-car", async (req, res) => {
  const { name, price, days, total, driverAge, phone, passport } = req.body;
  if (!name || !price || !days || !total || !driverAge) return res.status(400).json({ error: "Missing required fields" });

  try {
    const rental = new Rental({ name, price, days, total, driverAge, phone, passport });
    await rental.save();

    console.log("✅ Rental saved:", rental);
    res.json({ message: "Car rental data received successfully !" });
  } catch (err) {
    console.error("❌ Rental error:", err);
    res.status(500).json({ error: "حدث خطأ أثناء حفظ بيانات الاستئجار" });
  }
});

// Start server
const PORT = 5000;
app.listen(PORT, () => console.log(`🚀 Backend running on http://localhost:${PORT}`));
