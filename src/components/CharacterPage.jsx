import { useParams } from "react-router-dom"

 const CharacterPage = ({characters}) => {
  const {characterName} = useParams()
  const singlecharacter = characters.find((character) => character.name === characterName)

  return !singlecharacter ? (<h1>The Character Is Not Found!</h1>) : (
    <>
      <h1>Character: {singlecharacter.name}</h1>
      <h2>Details</h2>
      <dl>
      <dt>Birth Year:</dt> 
      <dd>{singlecharacter.birth_year} </dd>
        <dt>Height:</dt>
        <dd> {singlecharacter.films}</dd>
        <dt>Hair Color:</dt>
        <dd>{singlecharacter.hair_color}</dd>
        <dt>Eye Color: </dt>
        <dd>{singlecharacter.homeworld} </dd>
        <dt>Gender:</dt>
        <dd>{singlecharacter.skin_color}</dd>
      </dl>
    </>
  )
}
export default CharacterPage