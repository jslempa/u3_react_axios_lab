import { useNavigate } from 'react-router-dom'

const VehiclesList = (props) => {

    console.log(props)

    let navigate = useNavigate()

    const showVehicle = (vehicle) => {
      navigate(`${vehicle.id}`)
    }
  
    if(!props.vehicles) {
      return <h1>Loading... please wait</h1>
    } else { 
    
    return (
          <div className="grid">
              {
                props.vehicles.map((vehicle) => (
                  <div key={vehicle.id} className="card"
                       onClick={() => showVehicle(vehicle)}>
                      <h3>{vehicle.name}</h3>              
                  </div>
                ))
              }
          </div>
      )}
    }
    
  export default VehiclesList