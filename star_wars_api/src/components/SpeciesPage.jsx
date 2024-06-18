import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const SpeciesPage = (props) => {

    console.log(props)

    const [film, setFilm] = useState('')

    let { id } = useParams()

    console.log(useParams())

    useEffect(() => {
        let selectedFilm = props.films.find((film) => film.id === parseInt(id))
        setFilm(selectedFilm)
    }, [props.films, id])  
    
    return film ? (
          <div className="grid">
            <h2>{film.name}</h2>  
            <h5>Episode: {film.episode_id}</h5>
            <h5>Opening crawl: {film.opening_crawl}</h5>
            <h5>Director: {film.director}</h5>
            <h5>Producers: {film.producer}</h5>
            <h5>Release date: {film.release_date}</h5>
            {/* <h5>Characters: {film.characters}</h5>
            <h5>Planets: {film.planets}</h5>
            <h5>Starships{film.starships}</h5>
            <h5>Vehicles: {film.vehicles}</h5>
            <h5>Species: {film.species}</h5> */}
          </div>
      ) : null
    }
    
  export default SpeciesPage