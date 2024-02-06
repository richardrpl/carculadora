
import './App.css';
import freeCodeCamp from './imagenes/FreeCodeCamp.png';
import Boton from './componentes/boton';
import Pantalla from './componentes/pantalla';
import BotonClear from './componentes/botonClear';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

const [input, setInput] = useState('');

const agregarInput = val => {
  setInput(input + val);
};

const calcularResultado = ()=> {
  if(input) {
    setInput(evaluate(input));
  } else {
    alert("por favor ingrese valores para realizar los calculos.")
  };
};

  return (
    <div className="App">
      <div className='freecodecamp-logo-comtenedor'>
<img 
src={freeCodeCamp}
className='freecodecamp-logo'
alt='logo de freeCodeCamp' />
      </div>
      <div className='contenedor-calculadora'>
        <Pantalla input={input} />
           <div className='fila'>
            <Boton manejarClic={agregarInput}>1</Boton>
            <Boton manejarClic={agregarInput}>2</Boton>
            <Boton manejarClic={agregarInput}>3</Boton>
            <Boton manejarClic={agregarInput}>+</Boton>
           </div>
           <div className='fila'>
            <Boton manejarClic={agregarInput}>4</Boton>
            <Boton manejarClic={agregarInput}>5</Boton>
            <Boton manejarClic={agregarInput}>6</Boton>
            <Boton manejarClic={agregarInput}>-</Boton>
           </div>
           <div className='fila'>
            <Boton manejarClic={agregarInput}>7</Boton>
            <Boton manejarClic={agregarInput}>8</Boton>
            <Boton manejarClic={agregarInput}>9</Boton>
            <Boton manejarClic={agregarInput}>*</Boton>
           </div>
           <div className='fila'>
            <Boton manejarClic={calcularResultado}>=</Boton>
            <Boton manejarClic={agregarInput}>0</Boton>
            <Boton manejarClic={agregarInput}>.</Boton>
            <Boton manejarClic={agregarInput}>/</Boton>
           </div>
           <div className='fila'>
            <BotonClear manejarClear={()=>setInput('')}>
              Clear
              </BotonClear>
           </div>
      </div>
    </div>
  );
}

export default App;
