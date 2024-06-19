import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const SpeciesPage = (props) => {

    console.log(props)

    const [specie, setSpecies] = useState('')

    let { id } = useParams()

    console.log(useParams())

    useEffect(() => {
        let selectedSpecies = props.species.find((specie) => specie.id === parseInt(id))
        setSpecies(selectedSpecies)
    }, [props.species, id])  
    
    return specie ? (
          <div className="grid">
            <h2>{specie.name}</h2>  
            <h5>Classification: {specie.classification}</h5>
            <h5>Designation: {specie.designation}</h5>
            <h5>Average height: {specie.average_height}</h5>
            <h5>Skin Colors: {specie.skin_colors}</h5>
            <h5>Hair Colors: {specie.hair_colors}</h5>
            <h5>Eye Colors: {specie.eye_colors}</h5>
            <h5>Average lifespan: {specie.average_lifespan}</h5>
            {/* <h5>Homeworld: {specie.homeworld}</h5> */}
            <h5>Language: {specie.language}</h5>
            {/* <h5>People: {specie.people}</h5>
            <h5>Films: {specie.films}</h5> */}
          </div>
      ) : null
    }
    
  export default SpeciesPage