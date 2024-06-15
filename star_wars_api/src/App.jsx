import { useState, useEffect } from 'react'
import { BASE_URL } from './globals'
import axios from 'axios'
import Header from './components/Header'
import Main from './components/Main'
import './App.css'

function App() {
  const [starships, setStarships] = useState([])

  useEffect(() => {
    const getStarships = async () => {
      const res = await axios.get(`${BASE_URL}/starships`)
      setStarships(res.data.results)
    }
    getStarships()
  }, [])

  //console.log(starships)

  return (
    <div>
      <Header/>
      <Main starships = {starships}/>
    </div>
  )
}

export default App
