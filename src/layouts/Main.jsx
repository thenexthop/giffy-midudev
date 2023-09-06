import { Link, Outlet } from 'react-router-dom';

export default function Main(){
  return (
    <>
      <h1>Lista de gifs mas visitados</h1>
      <div className="enlaces">
        <Link to="/gif/pandas">Gifs de pandas</Link>
        <Link to="/gif/rick">Gifs de Rick</Link>
        <Link to="/gif/random">Gifs de Random</Link>
        <Link to="/gif/venezuela">Gifs de Venezuela</Link>
      </div>
      <Outlet />
    </>

  );
}