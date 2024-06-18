const FilmsList = (props) => {

    console.log(props)
  
    if(!props.films) {
      return <h1>Loading... please wait</h1>
    } else { 
    
    return (
          <div className="grid">
              {
                props.films.map((film) => (
                  <div key={film.title} className="card">
                      <h3>{film.title}</h3>
                      <h5>Episode: {film.episode_id}</h5>
                      <h5>Opening crawl: {film.opening_crawl}</h5>
                      <h5>Director: {film.director}</h5>
                      <h5>Producers: {film.producer}</h5>
                      <h5>Release date: {film.release_date}</h5>
                      {/* <h5>Characters: {film.characters}</h5>
                      <h5>Planets: {film.planets}</h5>
                      <h5>Starships{film.starships}</h5>
                      <h5>Vehicles: {film.vehicles}</h5>
                      <h5>Species: {film.species}</h5> */}
              
                  </div>
                ))
              }
          </div>
      )}
    }
    
  export default FilmsList