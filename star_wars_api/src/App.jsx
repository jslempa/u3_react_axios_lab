import { useState, useEffect } from 'react'
import { BASE_URL } from './globals'
import axios from 'axios'
import Header from './components/Header'
import Main from './components/Main'
import './App.css'

function App() {
  const [people, setPeople] = useState([])
  const [planets, setPlanets] = useState([])
  const [films, setFilms] = useState([])
  const [species, setSpecies] = useState([])
  const [vehicles, setVehicles] = useState([])
  const [starships, setStarships] = useState([])

  useEffect(() => {
    const getPeople = async () => {
      const res = await axios.get(`${BASE_URL}/people`)
      setPeople(res.data.results)
    }
    getPeople()

    const getPlanets = async () => {
      const res = await axios.get(`${BASE_URL}/planets`)
      setPlanets(res.data.results)
    }
    getPlanets()

    const getFilms = async () => {
      const res = await axios.get(`${BASE_URL}/films`)
      setFilms(res.data.results)
    }
    getFilms()

    const getSpecies = async () => {
      const res = await axios.get(`${BASE_URL}/species`)
      setSpecies(res.data.results)
    }
    getSpecies()

    const getVehicles = async () => {
      const res = await axios.get(`${BASE_URL}/vehicles`)
      setVehicles(res.data.results)
    }
    getVehicles()

    const getStarships = async () => {
      const res = await axios.get(`${BASE_URL}/starships`)
      let listOfStarships = res.data.results
      listOfStarships.map((starship, index) => {
        starship.id = index
      })
      console.log(listOfStarships)
      setStarships(listOfStarships)
    }
    getStarships()
  }, [])

  return (
    <div>
      <Header/>
      <Main people = {people}
            planets = {planets}
            films = {films}
            species = {species}
            vehicles = {vehicles}
            starships = {starships}/>
    </div>
  )
}

export default App
