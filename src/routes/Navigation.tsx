import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  Navigate,
} from 'react-router-dom';
import { ShoppingPage } from '../02-component-patterns/pages/ShoppingPage';

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
              > Shopping Store </NavLink>
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
        <Route path="about" element={ <h1> About Page xD </h1> } />
        <Route path="contact" element={ <h1> Contact Page xD </h1> } />
        <Route path="login" element={ <h1> Login Page xD </h1> } />
        <Route path="/" element={ <ShoppingPage /> } />
        <Route path="*" element={ <Navigate to="/" /> } />
      </Routes>
    </BrowserRouter>
  );
};
