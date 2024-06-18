import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import PeopleList from './PeopleList'
import PeoplePage from './PeoplePage'
import PlanetsList from './PlanetsList'
import PlanetPage from './PlanetPage'
import FilmsList from './FilmsList'
import FilmPage from './FilmPage'
import SpeciesList from './SpeciesList'
import SpeciesPage from './SpeciesPage'
import VehiclesList from './VehiclesList'
import VehiclePage from './VehiclePage'
import StarshipList from './StarshipList'
import StarshipPage from './StarshipPage'

const Main = (props) => {  

    return (
        <div className='routes-container'>
          <Routes>
              <Route path='/people' element={<PeopleList people={props.people}/>}/>
              <Route path='/people/:id' element={<PeoplePage people={props.people}/>}/>
              <Route path='/planets' element={<PlanetsList planets={props.planets}/>}/>
              <Route path='/planets/:id' element={<PlanetPage planets={props.planets}/>}/>
              <Route path='/films' element={<FilmsList films={props.films}/>}/>
              <Route path='/films/:id' element={<FilmPage films={props.films}/>}/>
              <Route path='/species' element={<SpeciesList species={props.species}/>}/>
              <Route path='/species/:id' element={<SpeciesPage species={props.species}/>}/>
              <Route path='/vehicles' element={<VehiclesList vehicles={props.vehicles}/>}/>
              <Route path='/vehicles/:id' element={<VehiclePage vehicles={props.vehicles}/>}/>
              <Route path='/starships' element={<StarshipList starships={props.starships}/>}/>
              <Route path='/starships/:id' element={<StarshipPage starships={props.starships}/>}/>
              <Route path='/' element={<Home/>}/>
          </Routes>            
        </div>
    )
  }
  
export default Main