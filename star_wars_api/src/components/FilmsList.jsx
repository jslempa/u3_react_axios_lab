import { useNavigate } from 'react-router-dom'

const FilmsList = (props) => {

    console.log(props)

    let navigate = useNavigate()

    const showFilm = (film) => {
      navigate(`${film.id}`)
    }
  
    if(!props.films) {
      return <h1>Loading... please wait</h1>
    } else { 
    
    return (
          <div className="grid">
              {
                props.films.map((film) => (
                  <div key={film.id} className="card"
                       onClick={() => showFilm(film)}>
                      <h3>{film.title}</h3>              
                  </div>
                ))
              }
          </div>
      )}
    }
    
  export default FilmsList