import React from "react";
import { Container } from "react-bootstrap";

function About(props) {
  return (
    <div
      className="pt-4 mt-5 mb-4"
      id="about"
      style={{
        backgroundColor: "#6a798c",
        borderRadius: "0.5rem",
        color: "#fff",
      }}
    >
      <Container>
        <h1>O nas:</h1>
        <p className="pb-4">
          <b>PIZZERIA & RESTAURANT RICCARDO</b> znajduje się na Oruni Górnej
          przy Placu Czerwona Torebka w Gdańsku. Riccardo tworzą osoby
          kreatywne, z wieloletnim doświadczeniem, jak również osoby młode,
          otwarte, pełne optymizmu i zaangażowania. Naszym celem było stworzenie
          miejsca nowego, o prawdziwie wyjątkowym klimacie, do którego chętnie
          się powraca, które niechętnie się opuszcza. Ciepłe wnętrze jak i
          stworzona przez nas atmosfera pozwalają na pełen relaks i chwilę
          zapomnienia.Każdy odnajdzie tu coś dla siebie, zarówno dorośli,
          młodzież, jak i rodzice z dziećmi. Proponujemy szeroki wybór kuchni
          polskiej i europejskiej. SERDECZNIE ZAPRASZAMY!
        </p>
      </Container>
    </div>
  );
}

export default About;
