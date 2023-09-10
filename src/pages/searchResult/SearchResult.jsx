// custom hooks
import { useGifs } from "../../hooks/useGifs";

// components
import ListOfGifs from "../../components/ListOfGifs"
import { useParams } from "react-router-dom";
import TrendingSearches from "../../components/TrendingSearches";

const SearchResult = () => {
  
  const { keyword } = useParams();
  const {loading, gifs } = useGifs({keyword});

  return (
    <>
      {
        loading 
        ? <h3>Loading...</h3>
        : (
          <>
            <section className="results">
              <h3 className="search--title">
                {/* {decodeURI(keyword)} */}
                {keyword}
              </h3>
              <ListOfGifs gifs={gifs} />
            </section>
            <TrendingSearches />
          </>
          )
      }
    </>
  )
}

export default SearchResult