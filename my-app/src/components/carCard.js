import React, { useState, useEffect } from "react";
import "./css/part3.css";

export default function CarCard({ name, image, price }) {
  const [showModal, setShowModal] = useState(false);
  const [days, setDays] = useState(1);
  const [driverAge, setDriverAge] = useState("");
  const [nationality, setNationality] = useState("dubai");
  const [phone, setPhone] = useState("");
  const [passport, setPassport] = useState(null);
  const [submittedData, setSubmittedData] = useState(null);

  const totalPrice = days * price;

  const handleSubmit = (e) => {
    e.preventDefault();

    const bookingData = {
      carName: name,
      days,
      driverAge,
      nationality,
      phone: nationality === "dubai" ? phone : null,
      passport: nationality === "tourist" ? passport?.name : null,
      totalPrice,
    };

    setSubmittedData(bookingData);
    setShowModal(false);
  };

  // ⏳ اخفاء ملخص الحجز بعد 5 ثواني
  useEffect(() => {
    if (submittedData) {
      const timer = setTimeout(() => {
        setSubmittedData(null);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [submittedData]);

  return (
    <div className="car-card">
      {/* البطاقة */}
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

            <form onSubmit={handleSubmit}>
              <div className="modal-field">
                <label>Driver Age:</label>
                <input
                  type="number"
                  value={driverAge}
                  onChange={(e) => setDriverAge(e.target.value)}
                  required
                />
              </div>

              <div className="modal-field">
                <label>Rental Days:</label>
                <input
                  type="number"
                  min="1"
                  value={days}
                  onChange={(e) => setDays(Number(e.target.value))}
                  required
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
                    required
                  />
                </div>
              ) : (
                <div className="modal-field">
                  <label>Upload Passport:</label>
                  <input
                    type="file"
                    accept="image/*,.pdf"
                    onChange={(e) => setPassport(e.target.files[0])}
                    required
                  />
                </div>
              )}

              <h3>Total Price: {totalPrice} AED</h3>

              <div className="modal-buttons">
                <button type="button" onClick={() => setShowModal(false)}>
                  Close
                </button>
                <button type="submit">Confirm Booking</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ملخص الحجز */}
      {submittedData && (
        <div className="submitted-info">
          <h3>✅ Booking Summary</h3>
          <p>Car: {submittedData.carName}</p>
          <p>Days: {submittedData.days}</p>
          <p>Driver Age: {submittedData.driverAge}</p>
          <p>Nationality: {submittedData.nationality}</p>
          {submittedData.phone && <p>Phone: {submittedData.phone}</p>}
          {submittedData.passport && <p>Passport: {submittedData.passport}</p>}
          <p>Total Price: {submittedData.totalPrice} AED</p>
          <small className="fade-msg">This message will disappear in 5s...</small>
        </div>
      )}
    </div>
  );
}
