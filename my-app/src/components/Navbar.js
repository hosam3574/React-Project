import React, { useState } from 'react';

export default function Navbar() {
  const [showOptions, setShowOptions] = useState(false);

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  return (
    <nav style={styles.nav}>
      <img src="/media/log1.png" alt="Logo" style={styles.logo} />
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
