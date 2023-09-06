import { useState, useEffect } from 'react'

// services
import { getGifs } from '../services/gifs.service';

import { useParams } from 'react-router-dom';

// components
import Gif from './Gif';

// css
import './ListOfGifs.css';

export default function ListOfGifs() {
  const [gifs, setGifs] = useState([]);

  const {keyword} = useParams();
  //console.log(keyword);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getGifs({keyword});
      //console.log(res);
      setGifs(res); 
    }
    fetchData();

  }, [keyword]);

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
