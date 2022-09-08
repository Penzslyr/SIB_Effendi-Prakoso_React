import Layout from './pages/Layout'
import React from 'react'
import Meetup from './components/navbar/Meetup'
import Explore from './components/navbar/Explore'
import Login from './components/navbar/Login'
import {Routes, BrowserRouter, Redirect, Switch, Route} from "react-router-dom"
import Navbar from './components/Navbar';
import Footer from './pages/footer'

function App() {
    const navTitle = "Qtemu"
    const navText = "Create Meetup"
    const navText2 = "Explore"
    const navLogin = "Login"

    //Variable props yang akan dikirimkan ke component Footer
    const footerText = 'Copyright Hacktiv8 2018'

  return (
    <>
    <div className='App'>
      <BrowserRouter>
      <Navbar navTitle={navTitle} navText={navText} navText2={navText2} navLogin={navLogin}/>
      <Routes>
        <Route path="/" element={<Layout/>}></Route>
        <Route path="/meetup" element={<Meetup/>}/>
        <Route path="/explore" element={<Explore/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
      <Footer footerText={footerText}/>
      </BrowserRouter>
      </div>
    </>
  );
}

export default App;

