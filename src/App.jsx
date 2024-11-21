import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

import Main from './components/Main'
import Header from './components/Header'

function App() {
  const [starships, setStarShips] = useState([])
  const [films, setFilms] = useState([])
  const [planets, setPlanets] = useState([])
  const [characters, setCharacters] = useState([])


  useEffect(() => {
    const getStarships = async () => {
      const response = await axios.get(`https://swapi.dev/api/starships/`)
      setStarShips(response.data.results)
    }
    getStarships()
  }, [])

  useEffect(() => {
    const getFilms = async () => {
      const response = await axios.get(`https://swapi.dev/api/films/`)
      setFilms(response.data.results)
    }
    getFilms()
  }, [])
  useEffect(() => {
    const getPlanets = async () => {
      const response = await axios.get(`https://swapi.dev/api/planets/`)
      setPlanets(response.data.results)
    }
    getPlanets()
  }, [])
  useEffect(() => {
    const getCharacters = async () => {
      const response = await axios.get(`https://swapi.dev/api/people/`)
      setCharacters(response.data.results)
    }
    getCharacters()
  }, [])
  
  return (
    <>
    <Header/>
    <Main 
    starships={starships}
    films={films}
    planets={planets}
    characters={characters}
    />
    </>
    
  )
}
export default App
