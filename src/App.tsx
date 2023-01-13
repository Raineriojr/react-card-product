import React from 'react';

import './App.css';

// **Assets
//import Sofa from './assets/sofa.jpg';
//import GifSofa from './assets/gifsofa.gif';
import Rotate from './assets/icons/rotate.png';
import Close from './assets/icons/close.png'

import { CameraScene } from './scenes/camera-scene';
import { XboxScene } from './scenes/xbox-scene';
import { SwordScene } from './scenes/sword-scene';

const items = [
  { id: 0, cod: 420404, title: 'Controle XBOX', value: 79.99 },
  { id: 1, cod: 420405, title: 'TecPix da Tecnomania', value: 322.90 },
  { id: 2, cod: 420406, title: 'Espada lendária', value: 599.99 },
]

let initialValue = items[0]

function App() {
  const [changeProduct, setChangeProduct] = React.useState(initialValue);
  const [isRotate, setIsRotation] = React.useState<boolean>(false);

  const handleAddProduct = () => {
    if (changeProduct.id === items.length - 1) {
      setChangeProduct(items[0])
      return
    }

    let index = changeProduct.id + 1;
    setChangeProduct(items[index]);
    setIsRotation(false)
  }

  const toggleRotationState = () => setIsRotation(!isRotate);

  const RenderItem = () => {
    switch (changeProduct.id) {
      case 0:
        return <XboxScene isRotate={isRotate} />

      case 1:
        return <CameraScene isRotate={isRotate} />

      case 2:
        return <SwordScene isRotate={isRotate} />
    }
  }

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

          {RenderItem()}
        </div>

        <div className='descriptionContainer'>
          <p id='code'>{`CÓDIGO: ${changeProduct.cod}`}</p>
          <h1>{`${changeProduct.title}`}</h1>
          <p id='value'>{`R$ ${changeProduct.value.toFixed(2)}`}</p>

          <button onClick={handleAddProduct}>
            <p>ADICIONAR À CESTA</p>
          </button>
        </div>
      </div>
    </div>
  )
}

export default App;
