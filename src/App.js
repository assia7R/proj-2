import './index.css';
import Home from "./Home";
import { Route, Routes  } from "react-router-dom";
import Values from './components/Values';
import Prod from './components/Prod';
import Pay from './components/Pay';
import Step2 from './components/Step2';
import Thank from './components/Thank';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route exact path="/" element={<Home/>}></Route>
      <Route exact path="/prod" element={<Prod/>}></Route>
      <Route exact path="/values/:id" element={<Values/>}></Route>
      <Route exact path="/pay" element={<Pay/>}></Route>
      <Route exact path="/step2" element={<Step2/>}></Route>
      <Route exact path="/thx" element={<Thank/>}></Route>
      </Routes>
      
</div>
  );
}

export default App;
