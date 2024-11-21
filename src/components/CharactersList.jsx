import { Link } from "react-router-dom"

 const CharacterList = ({characters}) => {

  return !characters ? (
    <h1>Loading Please Wait</h1>) : (
  <div>
    {characters.map((character, index) => (
      <div key={index}>
       <Link to={`/characters/${character.name}`}>{character.name}</Link>
      </div>
    ))}
  </div>   
  )
 }
 export default CharacterList