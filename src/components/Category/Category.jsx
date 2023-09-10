import { Link } from 'react-router-dom';

// css 
import './Category.css';

export default function Category({ name, options = [] }) {
  
  return (
    <section className='trending-list'>
      <h2>{name}</h2>
      {
        options 
          ? (
            options.map(item => (<Link key={item} to={`/search/${item}`}>{item}</Link>))
          ) 
          : (
            <h3>No existen resultados.</h3>
          )
      }
    </section>
  );
}
