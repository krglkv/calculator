import './App.css';

import Output from './component/output/Output';
import Actions from './component/actions/Actions';
import Int from './component/int/Int';
import BtnResult from './component/btnResult/BtnResult';
import Constructor from './component/constructor/Constructor';
import Toggle from './component/toggle/Toggle';

function App() {
  return (
    <div className="App">
      <div>
        <Output/>
        <Actions/>
        <Int/>
        <BtnResult/>
      </div>
      <div>
        <Toggle/>
        <Constructor/>  
      </div>
    </div>
  );
}

export default App;
