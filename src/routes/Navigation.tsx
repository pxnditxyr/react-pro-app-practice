import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  Navigate,
} from 'react-router-dom';

import { LazyPage1, LazyPage2, LazyPage3 } from '../01-lazyload/pages';

import logo from '../assets/yuki.svg';

export const Navigation = () => {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <img src={ logo } alt="Yuki" style={{ width: '100px' }} />
          <ul>
            <li>
              <NavLink
                to="/"
                style={ ({ isActive }) => ({ color: isActive ? '#86C8BC' : '#FD8A8A' }) }
              > Home </NavLink>
            </li>
            <li>
              <NavLink
                to="about"
                style={ ({ isActive }) => ({ color: isActive ? '#86C8BC' : '#FD8A8A' }) }
              > About </NavLink>
            </li>
            <li>
              <NavLink
                to="contact"
                style={ ({ isActive }) => ({ color: isActive ? '#86C8BC' : '#FD8A8A' }) }
              > Contact </NavLink>
            </li>
            <li>
              <NavLink
                to="login"
                style={ ({ isActive }) => ({ color: isActive ? '#86C8BC' : '#FD8A8A' }) }
              > Login </NavLink>
            </li>
          </ul>
        </nav>

      </div>
      <Routes>
        <Route path="lazy1" element={ <LazyPage1 /> } />
        <Route path="lazy2" element={ <LazyPage2 /> } />
        <Route path="lazy3" element={ <LazyPage3 /> } />
        <Route path="/" element={ <h1> Home Page xD </h1> } />
        <Route path="*" element={ <Navigate to="/" /> } />
      </Routes>
    </BrowserRouter>
  );
};
