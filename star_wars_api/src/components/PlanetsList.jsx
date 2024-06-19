import { useNavigate } from 'react-router-dom'

const PlanetsList = (props) => {

  console.log(props)

  let navigate = useNavigate()

  const showPlanet = (planet) => {
    navigate(`${planet.id}`)
  }
  
  if(!props.planets) {
      return <h1>Loading... please wait</h1>
  } else { 
    
    return (
          <div className="grid">
              {
                props.planets.map((planet) => (
                  <div key={planet.id} className="card">
                      <h3>{planet.name}</h3>
                      <h5>Rotation period: {planet.rotation_period}</h5>
                      <h5>Orbital period: {planet.orbital_period}</h5>
                      <h5>Diameter: {planet.diameter}</h5>
                      <h5>Climate: {planet.climate}</h5>
                      <h5>Gravity: {planet.gravity}</h5>
                      <h5>Terrain: {planet.terrain}</h5>
                      <h5>Surface water: {planet.surface_water}</h5>
                      <h5>Population: {planet.population}</h5>
                      {/* <h5>Residents: {planet.residents}</h5>
                      <h5>Films: {planet.films}</h5> */}
                  </div>
                ))
              }
          </div>
      )}
    }
    
  export default PlanetsList