// custom hooks
import { useGifs } from '../../hooks/useGifs';

// components
import ListOfGifs from '../../components/ListOfGifs';
import TrendingSearches from '../../components/TrendingSearches';

const Home = () => {
  const { loading, gifs } = useGifs();

   return (
    <>
      <h3>Ultima busqueda</h3>
      {
        loading ? (
          <h3>Loading...</h3>
        ) : (
          <>
            <ListOfGifs gifs={gifs} />
            <TrendingSearches />
          </>  
        )
      }
    </>
  )
}

export default Home