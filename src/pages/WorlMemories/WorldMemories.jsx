import { NavBar } from "../../Components/NavBar/NavBar"
import { CardsContainer } from "../../Components/CardsContainer/CardsContainer"
import { getMemories } from "../../services/firebase"
import { Sidebar } from '../../Components/Sidebar/Sidebar'
import { useState, useEffect } from 'react'

export const WorldMemories = () => {

  const [memoriesList, setMemoriesList] = useState([]) 

  useEffect(() => {
    getMemories()
      .then(data => setMemoriesList(data))
  }, [])

  console.log(memoriesList)
  return (
    <div className="mt-20">
      <NavBar />
      <div className="flex">
        <Sidebar></Sidebar>
        <CardsContainer memoriesList={memoriesList}/>
      </div>
    </div>
  )
}

