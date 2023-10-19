import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';
import './Relogio.css';

function Relogio() {
  const [hora, setHora] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      const agora = new Date();
      const formRelogio = format(agora, 'HH:mm:ss');
      setHora(formRelogio);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="Relogio">
      <div id="relogio">{hora}</div>
    </div>
  );
}

export default Relogio;
