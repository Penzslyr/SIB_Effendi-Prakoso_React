import logo from './logo.svg';
import Clock from './components/Clock'
import Halu from './components/Halu'
import ErrorBoundary from './components/ErrorBoundary'
import FunctionClick from './components/FunctionClick'
import TodoFunction from './components/TodoFunction';
import ClockClass from './components/ClassClock/ClockClass';
import RealtimeClock from './components/FunctionClock/RealtimeClock';

function App() {
  return (
    <div className="App">
      <Clock/>
      <hr/>


      {/* this is error boundary */}
      <ErrorBoundary>
       {/* this Halu , get api */}
       <Halu/>
       {/* <TodoFunction/> */}
      </ErrorBoundary>

      {/* this is function click TO check click to many times*/}
      <FunctionClick/>


      {/* This is Clock Class */}
      <ClockClass/>

      {/* This is Clock Function */}
      <RealtimeClock/>
    </div>
  );
}

export default App;
