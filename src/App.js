import './App.css';
import Device from './Components/Device/Device';
import Tablet from './Components/Tablet/Tablet';
import Watch from './Components/Watch/Watch';

function App() {
  return (
    <div className="App">
      <Device name='Iphone 14' price= '123456'></Device>
      <Watch></Watch>
      <Tablet></Tablet>
    </div>
  );
}

export default App;
