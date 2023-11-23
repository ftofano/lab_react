import React, { useState } from 'react';
import './Calculadora.css';
import { Link } from 'react-router-dom';

export default function Calculadora() {

    const [num, setNun] = useState(0);
    const [prevnum, setPrevNun] = useState(0);
    const [inpoperador, setOperador] = useState();

    function addNun(valor) {
        var inputnum = valor.target.value;

        if (num === 0) {
            setNun(inputnum);
        } else {
            setNun(num + inputnum);
        }
    }

    function aC(num) {
        setNun(0);
    }
    function porcent() {
        setNun(num / 100);
    }
    function mudaSinal() {
        if (num > 0) {
            setNun(-num);
        }
        else {
            setNun(-(num));
        }

    }
    function operador(op) {
        var inpOperador = op.target.value;
        setOperador(inpOperador);
        setPrevNun(num);
        setNun(0);
    }

    function calcular() {
        if (inpoperador === '/') {            
            setNun((prevnum / parseFloat(num)).toFixed(2));
        } else if (inpoperador === '*') {
            setNun((prevnum * parseFloat(num)).toFixed(2));
        } else if (inpoperador === '+') {
            setNun((parseFloat(prevnum) + parseFloat(num)).toFixed(2));
        } else if (inpoperador === '-') {
            setNun((prevnum - parseFloat(num)).toFixed(2));
        }
    
        setOperador(null);
        setPrevNun(0);
    }


    return (
        <container>
            <div className='fundo'>

                <div className='moni'><h1 className='monitor'>{num}</h1></div>
                <div className='teclado'>
                    <div className='fileira'>
                        <button className='cinza' onClick={aC}>Ac</button>
                        <button className='cinza' onClick={mudaSinal}>+/-</button>
                        <button className='cinza' onClick={porcent}>%</button>
                        <button className='orange' onClick={operador} value='/'>/</button>
                    </div>
                    <div className='fileira'>
                        <button className='preto' onClick={addNun} value={7}>7</button>
                        <button className='preto' onClick={addNun} value={8}>8</button>
                        <button className='preto' onClick={addNun} value={9}>9</button>
                        <button className='orange' onClick={operador} value='*'>x</button>
                    </div>
                    <div className='fileira'>
                        <button className='preto' onClick={addNun} value={4}>4</button>
                        <button className='preto' onClick={addNun} value={5}>5</button>
                        <button className='preto' onClick={addNun} value={6}>6</button>
                        <button className='orange' onClick={operador} value={'-'}>-</button>
                    </div>
                    <div className='fileira'>
                        <button className='preto' onClick={addNun} value={1}>1</button>
                        <button className='preto' onClick={addNun} value={2}>2</button>
                        <button className='preto' onClick={addNun} value={3}>3</button>
                        <button className='orange' onClick={operador} value='+'>+</button>
                    </div>
                    <div className='fileira'>
                        <button className='preto' onClick={addNun} value={0}>0</button>
                        <button className='preto' onClick={addNun} value={'.'}>,</button>
                        <button className='orange' onClick={calcular} value='='>=</button>
                    </div>
                </div><br></br>
                <div className='voltar'><Link to='/'>Voltar</Link></div>
            </div>
        </container>
    );


}