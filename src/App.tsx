import React from 'react';

import './App.css';

// **Assets
import Sofa from './assets/sofa.jpg';
import GifSofa from './assets/gifsofa.gif';
import Rotate from './assets/icons/rotate.png';
import Close from './assets/icons/close.png'
import { HouseScene } from './scenes/house-scene';
import { CokeScene } from './scenes/coke-scene';

const description = [
  { cod: 420404, title: 'Coca cola geladinha', value: 10.00 },
  { cod: 430405, title: 'Casa muito engraçada', value: 2.00 },
]

function App() {
  const [changeProduct, setChangeProduct] = React.useState<boolean>(false);
  const [isRotate, setIsRotation] = React.useState<boolean>(false);

  const handleAddProduct = () => {
    setChangeProduct(!changeProduct);
    setIsRotation(false)
  }
  const toggleRotationState = () => setIsRotation(!isRotate);

  return (
    <div className='container'>
      <div className='card'>
        {/*<div id='sofa'>
           <img
            id='rotateIcon'
            src={isRotate ? Close : Rotate}
            onClick={toggleRotationState}
          />
          {changeProduct
            ?
            <img id='gifSofa' src={GifSofa} />
            :
            <img id='sofa' src={Sofa} />
          } 
        </div>*/}
        <div id='scene'>
          <img
            id={isRotate ? 'closeIcon' : 'rotateIcon'}
            src={isRotate ? Close : Rotate}
            onClick={toggleRotationState}
          />
          
          {changeProduct
            ?
            <CokeScene isRotate={isRotate}/>
            :
            <HouseScene isRotate={isRotate}/>
          }
        </div>

        <div className='descriptionContainer'>
          <p id='code'>{`CÓDIGO: ${changeProduct ? description[0].cod : description[1].cod}`}</p>
          <h1>{`${changeProduct ? description[0].title : description[1].title}`}</h1>
          <p id='value'>{`R$ ${changeProduct ? description[0].value.toFixed(2) : description[1].value.toFixed(2)}`}</p>

          <button onClick={handleAddProduct}>
            <p>ADICIONAR À CESTA</p>
          </button>
        </div>
      </div>
    </div>
  )
}

export default App;
