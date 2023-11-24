import React from "react";

import { Link } from "react-router-dom";

const Home = () => {

    return(
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/Atv01"> Atividade 1 - Relógio - Letreiro</Link>
                    </li>
                    <li>
                        <Link to="/Atv02"> Atividade 2</Link>
                    </li>
                    <li>
                        <Link to="/Atv3">Atividade 3</Link>
                    </li>
                    <li>
                        <Link to="/Atv04">Atividade 4</Link>
                    </li>
                    <li>
                        <Link to="/Calculadora">Calculadora</Link>
                    </li>
                    <li>
                        <Link to="/JogoDaMemoria">Memoria</Link>
                    </li>
                </ul>
            </nav>
        
        </div>
    );
}

export default Home;