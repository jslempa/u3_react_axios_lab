import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const PeoplePage = (props) => {

    console.log(props)

    const [people, setPeople] = useState('')

    let { id } = useParams()

    console.log(useParams())

    useEffect(() => {
        let selectedPeople = props.people.find((people) => people.id === parseInt(id))
        setPeople(selectedPeople)
    }, [props.people, id])  
    
    return people ? (
          <div className="grid">
            <h2>{people.name}</h2>            
            <h5>Height: {people.height}</h5>
            <h5>Mass: {people.mass}</h5>
            <h5>Hair color: {people.hair_color}</h5>
            <h5>Eye color: {people.eye_color}</h5>
            <h5>Skin color: {people.skin_color}</h5>
            <h5>Gender: {people.gender}</h5>
            {/* <h5>Homeworld: {people.homeworld}</h5>
            <h5>Films: {people.films}</h5>
            <h5>Species: {people.species}</h5>
            <h5>Vehicles: {people.vehicles}</h5>
            <h5>Starships: {people.starships}</h5> */}
          </div>
      ) : null
    }
    
  export default PeoplePage