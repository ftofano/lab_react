import React, { useState } from 'react';
import './Calculadora.css';
import { Link } from 'react-router-dom';

export default function Calculadora(){

    const [num,setNun] = useState(0);
    const [prevnum,setPrevNun] = useState(0);
    const [inpoperador,setOperador] = useState();

    function addNun(valor){

        var inputnum = valor.target.value;

        if(num === 0){
            setNun(inputnum);
        }
        else{
            setNun(num + inputnum);
        }
        
    }
    function aC(num){
        setNun(0);
    }
    function porcent(){
        setNun(num / 100);
    }
    function mudaSinal(){
        if(num > 0){
            setNun(-num);
        }
        else
        {
            setNun(-(num));
        }
        
    }
    function operador(op){
        var inpOperador = op.target.value;
        setOperador(inpOperador);
        setPrevNun(num);
        setNun(0);

    }

    function calcular(){

        if(operador === '/'){
            setNun(parseFloat(prevnum) / parseFloat(num));
        }else if(operador === '*'){
            setNun(parseFloat(prevnum) * parseFloat(num));

        }else if(operador === '+'){
            setNun(parseFloat(prevnum) + parseFloat(num));
        }else if(operador === '-'){
            setNun(parseFloat(prevnum) - parseFloat(num));
        }
    }

    return(
        <container>
        <div className='fundo'>

                <h1 className='monitor'>{num}</h1>
                <button onClick={aC}>AC</button>
                <button onClick={mudaSinal}>+/-</button>
                <button onClick={porcent}>%</button>
                <button onClick={operador} value='/'>/</button>
                <button onClick={addNun} value={7}>7</button>
                <button onClick={addNun} value={8}>8</button>
                <button onClick={addNun} value={9}>9</button>
                <button onClick={operador}value='X'>X</button>
                <button onClick={addNun} value={4}>4</button>
                <button onClick={addNun} value={5}>5</button>
                <button onClick={addNun} value={6}>6</button>
                <button onClick={operador} value={'-'}>-</button>
                <button onClick={addNun} value={1}>1</button>
                <button onClick={addNun} value={2}>2</button>
                <button onClick={addNun} value={3}>3</button>
                <button  onClick={operador}value='+'>+</button>
                <button onClick={addNun} value={0}>0</button>
                <button onClick={addNun} value={'.'}>,</button>
                <button  onClick={calcular} value='='>=</button>
                <div className='voltar'><Link to='/'>Voltar</Link></div>
        </div>
        </container>        
    );


}