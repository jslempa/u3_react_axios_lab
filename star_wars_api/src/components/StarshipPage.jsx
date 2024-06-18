import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const StarshipPage = (props) => {

    console.log(props)
  
    if(!props.people) {
      return <h1>Loading... please wait</h1>
    } else { 
    
    return (
          <div className="grid">
            
          </div>
      )}
    }
    
  export default StarshipPage