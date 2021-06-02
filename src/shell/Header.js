import React, { useState, useEffect } from 'react';
import {
  Menu,
  Icon,
  Dropdown,
} from 'semantic-ui-react';
import { createUseStyles } from 'react-jss';
import PropTypes from 'prop-types';

const useStyles = createUseStyles({
  headerContainer: {
    position: 'sticky',
    right: 0,
    top: 0,
    left: 0,
    zIndex: 100,
  },
  productName: {
    fontSize: '1.4em',
  },
});

export default function Header({ isNotificationVisible, onSidebarToggleClick }) {
  const classes = useStyles();
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);

  useEffect(() => {
    setIsNotificationsOpen(isNotificationVisible);
  }, [isNotificationVisible]);


  function toggleSidebar() {
    setIsSidebarVisible(!isSidebarVisible);
    onSidebarToggleClick();
  }

  function handleNotificationClick() {
    setIsNotificationsOpen(!isNotificationsOpen);
  }

  return (
    <div className={classes.headerContainer}>
      <Menu borderless color="teal" inverted>
        <Menu.Item onClick={toggleSidebar} active={isSidebarVisible} title="Show/Hide Side bar">
          <Icon name="bars" />
        </Menu.Item>
        <Menu.Item>
          <span className={classes.productName}>My App</span>
        </Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item onClick={handleNotificationClick} active={isNotificationsOpen} title="Notifications">
            <Icon name="bell" />
          </Menu.Item>
          <Dropdown item icon="icon client size-18" closeOnBlur title="User Profile">
            <Dropdown.Menu>
              <Dropdown.Header content="Signed in as admin" />
              <Dropdown.Item>Item 1
              </Dropdown.Item>
              <Dropdown.Item >Item 2</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item>Sign Out</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Menu>
      </Menu>
    </div>
  );
}

Header.propTypes = {
  onProductNameClick: PropTypes.func,
  onChangePasswordClick: PropTypes.func,
  onLogoutClick: PropTypes.func,
  onSidebarToggleClick: PropTypes.func,
  onNotificationClick: PropTypes.func,
  isNotificationVisible: PropTypes.bool,
};

Header.defaultProps = {
  onProductNameClick: () => true,
  onChangePasswordClick: () => true,
  onLogoutClick: () => true,
  onSidebarToggleClick: () => true,
  onNotificationClick: () => true,
  isNotificationVisible: false,
};
