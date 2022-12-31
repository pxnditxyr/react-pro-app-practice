import { Suspense } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  Navigate,
} from 'react-router-dom';

import { Loading } from '../components';

import { routes } from './routes';

import logo from '../assets/yuki.svg';

export const Navigation = () => {
  return (
    <Suspense fallback={ <Loading /> }>
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
    </Suspense>
  );
};
