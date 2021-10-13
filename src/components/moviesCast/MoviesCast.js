import PropTypes from 'prop-types';
import getImgOrDefault from '../../lib/getImgOrDefault';
import {MoviesListContainer} from '../moviesList/MoviesListStyled';

const MoviesCast = ({cast}) => {
  return (
    <MoviesListContainer>
      {cast.map(({cast_id, profile_path, name, character}) => (
        <li key={cast_id}>
          <img src={getImgOrDefault(profile_path)} alt={name} />
          <p>
            {name}: {character}
          </p>
        </li>
      ))}
    </MoviesListContainer>
  );
};

MoviesCast.defaultProps = {
  cast: []
};

MoviesCast.propTypes = {
  cast: PropTypes.arrayOf(
    PropTypes.shape({
      cast_id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      character: PropTypes.string.isRequired,
      profile_path: PropTypes.string
    })
  ).isRequired
};
export default MoviesCast;
