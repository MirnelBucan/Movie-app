import React, { FunctionComponent } from 'react';
import { NavLink } from 'react-router-dom';
import NavButtonType from '../../types/common/NavButtonType';

const NavButton: FunctionComponent<NavButtonType> = ({ name, to }) => {
  return (
    <NavLink exact className="nav-btn" to={to} activeClassName="active">
      {name}
    </NavLink>
  );
};

export default NavButton;
