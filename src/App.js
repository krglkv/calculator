import './App.css';
import { useState } from 'react';

import Output from './component/output/Output';
import Actions from './component/actions/Actions';
import Int from './component/int/Int';
import BtnResult from './component/btnResult/BtnResult';
import Constructor from './component/constructor/Constructor';
import Toggle from './component/toggle/Toggle';

function App() {
  const [mode, setMode] = useState(false);

  const onToggle = () => {
    setMode(!mode);
  }

  return (
    <div className="App">
      <div>
        <Output/>
        <Actions/>
        <Int/>
        <BtnResult/>
      </div>
      <div>
        <Toggle onToggle={onToggle} mode={mode}/>
        <Constructor/>  
      </div>
    </div>
  );
}

export default App;
