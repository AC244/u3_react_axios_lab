import { useParams } from "react-router-dom"

 const FilmPage = ({films}) => {
  const {filmName} = useParams()
  const singlefilm = films.find((film) => film.name === filmName)

  return !singlefilm ? (<h1>The Film Is Not Found!</h1>) : (
    <>
      <h1>Film: {singlefilm.title}</h1>
      <h2>Details</h2>
      <dl>
      <dt>Opening Crawl:</dt> 
      <dd>{singlefilm.characters} </dd>
        <dt>Episode:</dt>
        <dd> {singlefilm.producer}</dd>
        <dt>Director:</dt>
        <dd>{singlefilm.director}</dd>
        <dt>Producer: </dt>
        <dd>{singlefilm.producer} </dd>
        <dt>Release Date:</dt>
        <dd>{singlefilm.release_date}</dd>
      </dl>
    </>
  )
}
export default FilmPage