const SpeciesList = (props) => {

    console.log(props)
  
    if(!props.species) {
      return <h1>Loading... please wait</h1>
    } else { 
    
    return (
          <div className="grid">
              {
                props.species.map((specie) => (
                  <div key={specie.name} className="card">
                      <h3>{specie.name}</h3>
                      <h5>Classification: {specie.classification}</h5>
                      <h5>Designation: {specie.designation}</h5>
                      <h5>Average height: {specie.average_height}</h5>
                      <h5>Skin Colors: {specie.skin_colors}</h5>
                      <h5>Hair Colors: {specie.hair_colors}</h5>
                      <h5>Eye Colors: {specie.eye_colors}</h5>
                      <h5>Average lifespan: {specie.average_lifespan}</h5>
                      {/* <h5>Homeworld: {specie.homeworld}</h5> */}
                      <h5>Language: {specie.language}</h5>
                      {/* <h5>People: {specie.people}</h5>
                      <h5>Films: {specie.films}</h5> */}
              
                  </div>
                ))
              }
          </div>
      )}
    }
    
  export default SpeciesList