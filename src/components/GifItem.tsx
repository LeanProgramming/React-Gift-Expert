import { IGif } from "../types/gifs"

export const GifItem = ({id, title, url}: IGif) => {
    
  return (
    <div className="card" id={id}>
        <img src={ url } alt={ title } />
        <p>{ title }</p>
    </div>
  )
}
