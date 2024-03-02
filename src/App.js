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
import Seva from './components/Seva'
import Admin from './components/Admin'
import Operations from './components/Operations'

function App() {
  return (
    <>
    <Title/>
      <Routes> 
      <Route path = '/manam' element = {<Home/>}/>
      <Route path = '/manam/Operations' element = {<Operations/>}/>
      <Route path = '/manam/admin' element = {<Admin/>}/>
         <Route path = '/manam/base' element = {<Base/>}/>
        <Route path = '/manam/contact' element = {<Contact/>}/>
        <Route path = '/manam/about' element = {<About/>}/>
        <Route path = '/manam/problem' element = {<Problems/>}/>
        <Route path = '/manam/polacy' element = {<Padhakalu/>}/>
        <Route path = '/manam/seva' element = {<Seva/>}/>
        <Route path = '*' element = {<NoData/>}/>
      </Routes>
    </>
  )
}

export default App
