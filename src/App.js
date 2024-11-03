import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Main from './components/Main'
import './App.css';
import Home from './components/Home'
import Nav from './components/Nav';
import StarshipList from './components/StarshipList'

const App = () => {
  return (
    <Router>
      <Header />
      <Nav />
      <Main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/starships" element={<StarshipList />} />
        </Routes>
      </Main>
    </Router>
  )
}

export default App

