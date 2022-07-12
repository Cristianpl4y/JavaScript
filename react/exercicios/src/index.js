import React from 'react'
import ReactDOM  from 'react-dom'

// import Primeiro from  './componentes/Primeiro'
// import BomDia from './componentes/BomDia'
//ReactDOM.render(<BomDia nome='Cristian' />, document.getElementById('root'))

//import Multiplos , { BoaNoite } from './componentes/Multiplos'

// ReactDOM.render(
//     <div>
//         <Multiplos.BoaTarde nome='Ana'/>
//         <BoaNoite nome='Bia'/>
//     </div>
// , document.getElementById('root'))

/* import Saudacao from './componentes/Saudacao'

ReactDOM.render(
    <div>
        <Saudacao tipo="Bom dia" nome="Cristian"/>
    </div>
, document.getElementById('root')) */


import Pai from './componentes/Pai'
import Filho from "./componentes/Filho"

ReactDOM.render(
    <div>
        <Pai nome="Paulo" sobrenome="Silva" />
        {/* Como Passo os componentes Filhos aqui ?  */}
        <Filho nome="Pedro" />
        <Filho nome="Paulo" />
        <Filho nome="Carla" />
    </div>
, document.getElementById('root'))