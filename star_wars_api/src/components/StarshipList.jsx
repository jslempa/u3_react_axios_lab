const StarshipList = (props) => {

  console.log(props.starships[0])

  if(!props.starships) {
    return <h1>Loading... please wait</h1>
  } else { 
  
  return (
        <div className="grid">
            {
              props.starships.map((starship) => (
                <div key={starship.model} className="card">
                    <h3>{starship.name}</h3>
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
              ))
            }
        </div>
    )}
  }
  
export default StarshipList