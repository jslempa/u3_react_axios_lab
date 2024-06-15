import { Link } from 'react-router-dom'

const Nav = (props) => {

    return (
        <div className='Nav'>

          <Link to='/'>
            <h2>Home</h2>
          </Link>

          <Link to='/starships'>
            <h2>Starships</h2>
          </Link>
            
        </div>
    )
  }
  
export default Nav