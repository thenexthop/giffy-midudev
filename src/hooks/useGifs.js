import { useState, useEffect, useContext } from "react";

// global context
import { GifsContext } from "../context/GifsContext";

// services
import { getGifs } from "../services/gifs.service";

export function useGifs({ keyword= null } = {}) {
  const [loading, setLoading] = useState(false);
  const { gifs, setGifs } = useContext(GifsContext);

  useEffect(()=>{
    setLoading(true);

    const keywordToUse = keyword || localStorage.getItem("lastKeyword") || "random";

    const fetchData = async () => {
      try {
        const results = await getGifs({ keyword: keywordToUse });
        setGifs(results);
        localStorage.setItem("lastKeyword", keywordToUse);
      } catch (error) {
        console.error(error);
      }finally {
        setLoading(false);
      }
    }    
    
    fetchData();

  }, [keyword, setGifs])

  return { loading, gifs }
}