import { useNavigate } from 'react-router-dom'

const PeopleList = (props) => {

    console.log(props)

    let navigate = useNavigate()

    const showPeople = (people) => {
      navigate(`${people.id}`)
    }
  
    if(!props.people) {
      return <h1>Loading... please wait</h1>
    } else { 
    
    return (
          <div className="grid">
              {
                props.people.map((people) => (
                  <div key={people.id} className="card"
                       onClick={() => showPeople(people)}>
                      <h3>{people.name}</h3>
                  </div>
                ))
              }
          </div>
      )}
    }
    
  export default PeopleList