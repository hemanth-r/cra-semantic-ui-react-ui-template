import {
  Menu,
  Accordion,
  Icon, Segment,
} from 'semantic-ui-react';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { createUseStyles } from 'react-jss';
import BasicSettingsMenu from './BasicSettingsMenu';
import AdvancedSettingsMenu from './AdvancedSettingsMenu';

const useStyles = createUseStyles({
  sidebarContainer: {
    position: 'fixed !important',
    top: '3.2em',
    left: 0,
    height: '100vh',
    zIndex: '100',
    '& .ui.vertical.menu': {
      width: '17.4em',
    },
  },
  link: {
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'none',
    },
    '& .item': {
      '&:hover': {
        backgroundColor: 'rgb(242,242,242) !important',
      },
    },
  },
});

export default function SidebarMenu({ visible }) {
  const classes = useStyles();
  const [active, setActive] = useState('dashboard');
  const [activeNavCategoryIndex, setActiveNavCategoryIndex] = useState(-1);

  const handleNavItemClick = (e, { name }) => setActive(name);

  const handleNavCategoryItemClick = (e, titleProps) => {
    const { navcategoryindex } = titleProps;
    const newIndex = activeNavCategoryIndex === navcategoryindex ? -1 : navcategoryindex;
    setActiveNavCategoryIndex(newIndex);
  };

  return (
    <Segment hidden={!visible} className={classes.sidebarContainer}>
      <Accordion as={Menu} vertical secondary>
        <Link to="/app/dashboard" className={classes.link}>
          <Menu.Item
            as="div"
            name="dashboard"
            active={active === 'dashboard'}
            onClick={handleNavItemClick}
            style={{ paddingLeft: '0.6em' }}
          >
            <span>Dashboard</span>
          </Menu.Item>
        </Link>
        <Menu.Item>
          <Accordion.Title
            active={activeNavCategoryIndex === 0}
            navcategoryindex={0}
            onClick={handleNavCategoryItemClick}
          >
            <span>Basic Settings</span>
            <Icon name="dropdown" />
          </Accordion.Title>
          <Accordion.Content
            active={activeNavCategoryIndex === 0}
            content={(
              <BasicSettingsMenu
                activeItem={active}
                onHandleNavItemClick={handleNavItemClick}
              />
            )}
          />
        </Menu.Item>
        <Menu.Item>
          <Accordion.Title
            active={activeNavCategoryIndex === 1}
            navcategoryindex={1}
            onClick={handleNavCategoryItemClick}
          >
            <span>Advanced Settings</span>
            <Icon name="dropdown" />
          </Accordion.Title>
          <Accordion.Content
            active={activeNavCategoryIndex === 1}
            content={(
              <AdvancedSettingsMenu
                activeItem={active}
                onHandleNavItemClick={handleNavItemClick}
              />
            )}
          />
        </Menu.Item>
      </Accordion>
    </Segment>
  );
}

SidebarMenu.propTypes = {
  visible: PropTypes.bool,
};

SidebarMenu.defaultProps = {
  visible: true,
};
