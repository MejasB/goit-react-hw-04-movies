import { Component, lazy, Suspense } from "react";
import { Route, Switch } from "react-router";
import Navigation from "./components/navigation/Navigation";

import routes from "./routes";

const HomePage = lazy(() =>
  import("./pages/homePage/HomePage" /* webpackChunkName: "home-page" */)
);
const MoviesPage = lazy(() =>
  import("./pages/moviesPage/MoviesPage" /* webpackChunkName: "movies-page" */)
);
const MoviesDetailsPage = lazy(() =>
  import(
    "./pages/moviesDetailsPage/MoviesDetailsPage" /* webpackChunkName: "movies-details-page" */
  )
);

export const App = () => (
  <>
    <Navigation />
    <Suspense fallback={<h1>Loading...</h1>}>
      <Switch>
        <Route path={routes.home} exact component={HomePage} />
        <Route path={routes.movies} exact component={MoviesPage} />
        <Route path={routes.moviesDetails} component={MoviesDetailsPage} />
      </Switch>
    </Suspense>
  </>
);
