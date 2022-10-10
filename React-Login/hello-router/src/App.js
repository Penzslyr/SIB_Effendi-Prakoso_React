import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './pages/Home';
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
