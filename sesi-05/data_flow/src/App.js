import Counter from './component/class/Counter';
import UsersChange from './component/class/UserChange';
import Users from './component/class/Users';
import Hero from './component/props/heroName';
import MyName from './component/props/myName';

function App() {
  return (
    <div>
      <h1>Belajar State</h1>
      
      <Users/>
      <UsersChange/>
      <Counter/>

      {/* Props Example */}
      <Hero/>
      <MyName name="Effendi Prakoso"/>
      
    </div>
  );
}

export default App;
