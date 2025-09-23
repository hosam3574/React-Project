import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Part1 from "./components/part1";
import Part2 from "./components/part2";
import Part3 from "./components/part3";
import Part4 from "./components/part4";
import Part5 from "./components/part5";
import Login from "./components/login";




function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) setUser(JSON.parse(savedUser));
  }, []);

  const handleLogin = (loggedInUser) => {
    setUser(loggedInUser);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  if (!user) return <Login onLogin={handleLogin} />;

  return (
    <>
      <Navbar  onLogout={handleLogout} />

      
      <Part1 />
      <Part2 />
      <Part3 />
      <Part4 />
      <Part5 />
    </>
  );
}

export default App;
