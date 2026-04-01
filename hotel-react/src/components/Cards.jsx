import "../style/Cards.css";
import { FaWifi, FaSwimmingPool, FaCoffee } from "react-icons/fa";
export default function Cards() {
  return (
    <section id="cards" className="cards">
      <h2>Quartos</h2>

      <div className="card-container">
        <div className="card card1">
          <div className="overlay">
            <FaWifi className="icon" />

            <h3>Wi-fi Gratis</h3>

            <p>Internet de Alta Velocidade</p>
          </div>
        </div>
        <div className="card card2">
          <div className="overlay">
            <FaSwimmingPool className="icon" />

            <h3>Piscina</h3>

            <p>Area de Lazer Completa</p>
          </div>
        </div>
        <div className="card card3">
          <div className="overlay">
            <FaCoffee className="icon" />

            <h3>Cafe da manha</h3>

            <p>Incluso em todas as diarias</p>
          </div>
        </div>
      </div>
    </section>
  );
}
