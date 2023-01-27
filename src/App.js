import React, { useState } from 'react';
import './App.css';

const App =() => {
  const [color, setColor] = useState('red');


  const boxClick = () => {
    color === 'red' ? setColor('blue') : setColor('red')
  }

  return (
    
    <div style={{backgroundColor: color, with: '100%', height: '100%', position: 'relative'}}>
     <button onClick={()=>boxClick()}>Troque de cor!</button>
    </div>
  );
}

export default App;
