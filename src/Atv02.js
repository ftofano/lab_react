
import {Link} from "react-router-dom"
import Botao from "./botao";
import Perfil from "./perfil";
import './Atv02.css';


export default function Atv02() {
    return (
        
        <div>
            <Link to='/'>Voltar</Link>
            <h1>Atividade 02 </h1>
            <div className='container'>
                <Perfil />
                <Botao />

            </div>            

        </div>
        
    );
}