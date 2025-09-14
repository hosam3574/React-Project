import React from "react";
import "./css/part3.css";
import CarCard from "./carCard";

export default function Part3() {
  return (
    <div>
      <div className="hgit">
        <button className="button">
          <p>POPULAR RENTAL</p>
        </button>
        <h1>Most popular cars rental deals</h1>
      </div>

      <br />
      <br />
      <br />

      {/* كل السيارات */}
      <div className="allcars">
        <CarCard
          name="Jaguar XE L P250"
          image="/media/jaguar car.png"
          price={800}
        />

        <CarCard
          name="Audi R8"
          image="/media/Audi 1 (2).png"
          price={700}
        />

        <CarCard
          name="BMW M3"
          image="/media/bmw m3.png"
          price={900}
        />

        <CarCard
          name="Lamborghini Huracan"
          image="/media/lamborgene car.png"
          price={1000}
        />
      </div>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      {/* قسم شراء السيارات */}
      <div
        style={{
          textAlign: "center",
          color: "blue",
          marginTop: "5",
          padding: "20px",
          borderRadius: "10px",
          fontSize: "25px",
          fontWeight: "bold",
        }}
      >
        🚗 قم بشراء سيارة احلامك من معرضنا
        <div
          style={{
            fontSize: "28px",
            marginTop: "10px",
            animation: "bounceDown 1.5s infinite",
          }}
        >
          ⬇️⬇️⬇️
        </div>
      </div>

      <style>
        {`
          @keyframes bounceDown {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(8px);
            }
          }
        `}
      </style>

      {/* سيارات للبيع */}
      <button className="but1">
        <img className="jaguarcar" src="/media/Container.png" alt="Logo" />
        <p className="namecar">T-Cross – 2023</p>
        <h1>
          <img className="star" src="/media/Star 1.png" alt="Logo" />{" "}
          <h1 className="h1h1">4.8 (2.436 reviews)</h1>
        </h1>
        <img src="/media/caption car.png" alt="Logo" />
        <hr />
        <h1 className="price">price </h1>
        <p className="p1p1"> $ 33,800</p>
        <button className="disgin">
          <h1 className="rentnow">
            <a
              href="https://palmrentcar.com/ar/cars-filter?city=1&from_date=2025-07-28&time_from=10_00&to_date=2025-08-02&time_to=10_00"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "white" }}
            >
              Buy Now
            </a>
          </h1>
        </button>
      </button>

      <button className="but1">
        <img
          className="jaguarcar"
          src="/media/car12-660x440.jpg.png"
          alt="Logo"
        />
        <p className="namecar">Audi A6 3.5 – New</p>
        <h1>
          <img className="star" src="/media/Star 1.png" alt="Logo" />{" "}
          <h1 className="h1h1">4.8 (2.436 reviews)</h1>
        </h1>
        <img src="/media/caption car.png" alt="Logo" />
        <hr />
        <h1 className="price">price </h1>
        <p className="p1p1"> $ 23,800</p>
        <button className="disgin">
          <h1 className="rentnow">
            <a
              href="https://palmrentcar.com/ar/cars-filter?city=1&from_date=2025-07-28&time_from=10_00&to_date=2025-08-02&time_to=10_00"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "white" }}
            >
              Buy Now
            </a>
          </h1>
        </button>
      </button>

      <button className="but1">
        <img
          className="jaguarcar"
          src="/media/car19-660x440.jpg.png"
          alt="Logo"
        />
        <p className="namecar">New GLC – 2023</p>
        <h1>
          <img className="star" src="/media/Star 1.png" alt="Logo" />{" "}
          <h1 className="h1h1">4.8 (2.436 reviews)</h1>
        </h1>
        <img src="/media/caption car.png" alt="Logo" />
        <hr />
        <h1 className="price">price </h1>
        <p className="p1p1"> $ 13,800</p>
        <button className="disgin">
          <h1 className="rentnow">
            <a
              href="https://palmrentcar.com/ar/cars-filter?city=1&from_date=2025-07-28&time_from=10_00&to_date=2025-08-02&time_to=10_00"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "white" }}
            >
              Buy Now
            </a>
          </h1>
        </button>
      </button>

      <button className="but1">
        <img
          className="jaguarcar"
          src="/media/Container (1).png"
          alt="Logo"
        />
        <p className="namecar">Ford Explorer 2023</p>
        <h1>
          <img className="star" src="/media/Star 1.png" alt="Logo" />{" "}
          <h1 className="h1h1">4.8 (2.436 reviews)</h1>
        </h1>
        <img src="/media/caption car.png" alt="Logo" />
        <hr />
        <h1 className="price">price </h1>
        <p className="p1p1"> $ 53,800</p>
        <button className="disgin">
          <h1 className="rentnow">
            <a
              href="https://palmrentcar.com/ar/cars-filter?city=1&from_date=2025-07-28&time_from=10_00&to_date=2025-08-02&time_to=10_00"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "white" }}
            >
              Buy Now
            </a>
          </h1>
        </button>
      </button>
    </div>
  );
}
