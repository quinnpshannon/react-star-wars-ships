import { useState, useEffect } from 'react'
import './App.css'
import TopBar from './components/TopBar'
import ShipHangar from './components/ShipHangar'
import BottomNav from './components/BottomNav'
import { REALgetAllStarships } from './services/sw-api'

function App() {
  const [shipList, setShipList] = useState([{name: 'starship01'}]);
  const getShipList = async() => {
      const starships = await REALgetAllStarships();
      setShipList(starships);
  }
  useEffect(() => {getShipList();}, [])
  return (
    <>
      <TopBar />
        <ShipHangar shipList={shipList}/>
      <BottomNav />
    </>
  )
}

export default App
