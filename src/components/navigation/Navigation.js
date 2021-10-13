import {NavLink} from 'react-router-dom';
import routes from '../../routes';
import {NavigationContainer} from './NavigationStyled';

const Navigation = () => {
  return (
    <NavigationContainer>
      <ul className="navList">
        <li className="navListItem">
          <NavLink
            exact
            to={routes.home}
            className="navLink"
            activeClassName="navLinkActive"
          >
            Home
          </NavLink>
        </li>
        <li className="navListItem">
          <NavLink
            to={routes.movies}
            className="navLink"
            activeClassName="navLinkActive"
          >
            Movies
          </NavLink>
        </li>
      </ul>
    </NavigationContainer>
  );
};

export default Navigation;
