import { NavBar } from "../../Components/NavBar/NavBar"
import { CardsContainer } from "../../Components/CardsContainer/CardsContainer"
import { useState, useEffect } from "react"
import { getMemories } from "../../services/firebase"

export const MyMemories = () => {

  const [memoriesList, setMemoriesList] = useState([]) 

  useEffect(() => {
    getMemories()
      .then(data => {
        const memoriesListFiltered = data.filter(memorie => memorie.createdBy.email === localStorage.getItem('email'))
        setMemoriesList(memoriesListFiltered)
      })
  }, [])

  console.log(memoriesList)

  return (
    <div className="bg-sky-100 h-full">
      <NavBar />
      <div className="flex justify-center mt-20">
        <h1 className="mt-20 text-sky-600 font-semibold text-2xl">Your Memories</h1>
      </div>
      <div className="flex justify-center mt-20 bg-sky-100">
        <CardsContainer memoriesList={memoriesList} myMemories={'true'}/>  
      </div>
    </div>
  )
}

