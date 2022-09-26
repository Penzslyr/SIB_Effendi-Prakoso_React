import logo from './logo.svg';
import CounterClass from './features/counter/CounterClassComponent'
import CounterFn from './features/counter/CounterFncComponent'

import './App.css';

function App() {
  return (
    <div className="App">
      <CounterFn/>
      <CounterClass/>
    </div>
  );
}

export default App;
