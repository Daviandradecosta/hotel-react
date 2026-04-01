// ! componente Navbar
import { Link } from "react-router-dom"

import { useState, useEffect } from "react";
import { FaHotel } from "react-icons/fa";
import "../style/Navbar.css";


export default function Navbar() {
  const [scroll, setscroll] = useState(false);

  useEffect(() => {

    function handleScroll() {
      setscroll(window.scrollY > 50);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function ScrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  }

  return (
    <nav className={scroll ? "navbar active" : "navbar"}>
      <h1>
        <FaHotel /> Hotel lux
      </h1>

      <ul>
        <li onClick={() => ScrollToSection("sobre")}>Sobre</li>
        <li onClick={() => ScrollToSection("cards")}>Quartos</li>
        <li onClick={() => ScrollToSection("suporte")}>Suporte</li>
        <li>
          <Link to ="/reserve">Reserve</Link>
        
        </li>

      </ul>
    </nav>
  );
}
