import { useState, useEffect } from 'react'
import './App.css'
import TopBar from './components/TopBar'
import ShipCard from './components/ShipCard'
import BottomNav from './components/BottomNav'

function App() {
  return (
    <>
      <TopBar />
      <ShipCard />
      <BottomNav />
    </>
  )
}

export default App
