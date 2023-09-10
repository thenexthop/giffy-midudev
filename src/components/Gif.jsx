import { Link } from 'react-router-dom';

// css
import './Gif.css';

export default function Gif({ id, title, url }) { // eslint-disable-line
  return (
    <article className="gif--container">
      <div className="gif-btns">
        {/* vacio por los momentos */}
      </div>
      <Link to={`/gif/${id}`}>
        <h4>{title}</h4>
        <img src={url} alt={title} />  
      </Link>
    </article>
  );
}
