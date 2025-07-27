import React, { useState } from "react";
import './css/part4.css';

export default function Part4() {
  const [showFeedback, setShowFeedback] = useState(false);
  const [feedback, setFeedback] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (feedback.trim() !== '') {
      console.log('💬 رأي المستخدم:', feedback); 
      setSubmitted(true);
      setFeedback('');
    }
  };

  return (
    <div className="background">
      <br />

      <div>
        <button className="button">
          <p>TESTIMONIALS</p>
        </button>
        <h1 className="whatpepolsay">What people say about us?</h1>

        <br /><br /><br /><br />

        <div>
          <div><img className="im0" src="/media/“ (1).png" alt="Logo" /></div>
          <div><img className="im10" src="/media/“.png" alt="Logo" /></div>
        </div>
      </div>

      <div>
        <button className="backbutton">
          <img src="/media/Frame 984.png" alt="Logo" />
        </button>

        <button className="idet">
          <div className="manpic">
            <img src="/media/man picther.png" alt="Logo" />
          </div>
          <div className="clas">
            <h1>5.0 <span>stars</span></h1>
            <br />
            <img src="/media/stars.png" alt="Logo" />
            <br />
            <p>
              “I feel very secure when using <br />
              caretall's services. Your customer <br />
              care team is very enthusiastic and <br />
              the driver is always on time.”
            </p>
            <br /><br />
            <h2>Charlie Johnson</h2>
          </div>
        </button>

        <button className="backbutton3">
          <img src="/media/Rectangle 8 (1).png" alt="Logo" />
        </button>

      
        <button
          className="feedback-button"
          onClick={() => setShowFeedback(!showFeedback)}
        >
          📢 ضع رأيك عزيزي الزبون
        </button>

       
        {showFeedback && (
          <div style={{ marginTop: '20px', textAlign: 'center' }}>
            {!submitted ? (
              <>
                <textarea
                  placeholder="اكتب رأيك هنا..."
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  style={{
                    width: '300px',
                    height: '100px',
                    padding: '10px',
                    fontSize: '16px',
                    borderRadius: '6px',
                    border: '1px solid #ccc',
                    resize: 'none',
                    marginBottom: '10px',
                  }}
                />
                <br />
                <button
                  onClick={handleSubmit}
                  style={{
                    padding: '10px 20px',
                    fontSize: '16px',
                    borderRadius: '6px',
                    border: 'none',
                    backgroundColor: '#28a745',
                    color: 'white',
                    cursor: 'pointer'
                  }}
                >
                  إرسال
                </button>
              </>
            ) : (
              <p style={{ color: 'green', fontWeight: 'bold' }}>
                ✅ تم إرسال رأيك بنجاح! شكراً لك.
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
