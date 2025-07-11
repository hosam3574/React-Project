import React from 'react';

 export default function Navbar() {
  return (
    <nav style={styles.nav}>
      <img src="/media/log1.png" alt="Logo" style={styles.logo} />
      <ul style={styles.links}>
        <li>الرئيسية</li>
        <li>الخدمات</li>
        <li>اتصل بنا</li>
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
};



