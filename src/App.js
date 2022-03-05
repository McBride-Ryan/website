import React from 'react'
import Nav from './Components/Navbar'
import Hero from './Components/Hero'
import Callout from './Components/Callout'
import Benefit from './Components/Benefit'
import Projects from './Components/Projects'

export default function App() {
  return (
    <div>
      <Nav />  
      <Hero /> 
      <Callout/>
      <Benefit/>
      <Projects/>
    </div>
  )
}
