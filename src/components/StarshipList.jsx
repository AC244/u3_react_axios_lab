import React, { useEffect, useState } from 'react'
import axios from 'axios'

const StarshipList = () => {
  const [starShips, setStarShips] = useState([])

  useEffect(() => {
    const fetchStarships = async () => {
      try {
        const response = await axios.get('https://swapi.dev/api/starships/')
        setStarShips(response.data.results)
      } catch (error) {
        console.error('Error fetching starships:', error)
      }
    }
    fetchStarships()
  }, [])

  return (
    <div>
      <h2>Starships</h2>
      <ul>
        {starShips.map((ship, index) => (
          <li key={index}>{ship.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default StarshipList
