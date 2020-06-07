import React, { FunctionComponent } from 'react';
import NavButton from './NavButton';

const NavBar: FunctionComponent = () => {
  return (
    <div className="nav-bar">
      <NavButton to="/movies" name="Movies" />
      <NavButton to="/" name="Tv Shows" />
    </div>
  );
};

export default NavBar;
