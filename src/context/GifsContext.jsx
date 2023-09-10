import { useState, createContext } from 'react';

export const GifsContext = createContext({});

export default function GifsContextProvider({ children }) {
  const [gifs, setGifs] = useState([]);
  
  return(
    <GifsContext.Provider value={{ gifs, setGifs }}>
      { children }
    </GifsContext.Provider>  
  )
}
