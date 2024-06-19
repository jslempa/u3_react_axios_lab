import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const VehiclePage = (props) => {

    console.log(props)

    const [vehicle, setVehicle] = useState('')

    let { id } = useParams()

    console.log(useParams())

    useEffect(() => {
        let selectedVehicle = props.vehicles.find((vehicle) => vehicle.id === parseInt(id))
        setVehicle(selectedVehicle)
    }, [props.vehicles, id])  
    
    return vehicle ? (
          <div className="grid">
            <h2>{vehicle.name}</h2>  
            <h5>Model: {vehicle.model}</h5>
            <h5>Manufacturer: {vehicle.manufacturer}</h5>
            <h5>Cost in credits: {vehicle.cost_in_credits}</h5>
            <h5>Length: {vehicle.length}</h5>
            <h5>Max atmosphering speed: {vehicle.max_atmosphering_speed}</h5>
            <h5>Crew: {vehicle.crew}</h5>
            <h5>Passengers: {vehicle.passengers}</h5>
            <h5>Cargo capacity: {vehicle.cargo_capacity}</h5>
            <h5>Consumables: {vehicle.consumables}</h5>
            <h5>Vehicle class: {vehicle.vehicle_class}</h5>
            <h5>Pilots: {vehicle.pilots}</h5>
            {/* <h5>Films: {vehicle.films}</h5> */}
          </div>
      ) : null
    }
    
  export default VehiclePage