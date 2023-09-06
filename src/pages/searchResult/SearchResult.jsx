import { useEffect, useState } from "react";

// services
import { getGifs } from "../../services/gifs.service";

// components
import ListOfGifs from "../../components/ListOfGifs"
import { useParams } from "react-router-dom";


const SearchResult = () => {
  const [gifs, setGifs] = useState([]);
  const [loading, setLoading] = useState(false);

  const { keyword } = useParams();

  useEffect(()=>{
    setLoading(true);
    const fetchData = async () => {
      try {
        
        const results = await getGifs({ keyword });
        setGifs(results);

      } catch (error) {
        console.error(error);
      }finally {
        setLoading(false);
      }
    }    
    
    fetchData();

  }, [keyword])

  return (
    <>
      {
        loading 
          ? <h3>Loading...</h3>
          : <ListOfGifs gifs={gifs} />
      }
    </>
  )
}

export default SearchResult