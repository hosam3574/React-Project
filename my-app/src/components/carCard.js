import React, { useState } from "react";
import "./css/part3.css";

export default function CarCard({ name, image, price }) {
  const [showModal, setShowModal] = useState(false);
  const [days, setDays] = useState(1);
  const [driverAge, setDriverAge] = useState("");
  const [nationality, setNationality] = useState("dubai");
  const [phone, setPhone] = useState("");
  const [passport, setPassport] = useState(null);

  const totalPrice = days * price;

  return (
    <div className="car-card">
      {/* الكارد */}
      <button className="but1">
        <img className="jaguarcar" src={image} alt={name} />
        <p className="namecar">{name}</p>

        <h1>
          <img className="star" src="/media/Star 1.png" alt="star" />{" "}
          <span className="h1h1">4.8 (2,436 reviews)</span>
        </h1>

        <img src="/media/caption car.png" alt="caption" />
        <hr />

        <h1 className="price">Price</h1>
        <p className="p1p1">{price} AED/day</p>

        <button className="disgin" onClick={() => setShowModal(true)}>
          <h1 className="rentnow">Rent Now</h1>
        </button>
      </button>

      {/* المودال */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>{name} Rental Form</h2>

            <div className="modal-field">
              <label>Driver Age:</label>
              <input
                type="number"
                value={driverAge}
                onChange={(e) => setDriverAge(e.target.value)}
              />
            </div>

            <div className="modal-field">
              <label>Rental Days:</label>
              <input
                type="number"
                min="1"
                value={days}
                onChange={(e) => setDays(e.target.value)}
              />
            </div>

            <div className="modal-field">
              <label>Nationality:</label>
              <select
                value={nationality}
                onChange={(e) => setNationality(e.target.value)}
              >
                <option value="dubai">Dubai Resident</option>
                <option value="tourist">Tourist</option>
              </select>
            </div>

            {nationality === "dubai" ? (
              <div className="modal-field">
                <label>Phone Number:</label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            ) : (
              <div className="modal-field">
                <label>Upload Passport:</label>
                <input
                  type="file"
                  accept="image/*,.pdf"
                  onChange={(e) => setPassport(e.target.files[0])}
                />
              </div>
            )}

            <h3>Total Price: {totalPrice} AED</h3>

            <div className="modal-buttons">
              <button onClick={() => setShowModal(false)}>Close</button>
              <button>Confirm Booking</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
