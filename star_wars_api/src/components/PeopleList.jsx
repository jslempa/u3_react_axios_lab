const PeopleList = (props) => {

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
              
                  </div>
                ))
              }
          </div>
      )}
    }
    
  export default PeopleList