import {Routes, Route } from "react-router-dom"
import Reserve from "./pages/Reserve.jsx"
import Navbar from "./components/Navbar.jsx";
import Hero from './components/Hero.jsx'
import Footer from "./components/Footer.jsx";
import Cards from "./components/Cards.jsx";

function Home() {
  return (
    <>
      <Hero/>
    
      <section id="sobre" style={{padding : "60px", textAlign: "center"}}>
        <h2>Sobre</h2>
        <p>Somos Referencia em Hotelaria de luxo.</p>
      </section>
     <Cards/>

       <Footer/>

    </>
  );
}
  function App() {
  return (
    <>
    <Navbar />
       <Routes>
      
    

      <Route path = "/" element={<Home />} />
      <Route path = "/Reserve" element ={<Reserve />} />
        </Routes>
    </>

  );
}

export default App;
