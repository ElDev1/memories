import { NavBar } from "../../Components/NavBar/NavBar"
import { CardsContainer } from "../../Components/CardsContainer/CardsContainer"
import { getMemories } from "../../services/firebase"
import { Sidebar } from '../../Components/Sidebar/Sidebar'
import { useState, useEffect } from 'react'
import { Skeleton } from "../../Components/Skeleton/Skeleton"

export const WorldMemories = () => {

  const [memoriesList, setMemoriesList] = useState([])
  const [loading, setLoading] = useState(false) 

  useEffect(() => {
    setLoading(true)
    getMemories()
      .then(data => {
        setMemoriesList(data)
        setLoading(false)
      })

  }, [])


  console.log(memoriesList)
  return (
    <div className="bg-sky-100">
      <NavBar />
      {
        loading ? (
          <div className="flex mt-20">
            <Sidebar memoriesList={memoriesList} setMemoriesList={setMemoriesList} />
            <div className='p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-5'>
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <Skeleton />
            </div>
          </div>
        ) : (
          <div className="flex mt-20">
            <Sidebar memoriesList={memoriesList} setMemoriesList={setMemoriesList} />
            <CardsContainer memoriesList={memoriesList}/>
          </div>
        )
      }
    </div>
  )
}

