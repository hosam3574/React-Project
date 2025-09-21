

import React, { useState } from "react";

import './part1.css';




export default function Part1(){
 const [showPickup, setShowPickup] = useState(false);
  const [pickupDate, setPickupDate] = useState("");

   const [showReturn, setShowReturn] = useState(false);
  const [returnDate, setReturnDate] = useState("");

return(

<div className="all"> 

<div className="headline-container">


<h1> Find, book and <br></br> rent a car <span className="easily-container">
      <p className="Easily">Easily </p> 
      <img className="شحطة" src="/media/vector 1.png" alt="Logo" />
    </span></h1>
<p>Get a car wherever and whenever you <br></br> need it with your IOS and Android device.   </p>
 

 <div className="icons">

  <a href="https://play.google.com/store/apps/details?id=com.rentalcars.online&hl=ar"><img className="im1" src="/media/image 2.png" alt="Logo"/></a>

<a href="https://apps.apple.com/us/app/%D8%AA%D8%A3%D8%AC%D9%8A%D8%B1-%D8%B3%D9%8A%D8%A7%D8%B1%D8%A7%D8%AA-%D8%AA%D8%A7%D8%AC%D9%8A%D8%B1-%D8%B3%D9%8A%D8%A7%D8%B1%D8%A7%D8%AA/id1613929322?l=ar"><img className="im2" src="/media/image 3.png" alt="Logo"/></a>






 </div>
 

</div>
<img className="im3" src="/media/car 2 1.png" alt="Logo"/>


  <div
        style={{
          backgroundColor: "#f0f4ff",
          padding: "20px",
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          margin: "20px 0",
          lineHeight: "1.6",
          color: "#333",
          textAlign: "center",
          marginTop: "-240px"

        }}
      >
        <h2 style={{ marginBottom: "12px", fontSize: "22px", color: "#1a1a1a" }}>
          🚗 Car Rental Steps
        </h2>
        <p style={{ fontSize: "16px" }}>
          Before completing your booking, please carefully select the pickup location
          and choose the pickup and return dates that suit you best. This information
          helps our team prepare the car at the right time and place, ensuring a
          smooth, convenient, and safe rental experience, with all necessary details
          provided to facilitate the pickup and return process without any delays.
        </p>
      </div>

<br></br><br></br>
<div className="allimg">
<button className="allimg">
<div className="locaation">

<a href="https://www.google.com/maps/place/Dubai+International+Airport+(DXB)/@25.253174,55.365672,17z"><img className="locatio" src="/media/location.png" alt="Logo"/></a>


 


</div>

 <div className="locaation">
  {/* الصورة */}
  <img
    className="locatio"
    src="/media/Pickup date.png"
    alt="Pickup Date"
    style={{ cursor: "pointer" }}
    onClick={() => setShowPickup(!showPickup)} // toggle عند الضغط
  />

  {/* حقل التاريخ يظهر فقط عند الضغط */}
  {showPickup && (
    <input
      type="date"
      value={pickupDate}
      onChange={(e) => setPickupDate(e.target.value)}
      style={{
        display: "block",
        marginTop: "10px",
        padding: "5px 10px",
        borderRadius: "5px",
        border: "1px solid #ccc"
      }}
    />
  )}
</div>

<div className="locaation">
  {/* صورة Return Date */}
  <img
    className="locatio"
    src="/media/Frame 14.png"
    alt="Return Date"
    style={{ cursor: "pointer" }}
    onClick={() => setShowReturn(!showReturn)} // عند الضغط يظهر/يختفي حقل التاريخ
  />

  {/* حقل التاريخ يظهر فقط عند الضغط */}
  {showReturn && (
    <input
      type="date"
      value={returnDate}
      onChange={(e) => setReturnDate(e.target.value)}
      style={{
        display: "block",
        marginTop: "10px",
        padding: "5px 10px",
        borderRadius: "5px",
        border: "1px solid #ccc"
      }}
    />
  )}
</div>

<div className="search">
  <button
    style={{
      backgroundColor: "blue",
      border: "none",
      borderRadius: "5px",
      width: "100px",
      height: "35px",
      color: "white",
      fontSize: "18px",
      cursor: "pointer"
    }}
    onClick={() => {
      // هنا يزم بتحفظ أو تبعت المعلومات
      const data = {
        pickupDate,
        returnDate
      };
      console.log("تم الإرسال ✅:", data);

      // مثال: تخزين محلي
      localStorage.setItem("searchData", JSON.stringify(data));

      // رسالة للمستخدم
      alert("تم إرسال البيانات:\nPickup: " + pickupDate + "\nReturn: " + returnDate);
    }}
  >
    Send
  </button>
</div>



</button>
</div>





<br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>












</div>





)




}