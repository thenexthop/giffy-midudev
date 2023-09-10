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
  "adventure time",
  "family guy"
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
      <div className="container">
        <header className='main-header'>
          <Link to={"/"}> 
            <h1>Giffy app</h1>  
          </Link>
          <h2>Buscar gifs</h2>  
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
          </div>
        </header>
        
        
        <main>
          <Outlet />
        </main>
        <footer><small>agaha &copy;2023</small></footer>
      </div> 
    </>

  );
}