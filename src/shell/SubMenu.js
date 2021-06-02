import React from 'react';
import PropTypes from 'prop-types';
import { Menu } from 'semantic-ui-react';
import MenuItem from './MenuItem';

export default function SubMenu({ activeItem, onHandleNavItemClick }) {
  const mobileBroadband = [
    { name: 'feature5', label: 'Feature 5' },
    { name: 'feature6', label: 'Feature 6' },
  ];
  return (
    <Menu.Menu>
      {mobileBroadband.map(item => (
        <MenuItem
          key={item.name}
          name={item.name}
          label={item.label}
          visible={item.visible}
          parent="advancedSettings"
          activeItem={activeItem}
          onHandleNavItemClick={onHandleNavItemClick}
        />
      ))}
    </Menu.Menu>
  );
}

SubMenu.propTypes = {
  activeItem: PropTypes.string,
  onHandleNavItemClick: PropTypes.func,
};

SubMenu.defaultProps = {
  activeItem: '',
  onHandleNavItemClick: () => true,
};
