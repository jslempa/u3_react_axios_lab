const VehiclesList = (props) => {

    console.log(props)
  
    if(!props.vehicles) {
      return <h1>Loading... please wait</h1>
    } else { 
    
    return (
          <div className="grid">
              {
                props.vehicles.map((vehicle) => (
                  <div key={vehicle.model} className="card">
                      <h3>{vehicle.name}</h3>
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
                ))
              }
          </div>
      )}
    }
    
  export default VehiclesList