import React from 'react';

import './App.css';

// **Assets
import Sofa from './assets/sofa.jpg';
import GifSofa from './assets/gifsofa.gif';
import Rotate from './assets/icons/rotate.png';
import Close from './assets/icons/close.png'

function App() {
  const [isActiveRotation, setActiveRotation] = React.useState<boolean>(false);

  const toggleRotationState = () => setActiveRotation(!isActiveRotation);

  return (
    <div className='container'>
      <div className='card'>
        <div>
          <img
            id='rotateIcon'
            src={isActiveRotation ? Close : Rotate}
            onClick={toggleRotationState}
          />
          {isActiveRotation
            ?
            <img id='gifSofa' src={GifSofa} />
            :
            <img id='sofa' src={Sofa} />
          }
        </div>

        <div className='descriptionContainer'>
          <p id='code'>CÓDIGO: 42404</p>
          <h1>Sofá Margot II - Rosé</h1>
          <p id='value'>R$ 4.000</p>

          <button>
            <p>ADICIONAR À CESTA</p>
          </button>
        </div>
      </div>
    </div>
  )
}

export default App;
