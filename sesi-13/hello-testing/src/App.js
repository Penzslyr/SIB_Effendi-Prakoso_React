import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Users from "./pages/Users"
import About from "./pages/About"
import {Route, Routes} from 'react-router-dom'
import "bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="container">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Users" element={<Users/>}/>
        <Route path="/About" element={<About/>}/>
      </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
