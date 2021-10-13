import {Component, lazy, Suspense} from 'react';
import {Route, Switch} from 'react-router';
import Navigation from './components/navigation/Navigation';

import routes from './routes';

const HomePage = lazy(() =>
  import('./pages/homePage/HomePage' /* webpackChunkName: "home-page" */)
);
const MoviesPage = lazy(() =>
  import('./pages/moviesPage/MoviesPage' /* webpackChunkName: "movies-page" */)
);
const MoviesDetailsPage = lazy(() =>
  import(
    './pages/moviesDetailsPage/MoviesDetailsPage' /* webpackChunkName: "movies-details-page" */
  )
);

class App extends Component {
  state = {};
  render() {
    return (
      <>
        <Navigation></Navigation>
        <Suspense fallback={<h1>Loading...</h1>}>
          <Switch>
            <Route exact path={routes.home} component={HomePage} />
            <Route exact path={routes.movies} component={MoviesPage} />
            <Route path={routes.moviesDetails} component={MoviesDetailsPage} />
            <Route component={routes.home} />
          </Switch>
        </Suspense>
      </>
    );
  }
}

export default App;
