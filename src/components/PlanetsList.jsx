import { Link } from "react-router-dom"

 const PlanetList = ({planets}) => {

  return !planets ? (
    <h1>Loading Please Wait</h1>) : (
  <div>
    {planets.map((planet, index) => (
      <div key={index}>
       <Link to={`/planets/${planet.name}`}>{planet.name}</Link>
      </div>
    ))}
  </div>
  )
 }
 export default PlanetList