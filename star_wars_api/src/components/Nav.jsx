import { Link } from 'react-router-dom'

const Nav = (props) => {

    return (
        <div className='Nav'>

          <Link to='/'>
            <h2>Home</h2>
          </Link>

          <Link to='/people'>
            <h2>People</h2>
          </Link>

          <Link to='/planets'>
            <h2>Planets</h2>
          </Link>

          <Link to='/films'>
            <h2>Films</h2>
          </Link>

          <Link to='/species'>
            <h2>Species</h2>
          </Link>

          <Link to='/vehicles'>
            <h2>Vehicles</h2>
          </Link>

          <Link to='/starships'>
            <h2>Starships</h2>
          </Link>
            
        </div>
    )
  }
  
export default Nav