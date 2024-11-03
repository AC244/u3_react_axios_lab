import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import StarshipList from './StarshipList'

const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/starships" element={<StarshipList />} />
      </Routes>
    </main>
  )
}

export default Main