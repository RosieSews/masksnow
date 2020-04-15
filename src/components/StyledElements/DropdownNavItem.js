import React, { useState } from 'react';
import { Menu, MenuItem } from '@material-ui/core';

import { withStyles } from '@material-ui/core/styles';
import { NavLink } from './NavItem';

import styleVars from '../styleVars';

const DropdownMenu = withStyles({
  paper: {
    background: styleVars.navbarBackground,
    top: '60px !important',
    boxShadow: 'none',
    borderRadius: '0px',

    '@media(max-width: 768px)': {
      left: '125px !important',
    },
  },
  list: {
    padding: '0px',
  },
})(Menu);

const DropdownMenuItem = withStyles({
  root: {
    color: 'white',
    maxHeight: '200px',
    fontFamily: 'Oswald, sans-serif',
    padding: '0px',
    textAlign: 'center',
    fontWeight: 'bold',
  },
})(MenuItem);

function SimpleMenu({ title, links }) {
  const [anchorEl, setAnchorEl] = useState(null);

  function renderLinks(links) {
    return links.map(({ text, path }) => (
      <DropdownMenuItem onClick={handleClose}>
        <NavLink to={path} activeClassName={'active'}>
          {text}
        </NavLink>
      </DropdownMenuItem>
    ));
  }

  function handleEnter(event) {
    if (anchorEl !== event.currentTarget) {
      setAnchorEl(event.currentTarget);
    }
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <>
      <NavLink
        activeClassName="active"
        aria-owns={anchorEl && 'simple-menu'}
        aria-haspopup="true"
        onMouseOver={handleEnter}
        onFocus={handleEnter} // for accessibility
      >
        {title}
      </NavLink>

      <DropdownMenu
        id="simple-menu"
        anchorEl={anchorEl}
        open={anchorEl}
        onClose={handleClose}
        MenuListProps={{ onMouseLeave: handleClose }}
      >
        {renderLinks(links)}
      </DropdownMenu>
    </>
  );
}

export default SimpleMenu;
