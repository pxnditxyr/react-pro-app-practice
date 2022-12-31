import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  Navigate,
} from 'react-router-dom';

// import { LazyPage1, LazyPage2, LazyPage3 } from '../01-lazyload/pages';

import logo from '../assets/yuki.svg';
import { routes } from './routes';

export const Navigation = () => {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <img src={ logo } alt="Yuki" style={{ width: '100px' }} />
          <ul>
            {
              routes.map( ({ to, name }) => (
                <li key={ to }>
                  <NavLink
                    to={ to }
                    style={ ({ isActive }) => ({ color: isActive ? '#86C8BC' : '#FD8A8A' }) }
                  > { name } </NavLink>
                </li>
              ))
            }
          </ul>
        </nav>

      </div>
      <Routes>
        {
          routes.map( ({ to, path, Component }) => (
            <Route
              key={ to }
              path={ path }
              element={ <Component /> }
              />
          ))
        }

        <Route path="*" element={ <Navigate to={ routes[ 0 ].to } replace /> } />
      </Routes>
    </BrowserRouter>
  );
};
