import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import PeopleList from './PeopleList'
import PlanetsList from './PlanetsList'
import FilmsList from './FilmsList'
import SpeciesList from './SpeciesList'
import VehiclesList from './VehiclesList'
import StarshipList from './StarshipList'

const Main = (props) => {

    //console.log(props.starships[0])  

    return (
        <div className='routes-container'>
          <Routes>
              <Route path='/starships' element={<StarshipList starships={props.starships}/>}/>
              <Route path='/' element={<Home/>}/>
          </Routes>            
        </div>
    )
  }
  
export default Main