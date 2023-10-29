import React, { useState } from 'react';
import './botao.css';
import './perfil.js';
const refresh = 'https://icons.veryicon.com/png/o/miscellaneous/general-icon-collection-face-right-angle/refresh-117.png';
const botAdd ="https://icons.iconarchive.com/icons/paomedia/small-n-flat/256/sign-add-icon.png";
const botRemov = "https://www.freeiconspng.com/uploads/delete-icon-11.png";



function Botao() {
    const [votosHomens, setVotosHomens] = useState(0);
    const [votosMulheres, setVotosMulheres] = useState(0);

    function RecarregarPag() {
        window.location.reload();
    }
    function incrementHomens() {
        setVotosHomens(votosHomens + 1);
    }

    function decrementHomens() {
        setVotosHomens(votosHomens - 1);
    }

    function incrementMulheres() {
        setVotosMulheres(votosMulheres + 1);
    }

    function decrementMulheres() {
        setVotosMulheres(votosMulheres - 1);
    }

    return (
        <div>
            <div className='topoContagem'>
                <div className='divtotalgeral'>
                    <h2 className='tot_gera'>Total:<div className='votosGeral'> {votosHomens + votosMulheres}</div></h2>
                </div>
                <div className='divrecarrega'>
                    <img src={refresh} className='recarrega' onClick={RecarregarPag}></img>
                </div>

            </div>
            <div className='colunas'>
            <div className='divHomem'>
                <img src={botAdd}  className='homem_inc botAdd' onClick={incrementHomens}></img>
                <img src={botRemov} className='homem_dec botRemove' onClick={decrementHomens}></img><br></br>
                <p className='tot_homem'>Homens:<div className='votosGeral'>{votosHomens}</div> </p>
            </div>

            <div className='divmulher'>

            <img src={botAdd}  className='mulher_inc botAdd' onClick={incrementMulheres}></img>
            <img src={botRemov} className='mulher_dec botRemove' onClick={decrementMulheres}></img>

                <p className='tot_mulher'>Mulheres:<div className='votosGeral'>{votosMulheres}</div> </p>

            </div>
            </div>
        </div>
    );
}

export default Botao;