import './App.css';

import Output from './component/output/Output';
import Actions from './component/actions/Actions';
import Int from './component/int/Int';
import BtnResult from './component/btnResult/BtnResult';

function App() {
  return (
    <div className="App">
      <Output/>
      <Actions/>
      <Int/>
      <BtnResult/>
    </div>
  );
}

export default App;
