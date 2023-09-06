// css
import './Gif.css';

export default function Gif({ id, title, url }) { // eslint-disable-line
  return (
    <li className="gif--container">
      <a href={`#${id}`}>
        <h3>{title}</h3>
        <small>{id}</small>
        <img src={url} alt={title} />  
      </a>
    </li>
  );
}
