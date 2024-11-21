import { Link } from "react-router-dom"

 const FilmList = ({films}) => {

  return !films ? (
    <h1>Loading Please Wait</h1>) : (
  <div>
    {films.map((film, index) => (
      <div key={index}>
       <Link to={`/films/${film.name}`}>{film.name}</Link>
      </div>
    ))}
  </div>
  )
 }
 export default FilmList