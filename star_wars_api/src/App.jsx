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
      let listOfPeople = res.data.results
      listOfPeople.map((person, index) => {
        person.id = index
      })
      setPeople(listOfPeople)
    }
    getPeople()

    const getPlanets = async () => {
      const res = await axios.get(`${BASE_URL}/planets`)
      let listOfPlanets = res.data.results
      listOfPlanets.map((planet, index) => {
        planet.id = index
      })
      setPlanets(listOfPlanets)
    }
    getPlanets()

    const getFilms = async () => {
      const res = await axios.get(`${BASE_URL}/films`)
      let listOfFilms = res.data.results
      listOfFilms.map((film, index) => {
        film.id = index
      })
      setFilms(listOfFilms)
    }
    getFilms()

    const getSpecies = async () => {
      const res = await axios.get(`${BASE_URL}/species`)
      let listOfSpecies = res.data.results
      listOfSpecies.map((specie, index) => {
        specie.id = index
      })
      setSpecies(listOfSpecies)
    }
    getSpecies()

    const getVehicles = async () => {
      const res = await axios.get(`${BASE_URL}/vehicles`)
      let listOfVehicles = res.data.results
      listOfVehicles.map((vehicle, index) => {
        vehicle.id = index
      })
      setVehicles(listOfVehicles)
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
