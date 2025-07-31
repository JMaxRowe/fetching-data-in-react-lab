import { useState, useEffect } from 'react'
import StarshipList from './assets/StarshipList/starshipList'
import { starshipIndex } from './services/Starships';
import './App.css'

const App =  () => {
  const [starships, setStarships] = useState ([])
  const [error, setError] = useState (null)
  const [displayedStarships, setDisplayedStarships] = useState([])
  useEffect(() =>{
    const fetchStarships = async() =>{
      try {
        const starshipData = await starshipIndex()
        console.log(starshipData)
        setStarships(starshipData)
      } catch (error) {
        setError(error.message)
      }
    }
    fetchStarships()
  }, [])

  return (
    <>
    <h1>Star Wars API</h1>
    <h2>Starships</h2>
    <StarshipList starships={starships}/>
    </>
  );
}

export default App