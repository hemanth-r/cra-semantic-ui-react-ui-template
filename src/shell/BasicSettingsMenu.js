import React from 'react';
import PropTypes from 'prop-types';
import { Menu } from 'semantic-ui-react';
import MenuItem from './MenuItem';

export default function BasicSettingsMenu({ activeItem, onHandleNavItemClick }) {
  const basicSettings = [
    { name: 'feature1', label: 'Feature 1' },
    { name: 'feature2', label: 'Feature 2' },
  ];

  return (
    <Menu.Menu>
      {basicSettings.map(item => (
        <MenuItem
          key={item.name}
          name={item.name}
          label={item.label}
          visible={item.visible}
          parent="basicSettings"
          activeItem={activeItem}
          onHandleNavItemClick={onHandleNavItemClick}
        />
      ))}
    </Menu.Menu>
  );
}

BasicSettingsMenu.propTypes = {
  activeItem: PropTypes.string,
  onHandleNavItemClick: PropTypes.func,
};

BasicSettingsMenu.defaultProps = {
  activeItem: '',
  onHandleNavItemClick: () => true,
};
