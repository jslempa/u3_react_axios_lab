const PeopleList = (props) => {

    console.log(props)
  
    if(!props.people) {
      return <h1>Loading... please wait</h1>
    } else { 
    
    return (
          <div className="grid">
              {
                props.people.map((people) => (
                  <div key={people.name} className="card">
                      <h3>{people.name}</h3>
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
                ))
              }
          </div>
      )}
    }
    
  export default PeopleList