import { useContext } from "react";
import { useParams } from "react-router-dom"

// context
import { GifsContext } from "../../context/GifsContext";

// components
import Gif from "../../components/Gif";

const Detail = () => {
  const { id } = useParams();
  const { gifs } = useContext(GifsContext);

  const singleGif = gifs.find(gif => gif.id === id);
  // console.log("gifs: ", gifs);

  return (
    <Gif { ...singleGif } />
  )
}

export default Detail