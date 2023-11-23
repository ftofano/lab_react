import './botao.js';

import React, { useState } from 'react';


const homem = {
    name: 'Homen',
    imageUrl: 'https://cdn-icons-png.flaticon.com/512/236/236831.png',
    imageSize: 90,
};
const mulher= {
    name: 'Mulher',
    imageUrl: 'https://cdn.icon-icons.com/icons2/218/PNG/512/Woman_25435.png',
    imageSize: 90,
};

function Perfil() {
    return (
        <div className='colunas'>
            <div className="perfhomem">
            <img className="perfilHomem" src={homem.imageUrl} alt={'Foto' + homem.name} ></img>
            <h2 className="h2homem">Homem</h2>
            </div>            
            <div className="perfmulher">
            <img className="perfilMulher" src={mulher.imageUrl} alt={'Foto' + mulher.name} ></img>
            <h2 className="h2mulher">Mulher</h2>
            </div>
        </div>
    );
}
export default Perfil