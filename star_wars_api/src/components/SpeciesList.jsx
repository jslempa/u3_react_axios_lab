import { useNavigate } from 'react-router-dom'

const SpeciesList = (props) => {

    console.log(props)

    let navigate = useNavigate()

    const showSpecies = (specie) => {
      navigate(`${specie.id}`)
    }
  
    if(!props.species) {
      return <h1>Loading... please wait</h1>
    } else { 
    
    return (
          <div className="grid">
              {
                props.species.map((specie) => (
                  <div key={specie.id} className="card"
                      onClick={() => showSpecies(specie)}>
                      <h3>{specie.name}</h3>
                  </div>
                ))
              }
          </div>
      )}
    }
    
  export default SpeciesList