import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const StarshipPage = (props) => {

    console.log(props)

    const [starship, setStarship] = useState('')

    let { id } = useParams

    console.log(useParams())

    useEffect(() => {
        let selectedStarship = props.starships.find((starship) => starship.id === parseInt(id))
        setStarship(selectedStarship)
    }, [props.starships, id])
  
    if(!props.starships) {
      return <h1>Loading... please wait</h1>
    } else { 
    
    return (
          <div className="grid">
            <h1>{starship.name}</h1>  

            <h5>MGLT: {starship.MGLT}</h5>
                    <h5>Cargo capacity: {starship.cargo_capacity}</h5>
                    <h5>Consumables: {starship.consumables}</h5>
                    <h5>Cost in credits: {starship.cost_in_credits}</h5>
                    <h5>Crew: {starship.crew}</h5>
                    {/* <h5>Films: {starship.films}</h5> */}
                    <h5>Hyperdrive rating: {starship.hyperdrive_rating}</h5>
                    <h5>Length: {starship.length}</h5>
                    <h5>Manufacturer: {starship.manufacturer}</h5>
                    <h5>Max atmosphering speed: {starship.max_atmosphering_speed}</h5>
                    <h5>Model: {starship.model}</h5>
                    <h5>Passengers: {starship.passengers}</h5>
                    {/* <h5>Pilots: {starship.pilots}</h5> */}
                    <h5>Starship class: {starship.starship_class}</h5>



          </div>
      )}
    }
    
  export default StarshipPage