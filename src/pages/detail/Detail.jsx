import { useParams } from "react-router-dom"

const Detail = () => {

  const { id } = useParams();

  console.log("id del gif: ", id);
  return (
    <h2>Gif con el id: {id}</h2>
  )
}

export default Detail