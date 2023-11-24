import React, { useState, useEffect } from 'react';
import './JogoDaMemoria.css'; // Importe o arquivo CSS para aplicar estilos

const imagensUrls = [
  'https://sm.ign.com/t/ign_br/screenshot/default/kuririn_xu12.960.jpgL1',
  'https://sm.ign.com/t/ign_br/screenshot/default/tsunade-1_nfd9.960.png',
  'https://sm.ign.com/t/ign_br/screenshot/default/zenitsu-1_16pq.960.jpg',
  'https://sm.ign.com/t/ign_br/screenshot/default/shinso_5te4.960.jpg',
  'https://sm.ign.com/t/ign_br/screenshot/default/shun-cdz_v2dd.960.jpg',
  'https://sm.ign.com/t/ign_br/screenshot/default/leorio_k28a.960.jpg',
  'https://sm.ign.com/t/ign_br/screenshot/default/hanamichi_s25u.960.jpg',
  'https://sm.ign.com/t/ign_br/screenshot/default/mumen-rider_48gh.960.jpg',
  'https://sm.ign.com/t/ign_br/screenshot/default/tony-tony-chopper_5kph.960.png',
  'https://sm.ign.com/t/ign_br/screenshot/default/mob-psycho_9fwh.960.jpg',
];

const shuffleArray = (array) => {
  const newArray = array.slice();
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

const JogoDaMemoria = () => {
  const [cartas, setCartas] = useState(shuffleArray(imagensUrls.concat(imagensUrls)));
  const [cartasViradas, setCartasViradas] = useState([]);
  const [paresEncontrados, setParesEncontrados] = useState([]);
  const [tempoRestante, setTempoRestante] = useState(120);
  const [paresCorretos, setParesCorretos] = useState([]);
  const [paresErrados, setParesErrados] = useState([]);



  useEffect(() => {
    const temporizador = setInterval(() => {
      if (tempoRestante > 0 && paresEncontrados.length < imagensUrls.length * 2) {
        setTempoRestante((prev) => prev - 1);
      } else {
        clearInterval(temporizador);
        if (tempoRestante === 0) {
          alert('Tempo esgotado! O jogo acabou.');
        }
        if (paresEncontrados.length === imagensUrls.length) {
          alert('Você venceu!!!');
          reiniciarJogo();
        }

      }
    }, 1000);

    return () => clearInterval(temporizador);
  }, [tempoRestante, paresEncontrados]);

  const virarCarta = (index) => {
    if (cartasViradas.length < 2 && !cartasViradas.includes(index)) {
      setCartasViradas([...cartasViradas, index]);
    }
  };

  useEffect(() => {

    if (cartasViradas.length === 2) {
      const [index1, index2] = cartasViradas;
      if (cartas[index1] === cartas[index2]) {
        setParesEncontrados((prev) => [...prev, cartas[index1]]);

      }
      setTimeout(() => {
        setCartasViradas([]);
      }, 1000);
    }
  }, [cartasViradas, cartas, paresEncontrados]);


  const reiniciarJogo = () => {
    setCartas(shuffleArray(imagensUrls.concat(imagensUrls)));
    setCartasViradas([]);
    setParesEncontrados([]);
    setTempoRestante(120);
  };

  return (
    <div>
      
      <div className="tabuleiro">
        {cartas.map((url, index) => (
          <div
            key={index}
            className={`carta ${cartasViradas.includes(index) || paresEncontrados.includes(url) ? 'virada' : ''}`}
            onClick={() => virarCarta(index)}
          >
            {cartasViradas.includes(index) || paresEncontrados.includes(url) ? (
              <img
                src={url}
                alt={`Carta ${index}`}
              />
            ) : null}
          </div>
        ))}
      </div>
      <button onClick={reiniciarJogo}>Reiniciar Jogo</button>
    </div>
  );
};

export default JogoDaMemoria;
