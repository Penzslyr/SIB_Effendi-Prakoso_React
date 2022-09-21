import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import AboutCompany from './pages/AboutCompany';
import AboutMe from './pages/AboutMe';
import Members from './pages/Members';
import Member from './pages/Member';
import Items from './pages/Items';
import Item from './pages/Item';
import ProtectedRoute from './components/ProtectedRoute';
import Login from './pages/Login';


function App() {
  return (
    <div className="container">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />}>
          <Route path='about-company' element={<AboutCompany />} />
          <Route path='about-me' element={<AboutMe />} />
        </Route>
        <Route path="/members" element={ <Members/> }>
        <Route path=':memberName' element={ <Member/> } />
        </Route>
        <Route 
          path='/items' 
          element={ 
            <ProtectedRoute>
             <Items/> 
            </ProtectedRoute>
          }>
          <Route path=':itemId' element={ <Item/> } />
        </Route>
        <Route path="/login" element={<Login/>}/>
        
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
