import React, {Component} from 'react';
import axios from 'axios';
import MoviesList from '../../components/moviesList/MoviesList';
import {HomePageTitleContainer} from './HomePageStyled';

class HomePage extends Component {
  state = {
    movies: []
  };

  async componentDidMount() {
    // const {movieId} = this.props.match.params;
    const response = await axios.get(
      'https://api.themoviedb.org/3/movie/popular?api_key=ea85f2b4fc5ff28c9522c59f4ba43c3d&language=en-US&page=1'
    );
    this.setState({movies: response.data.results});
  }
  render() {
    return (
      <>
        <HomePageTitleContainer>Trending today</HomePageTitleContainer>
        <MoviesList movies={this.state.movies} />
      </>
    );
  }
}

export default HomePage;
