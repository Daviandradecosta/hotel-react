import "../style/Reserve.css"

export default function Reserve() {
  return (
    <>
    <main className="reserve-page">
    <section className="reserve card">
        <h2>Reserve sua estadia</h2>
        <p>preencha seus dados abaixo para solicitar sua reserva no Hotel Lux</p>
    </section>


        <form className="reserve-form">
            <label htmlFor="nome">Nome completo</label>
            <input type="text" name="nome" id="nome" required />


            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" required />

            <div className="reserve-grid">
                <div>
                    <label htmlFor="checkin">Check-in</label>
                    <input type="date" name="checkin" id="checkin" required />
                </div>

                <div>
                    <label htmlFor="checkout">Checkout</label>
                    <input type="date" name="checkout" id="checkout" required />
                </div>
            </div>
        <label htmlFor="hospedes">Número de hóspedes</label>
        <input type="number" name="hospedes" id="hospedes" min="1" required />

         <label htmlFor="observacoes">Observações</label>
          <textarea name="observacoes" id="observacoes" placeholder="Alguma solicitação especial?" rows="4"></textarea>

        <button type="submit">Reservar agora</button>

        </form>
    </main>
    </>
  );
}
