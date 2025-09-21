import React, { useState } from "react";
import "./css/part3.css";

export default function CarCard({ name, image, price, reviews }) {
  const [showModal, setShowModal] = useState(false);
  const [driverAge, setDriverAge] = useState("");
  const [days, setDays] = useState(1);
  const [isDubai, setIsDubai] = useState(false);
  const [isTourist, setIsTourist] = useState(false);
  const [phone, setPhone] = useState("");
  const [passport, setPassport] = useState(null);

  const total = days * price;

  const handleSend = () => {
    const data = {
      name,
      price,
      days,
      driverAge,
      total,
      ...(isDubai && { phone }),
      ...(isTourist && { passport }),
    };

    console.log("Rent Data:", data);
    alert(`تم ارسال الطلب! التوتال: $${total}`);

    setShowModal(false);
    setDriverAge("");
    setDays(1);
    setIsDubai(false);
    setIsTourist(false);
    setPhone("");
    setPassport(null);
  };

  return (
    <div className="car-card">
      <img src={image} alt={name} className="car-image" />
      <p className="namecar">{name}</p>

      <div className="reviews">
        <img className="star" src="/media/Star 1.png" alt="star" />
        <span>{reviews}</span>
      </div>

      <p className="price">${price}</p>

      <button className="disgin" onClick={() => setShowModal(true)}>
        Rent Now
      </button>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>🚗 Rent {name}</h2>

            <label>
              Driver Age:
              <input
                type="number"
                value={driverAge}
                onChange={(e) => setDriverAge(e.target.value)}
                required
              />
            </label>

            <label>
              Number of Days:
              <input
                type="number"
                value={days}
                onChange={(e) => setDays(e.target.value)}
                min="1"
                required
              />
            </label>

            <p>Total: ${total}</p>

            <label>
              Are you from Dubai?
              <input
                type="checkbox"
                checked={isDubai}
                onChange={(e) => setIsDubai(e.target.checked)}
              />
            </label>

            {isDubai && (
              <label>
                Phone Number:
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </label>
            )}

            <label>
              Are you a tourist?
              <input
                type="checkbox"
                checked={isTourist}
                onChange={(e) => setIsTourist(e.target.checked)}
              />
            </label>

            {isTourist && (
              <label>
                Passport Copy:
                <input
                  type="file"
                  onChange={(e) => setPassport(e.target.files[0])}
                  accept="image/*,.pdf"
                  required
                />
              </label>
            )}

            <div style={{ marginTop: "15px" }}>
              <button className="send-btn" onClick={handleSend}>
                Send
              </button>
              <button
                className="cancel-btn"
                style={{ marginLeft: "10px" }}
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
