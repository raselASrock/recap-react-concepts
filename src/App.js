import './App.css';
import Device from './Components/Device/Device';
import Watch from './Components/Watch/Watch';

function App() {
  return (
    <div className="App">
      <Device name='Iphone 14' price= '123456'></Device>
      <Watch></Watch>
    </div>
  );
}

export default App;
