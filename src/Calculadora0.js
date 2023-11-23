import React, { useState } from 'react';
import './calculadora.css';
import { Link } from 'react-router-dom';

function Calculadora() {
    const [num, setNum] = useState('');
    const [operador, setOperador] = useState('');
    const [resultado, setResultado] = useState('');

    function seClick(valor) {
        if (isNaN(valor)) {
            if (valor === 'C') {
                setNum('');
                setOperador('');
                setResultado('');
            } else if (valor === '=') {
                if (operador && num) {
                    const resultadoCalculado = calcularResultado();
                    setResultado(resultadoCalculado);
                    setNum(resultadoCalculado);
                    setOperador('');
                }
            } else {
                setOperador(valor);
                setNum((prevNum) => prevNum + valor);
            }
        } else {
            setNum((prevNum) => prevNum + valor.toString());
        }
    }

    function calcularResultado() {
        let num1 = parseFloat(resultado);
        let num2 = parseFloat(num);

    }

    return (
        <div className="calculadora">
            <div className="monitor">{resultado !== '' ? resultado : num || '0'}</div>
            <div className="teclado">
                <div className="fileira">
                    {[7, 8, 9, '/'].map((numero) => (
                        <button key={numero} onClick={() => seClick(numero)}>
                            <div className="bt">{numero}</div>
                        </button>
                    ))}
                </div>
                <div className="fileira">
                    {[4, 5, 6, 'X'].map((numero) => (
                        <button key={numero} onClick={() => seClick(numero)}>
                            <div className="bt">{numero}</div>
                        </button>
                    ))}
                </div>
                <div className="fileira">
                    {[1, 2, 3, '-'].map((numero) => (
                        <button key={numero} onClick={() => seClick(numero)}>
                            <div className="bt">{numero}</div>
                        </button>
                    ))}
                </div>
                <div className="fileira">
                    {['.', 0, 'C', '+'].map((numero) => (
                        <button key={numero} onClick={() => seClick(numero)}>
                            <div className="bt">{numero}</div>
                        </button>
                    ))}
                </div>
                <div className="fileira">
                    <button onClick={() => seClick('=')}>
                        <div className="bt">=</div>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Calculadora;
