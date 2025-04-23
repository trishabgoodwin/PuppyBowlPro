import { useState } from 'react'
import {Routes, Route, Link} from 'react-router-dom';
import './App.css'
import Nav from './Components/Nav';
import SinglePlayer from './Components/SinglePlayer';
import AllPlayers from './Components/AllPlayers';

function App() {

  return (
    <>
    <div id="navbar">
      <Nav />
    </div>
    <div>
      <Routes>
        <Route path='/' element={<AllPlayers/>} />
        <Route path='/SinglePlayer/:id' element={<SinglePlayer/>} />
     </Routes>
    </div>
     
    </>
  )
}

export default App
