import React, { useEffect, useState } from 'react';
import './Letreiro.css';

function Letreiro() {
  const [frase, setFrase] = useState("Venha estudar na Fatec");
  const [i, setI] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (i < frase.length) {
        setI(i + 1);
      } else {
        setI(0); // Reinicia a contagem para repetir a frase
      }
    }, 250);

    return () => clearInterval(interval);
  }, [i, frase]);

  return (
    <div className="Letreiro">
      {frase.slice(0, i + 1)}
    </div>
  );
}

export default Letreiro;
