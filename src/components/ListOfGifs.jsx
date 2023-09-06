// components
import Gif from './Gif';

// css
import './ListOfGifs.css';

export default function ListOfGifs({ gifs }) { //eslint-disable-line
  
  return (
    <ul className='lista--gifs'>
      {
          gifs && gifs.map(({id, title, url}) => (
            <Gif 
              key={id}
              id={id}
              title={title}
              url={url}
            />
          ))
        }
    </ul>
  )
}
