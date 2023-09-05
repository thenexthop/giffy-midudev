import { useState, useEffect } from 'react'

// services
import { getGifs } from './services/gifs.service';

function App() {
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getGifs({keyword: "matrix"});
      console.log(res);
      setGifs(res); 
    }

    fetchData();

  }, []);

  return (
    <>
      <ul>
        {
          gifs && gifs.map(item => (
            <li key={item.id}>
              <img src={item.url} alt={item.title} /> 
            </li>
          ))
        }
      </ul>
    </>
  )
}

export default App
