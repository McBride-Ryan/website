import React from 'react'
import Nav from './Components/Navbar'
import Hero from './Components/Hero'
import Callout from './Components/Callout'
import Benefit from './Components/Benefit'
import Cards from './Components/Cards'
import Footer from './Components/Footer'


export default function App() {
  return (
    <div>
      <Nav />  
      <Hero /> 
      <Callout/>
      <Benefit/>
      <Cards/>
      <Footer/>
    </div>
  )
}
