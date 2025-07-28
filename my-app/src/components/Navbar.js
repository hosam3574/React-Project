import React, { useState } from 'react';

export default function Navbar() {
  const [showOptions, setShowOptions] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  const toggleInfo = () => {
    setShowInfo(!showInfo);
  };

  return (
    <>
      <nav style={styles.nav}>
        <img src="/media/log1.png" alt="Logo" style={styles.logo} />


<h1>"اللهم ارزقنا الحلال وبارك لنا فيه"</h1>

        <ul style={styles.links}>
          <li><a href="#" style={styles.link}>Home</a></li>
          <li><a href="https://www.careem.com/ar-AE/rental/" target="_blank" rel="noopener noreferrer" style={styles.link}>Services</a></li>
          <li style={{ position: 'relative' }}>
            <button onClick={toggleOptions} style={styles.linkButton}>
              Contact us
            </button>
            {showOptions && (
              <div style={styles.dropdown}>
                <a href="tel:+1234567890" style={styles.dropdownItem}>📞 اتصل الآن</a>
                <a href="mailto:example@email.com" style={styles.dropdownItem}>✉️ أرسل رسالة</a>
              </div>
            )}
          </li>
        </ul>
      </nav>

      {/* الزر والمعلومات تحت الـ nav */}
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <button 
          style={{ fontSize: '20px', cursor: 'pointer', padding: '10px 20px' }}
          onDoubleClick={toggleInfo}
        >
          Double click to know who I am, and What is my project?!!!{' '}
          <i className="fa-solid fa-face-smile" style={{ color: '#007BFF' }}></i>
        </button>

        {showInfo && (
          <div style={{ marginTop: '20px', textAlign: 'left', maxWidth: '600px', marginInline: 'auto', backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '10px' ,color:'blue' }}>
            <p><strong>My Name:</strong> Hosam Mouyyad Ahmad Tradat</p>
            <p><strong>2nd year:</strong> Software Engineering Student</p>
            <p><strong>Phone:</strong> +916 770245471</p>
            <p><strong>Age:</strong> 20</p>
            <p><strong>Student at:</strong> SDK</p>
            <p><strong>Course:</strong> Front-end</p>
            <p><strong>Email:</strong> hossamtradat@gmail.com</p>
            <p><strong>مشروعي:</strong> 
              بسم الله الرحمن الرحيم، بنسبة لمشروعي مهندس حاولت قد ما اقدر اطبق يلي اخذناه خلال دورتنا،
              المشروع عبارة عن معرض بسيط  شرحت  عن وعن الخدمات يلي بقدمها المعرض 
      وشرحت كيف تستأجر سيارة او اذا حاب تمتلك سيارة احلامك فقط عليك ان تزور المعرض او تقوم بأستئجار السيارة قبل ان توصل مطار دبي عن بعد  ن
             ... وشكرا.
            </p>
          </div>
        )}
      </div>
    </>
  );
}

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#eee',
  },
  logo: {
    height: '50px',
  },
  links: {
    listStyle: 'none',
    display: 'flex',
    gap: '20px',
    margin: 0,
    padding: 0,
  },
  link: {
    textDecoration: 'none',
    color: 'black',
    fontWeight: 'bold',
  },
  linkButton: {
    background: 'none',
    border: 'none',
    color: 'black',
    cursor: 'pointer',
    fontWeight: 'bold',
    textDecoration: 'none',
  },
  dropdown: {
    position: 'absolute',
    top: '100%',
    left: 0,
    backgroundColor: '#fff',
    border: '1px solid #ccc',
    borderRadius: '5px',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
    padding: '10px',
    zIndex: 1000,
  },
  dropdownItem: {
    display: 'block',
    padding: '5px 10px',
    textDecoration: 'none',
    color: '#333',
  },
};

