import {Link, withRouter} from 'react-router-dom';
import getImgOrDefault from '../../lib/getImgOrDefault';
import {MoviesListContainer} from './MoviesListStyled';

const MoviesList = ({movies, location}) => {
  return (
    <MoviesListContainer>
      {movies.map(({id, poster_path, title}) => (
        <li key={id}>
          <Link to={{pathname: `/movies/${id}`, state: {from: location}}}>
            <img src={getImgOrDefault(poster_path)} alt={title}></img>
          </Link>
        </li>
      ))}
    </MoviesListContainer>
  );
};

export default withRouter(MoviesList);
