import React from 'react'

import { BrowserRouter, Route, Routes } from 'react-router-dom'


import Home from './src/Components/Home'
import Auth from './src/Components/Auth'
import Header from './src/Components/Header'
import First from './src/Components/First'
import Contactus from './src/Components/Contactus'
import Products from './src/Components/Products'
import About from './src/Components/About'





const Routing = () => {
  return (
  
  
  
    <BrowserRouter>
    <Header/>
    
    
    
    
    
  

    <Routes>
      
    <Route path='/Home'   element={<Home/>}/>
    
    <Route path='/First'   element={<First/>}/>
    <Route path='/Products'   element={<Products/>}/>
    
    
    <Route path='/Contactus'   element={<Contactus/>}/>
    <Route path='/About'   element={<About/>}/>
    <Route path='/Auth'  element={<Auth/>}/>
    <Route path='/Header'   element={<Auth/>}/>

    
    




    </Routes>
    
    </BrowserRouter>
    
  
    
  )
}

export default Routing