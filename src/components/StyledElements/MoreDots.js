import * as React from 'react';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {
  usePopupState,
  bindTrigger,
  bindMenu,
} from 'material-ui-popup-state/hooks';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { useMobile } from '../../hooks/useMobile';

const MoreDotsButton = styled(MoreVertIcon)`
  margin: 0.25em 0.25em 0;
  color: ${({ theme }) => theme.colors.white};
  font-size: 37px;
`;

const MoreDotsPopupMenu = styled(Menu)`
  .MuiList-root {
    background: ${({ theme }) => theme.colors.primary};
  }
  .MuiPaper-rounded {
    border-radius: 0px;
  }
`;

const MoreDotsMenuItem = styled(MenuItem)`
  &&& {
    padding: 0;
    min-width: 100px;
    font-weight: bold;
    font-family: ${({ theme }) => theme.fonts.header};
  }
`;

const MoreStuffButton = styled(Button)`
  &&& {
    max-height: 200px;
    font-family: 'Oswald', sans-serif;
    font-size: 1.5em;
    font-weight: bold;
    color: #fff;
    padding: 0.5rem 1rem;
    border-radius: 0px;
    //margin: auto 0;
    text-align: center;
    transition: all 200ms ease-in-out;
    text-transform: capitalize;
    ${({ theme, wide }) => wide && `width: 100%;`}
    &:hover {
      color: ${({ theme }) => theme.colors.secondary};
      background: ${({ theme }) => theme.colors.white};
    }
    &:active {
      color: ${({ theme }) => theme.colors.discord};
      background: ${({ theme }) => theme.colors.white};
    }
    &.active {
      color: ${({ theme }) => theme.colors.discord};
    }
  }
`;

export const MoreDotsMenu = ({ children }) => {
  const popupState = usePopupState({ variant: 'popover', popupId: 'demoMenu' });
  return (
    <>
      <IconButton
        variant="contained"
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        {...bindTrigger(popupState)}
      >
        <MoreDotsButton />
      </IconButton>
      <MoreDotsPopupMenu {...bindMenu(popupState)}>
        {children.map(child => {
          return (
            <MoreDotsMenuItem key={child.props.to} onClick={popupState.close}>
              {child}
            </MoreDotsMenuItem>
          );
        })}
      </MoreDotsPopupMenu>
    </>
  );
};
const anchorOriginMobile = { horizontal: 'right' };
const anchorOriginDesktop = { vertical: 'bottom' };
export const DropDownMenu = ({ title, children }) => {
  const isMobile = useMobile();
  const anchorOrigin = isMobile ? anchorOriginMobile : anchorOriginDesktop;
  const popupState = usePopupState({ variant: 'popover', popupId: 'demoMenu' });
  return (
    <>
      <MoreStuffButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        {...bindTrigger(popupState)}
      >
        {title}
      </MoreStuffButton>
      <MoreDotsPopupMenu
        {...bindMenu(popupState)}
        anchorOrigin={anchorOrigin}
        getContentAnchorEl={null}
      >
        {children.map((child, index) => {
          return (
            <MoreDotsMenuItem key={index} onClick={popupState.close}>
              {child}
            </MoreDotsMenuItem>
          );
        })}
      </MoreDotsPopupMenu>
    </>
  );
};
