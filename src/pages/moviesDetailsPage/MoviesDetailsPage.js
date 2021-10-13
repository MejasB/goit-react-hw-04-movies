import axios from 'axios';
import React, {Component} from 'react';
import {NavLink, Route} from 'react-router-dom';
import MoviesCast from '../../components/moviesCast/MoviesCast';
import MoviesReviews from '../../components/moviesReviews/MoviesReviews';
import PropTypes from 'prop-types';
import getImgOrDefault from '../../lib/getImgOrDefault';
import routes from '../../routes';
import {MovieCardContainer} from './MoviesDetailsPageStyled';

class MoviesDetailsPage extends Component {
  state = {
    movie: {
      genres: [],
      release_date: '',
      credits: {
        cast: []
      },
      reviews: {
        results: []
      }
    }
  };
  async componentDidMount() {
    const {movieId} = this.props.match.params;
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=ea85f2b4fc5ff28c9522c59f4ba43c3d&append_to_response=credits,reviews`
    );
    this.setState({movie: response.data});
  }

  handleGoBack = () => {
    const {location, history} = this.props;
    history.push(location?.state?.from || routes.movies);
  };

  render() {
    const {title, release_date, vote_average, overview, genres, poster_path} =
      this.state.movie;

    return (
      <MovieCardContainer>
        <button type="button" onClick={this.handleGoBack}>
          Go back
        </button>
        <div className="cardContainer">
          <img src={getImgOrDefault(poster_path)} alt={title}></img>

          <div>
            <h2>
              {title} ({release_date.slice(0, 4)})
            </h2>

            <p>User Score: {vote_average * 10}%</p>
            <h3>Overview</h3>
            <p className="movie-desc">{overview}</p>
            <h3>Genres</h3>
            <ul className="genres-list">
              {genres.map(({name}) => (
                <li className="genres-list-item" key={name}>
                  {' '}
                  {name}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <h3>Additional information</h3>
        <div className="add-info-container">
          <p>
            <NavLink
              to={{
                pathname: `${this.props.match.url}/cast`,
                state: {from: this.props.location.state?.from}
              }}
              className="navLink"
              activeClassName="navLinkActive"
            >
              Cast
            </NavLink>
          </p>
          <p>
            <NavLink
              to={{
                pathname: `${this.props.match.url}/reviews`,
                state: {from: this.props.location.state?.from}
              }}
              className="navLink"
              activeClassName="navLinkActive"
            >
              Reviews
            </NavLink>
          </p>
        </div>
        <Route
          path={`${this.props.match.path}/cast`}
          render={props => {
            return (
              <MoviesCast {...props} cast={this.state.movie.credits.cast} />
            );
          }}
        ></Route>
        <Route
          path={`${this.props.match.path}/reviews`}
          render={props => {
            return (
              <MoviesReviews
                {...props}
                results={this.state.movie.reviews.results}
              />
            );
          }}
        ></Route>
      </MovieCardContainer>
    );
  }
}

MoviesDetailsPage.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    params: PropTypes.shape({
      movieId: PropTypes.string.isRequired
    })
  }).isRequired
};

export default MoviesDetailsPage;
