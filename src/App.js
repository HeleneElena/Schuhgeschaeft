import React from 'react';

import Header from './components/Header/Header';
import Main from './components/Main/Main';

import './App.css';
import Korb from './components/Korb/Korb';

function App() {
  const [korbOpened, setKorbOpened] = React.useState(false);

  return (
    <div className="App">
      
      <Header onClickKorb={() => setKorbOpened(true)} />
      {korbOpened ?  <Korb onClose={() => setKorbOpened(false)} /> : null}
      {!korbOpened ?  <Main /> : null}
      
    </div>
  );
}

export default App;
