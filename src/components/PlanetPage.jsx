import { useParams } from "react-router-dom"

const PlanetPage = ({planets}) => {
  const {planetName} = useParams()
  const singleplanet = planets.find((planet) => planet.name === planetName)

  return !singleplanet ? (<h1>The Planet Is Not Found!</h1>) : (
    <>
      <h1>Planet: {singleplanet.name}</h1>
      <h2>Details</h2>
      <dl>
      <dt>Climate</dt> 
      <dd>{singleplanet.diameter} </dd>
        <dt>Terrian:</dt>
        <dd> {singleplanet.terrain}</dd>
        <dt>Rotation Period:</dt>
        <dd>{singleplanet.gravity}</dd>
        <dt>Population: </dt>
        <dd>{singleplanet.population} </dd>
        <dt>Obital Period:</dt>
        <dd>{singleplanet.surface_water}</dd>
      </dl>
    </>
  )
}
export default PlanetPage