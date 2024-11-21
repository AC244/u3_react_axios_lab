import { useParams } from "react-router-dom"

 const StarshipPage = ({starships}) => {
  const {starshipName} = useParams()
  console.log(starshipName)
  const singleStarship = starships.find((ship) => ship.name === starshipName)
  console.log(singleStarship)

  return !singleStarship ? (<h1>The Starship Is Not Found!</h1>) : (
    <>
      <h1>Starship: {singleStarship.name}</h1>
      <h2>Details</h2>
      <dl>
      <dt>Crew:</dt> 
      <dd>{singleStarship.consumables} </dd>
        <dt>Model:</dt>
        <dd> {singleStarship.length}</dd>
        <dt>Manufacture:</dt>
        <dd>{singleStarship.manufacture}</dd>
        <dt>Cost: </dt>
        <dd>{singleStarship.cargo_capacity} </dd>
        <dt>Passengers:</dt>
        <dd>{singleStarship.passengers}</dd>
      </dl>
    </>
  )
}
export default StarshipPage