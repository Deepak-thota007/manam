import { useState } from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Base from './components/Base'
import Contact from './components/Contact'
import About from './components/About'
import Navbar from './components/Navbar'
import NoData from './components/NoData'
import Title from './components/Title'
import './App.css'
import Problems from './components/Problems'
import Padhakalu from './components/Padhakalu'
import Home from './components/Home'

function App() {
  return (
    <>
    <Title/>
      <Routes> 
      <Route path = '/' element = {<Home/>}/>
         <Route path = '/base' element = {<Base/>}/>
        <Route path = '/contact' element = {<Contact/>}/>
        <Route path = '/about' element = {<About/>}/>
        <Route path = '/problem' element = {<Problems/>}/>
        <Route path = '/polacy' element = {<Padhakalu/>}/>
        <Route path = '*' element = {<NoData/>}/>
      </Routes>
    </>
  )
}

export default App
