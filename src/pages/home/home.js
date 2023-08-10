import { React, useState } from "react";
import "./home.css";
import Button from "../../components/button/button";

function Home() {
  // declaracion de variable cont mediante useState
  const [cont, setCont] = useState(0);

  function sumar() {
    setCont(cont + 1);
  }

  function restar() {
    setCont(cont - 1);
  }

  function reset() {
    setCont(0);
  }

  return (
    <div className="main">
      <h1>HOLA ESTO ES LA PAGINA DEL HOME</h1>
      <h2>Contador: {cont}</h2>
      <div className="button-container">
        <div onClick={() => sumar()}>
          <Button nombre="Sumar" />
        </div>
        <div onClick={() => restar()}>
          <Button nombre="Restar" />
        </div>
        <div onClick={() => reset()}>
          <Button nombre="Reset" />
        </div>
      </div>
    </div>
  );
}

export default Home;
