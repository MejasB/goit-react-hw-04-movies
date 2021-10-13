import React, {Component} from 'react';
import axios from 'axios';
import {SearchbarHeader, SearchForm} from './MoviesPageStyled';
import parseQueryString from '../../lib/parseQueryString';
import MoviesList from '../../components/moviesList/MoviesList';

class MoviesPage extends Component {
  state = {searchTerm: '', movies: []};

  componentDidMount() {
    const currentQuery = parseQueryString(this.props.location.search).query;
    if (currentQuery) {
      this.handleSearch();
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const query = parseQueryString(prevProps.location.search).query;
    const currentQuery = parseQueryString(this.props.location.search).query;

    if (query !== currentQuery) {
      this.handleSearch();
    }
  }

  handleSearch = async () => {
    const {location} = this.props;
    const query = parseQueryString(location.search).query;
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=ea85f2b4fc5ff28c9522c59f4ba43c3d&query=${query}&language=en-US&page=1&include_adult=false`
    );

    this.setState({movies: response.data.results});
    console.log(this.state);
  };

  handleChange = evt => {
    this.setState({searchTerm: evt.target.value});
  };

  handleSubmit = evt => {
    evt.preventDefault();
    const {history} = this.props;
    history.push(`/movies?query=${this.state.searchTerm}`);
  };

  render() {
    return (
      <>
        <SearchbarHeader>
          <SearchForm onSubmit={this.handleSubmit}>
            <button type="submit" className="SearchForm-button">
              <span className="SearchForm-button-label">Search</span>
            </button>
            <input
              className="SearchForm-input"
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search movies"
              onChange={this.handleChange}
              value={this.state.searchTerm}
            />
          </SearchForm>
        </SearchbarHeader>
        <MoviesList movies={this.state.movies} />
      </>
    );
  }
}

export default MoviesPage;
