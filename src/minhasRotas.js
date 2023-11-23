import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./Home";

import Atv01 from "./Atv01";

import Atv02 from "./Atv02";

import Atv3 from "./Atv3";

import Atv04 from "./Atv04";

import Calculadora from "./Calculadora";    

export default function MinhasRotas() {
    return (
        
        <BrowserRouter>
            <Routes>
                <Route path="/" element= {<Home />} />
                <Route path="/Atv01" element= {<Atv01 />} />
                <Route path="/Atv02" element= {<Atv02 />} />
                <Route path="/Atv3" element= {<Atv3 />} />
                <Route path="/Atv04" element= {<Atv04 />} />
                <Route path= "/Calculadora" element={<Calculadora />}/>
            </Routes>
        </BrowserRouter >

    );
}