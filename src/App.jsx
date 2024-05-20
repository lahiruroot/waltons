import React from 'react'
import Navbar from './components/navbar/navbar'
import HomeSection from './components/home/home'
import './main.css'
import './costum_css/scrollbar.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import Heroscreen from './components/hadder/hadder'
import Devider from './components/devider/devider'
function App() {

  return (
    <>
      <Navbar />
      <Heroscreen />
      <HomeSection />
    </>
  )
}

export default App

