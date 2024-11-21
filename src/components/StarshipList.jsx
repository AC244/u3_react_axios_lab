import { Link } from "react-router-dom"

 const StarshipList = ({starships}) => {

  return !starships ? (
    <h1>Loading Please Wait</h1>) : (
  <div>
    {starships.map((starship, index) => (
      <div key={index}>
       <Link to={`/starships/${starship.name}`}>{starship.name}</Link>
      </div>
    ))}
  </div>
  )
 }
 export default StarshipList