import { useNavigate } from 'react-router-dom'

const StarshipList = (props) => {

  console.log(props)

  let navigate = useNavigate()

  const showStarship = (starship) => {
    console.log(starship.id)
    navigate(`${starship.id}`)
  }

  if(!props.starships) {
    return <h1>Loading... please wait</h1>
  } else { 
  
  return (
        <div className="grid">
            {
              props.starships.map((starship) => (
                <div key={starship.id} className="card"
                     onClick={() => showStarship(starship)}>
                    <h3>{starship.name}</h3>     
                </div>
              ))
            }
        </div>
    )}
  }
  
export default StarshipList