import { useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';

const populares = [
  "matrix", 
  "pandas", 
  "rick", 
  "morty", 
  "random",
  "venezuela",
  "regular show",
  "adventure time"
];

export default function Main(){
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
  
    //console.log("keyword: ", keyword);
    // PATH Temporal
    navigate(`search/${keyword}`);
  }

  const handleChange = (e) => {
    setKeyword(e.target.value);
  } 

  return (
    <>
      <h1>Buscar gifs</h1>  
      <form onSubmit={onSubmit}>
        <input 
          onChange={handleChange}
          value={keyword}
          placeholder='Busca tus gifs aquí...'
        />
        <button>Buscar</button>
      </form>
      <h2>Lista de gifs mas visitados</h2>
      <div className="enlaces">
        <ul className="populares">
          {
            populares.map(item => (
              <li key={item}>
                <Link to={`search/${item}`}>Gifs de {item}</Link>
              </li>
            ))
          }
        </ul> 

        {/* <Link to="/gifs/pandas">Gifs de pandas</Link>
        <Link to="/gifs/rick">Gifs de Rick</Link>
        <Link to="/gifs/random">Gifs de Random</Link>
        <Link to="/gifs/venezuela">Gifs de Venezuela</Link> */}
        <Link to="/search/venezuela">Search result</Link>
        <Link to="/gif/325">Detail</Link>
      </div>
      <Outlet />
    </>

  );
}