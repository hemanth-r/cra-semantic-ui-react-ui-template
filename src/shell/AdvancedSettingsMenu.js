import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss';
import { Menu, Accordion, Icon } from 'semantic-ui-react';
import MenuItem from './MenuItem';
import SubMenu from './SubMenu';

const useStyles = createUseStyles({
  navHeader: {
    fontWeight: 450,
  },
});

export default function AdvancedSettingsMenu({ activeItem, onHandleNavItemClick }) {
  const classes = useStyles();
  const [activeNavCategoryIndex, setActiveNavCategoryIndex] = useState(-1);
  const advancedSettingsStartMenus = [
    { name: 'feature3', label: 'Feature 3' },
    { name: 'feature4', label: 'Feature 4' },
  ];
  const handleNavCategoryItemClick = (e, titleProps) => {
    const { navcategoryindex } = titleProps;
    const newIndex = activeNavCategoryIndex === navcategoryindex ? -1 : navcategoryindex;
    setActiveNavCategoryIndex(newIndex);
  };

  return (
    <Menu.Menu>
      {advancedSettingsStartMenus.map(item => (
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
      <Menu.Item>
        <Accordion.Title
          active={activeNavCategoryIndex === 0}
          navcategoryindex={0}
          onClick={handleNavCategoryItemClick}
        >
          <span className={classes.navHeader}>Sub Menu</span>
          <Icon name="dropdown" />
        </Accordion.Title>
        <Accordion.Content
          active={activeNavCategoryIndex === 0}
          content={(
            <SubMenu
              activeItem={activeItem}
              onHandleNavItemClick={onHandleNavItemClick}
            />
          )}
        />
      </Menu.Item>
    </Menu.Menu>
  );
}

AdvancedSettingsMenu.propTypes = {
  activeItem: PropTypes.string,
  onHandleNavItemClick: PropTypes.func,
};

AdvancedSettingsMenu.defaultProps = {
  activeItem: '',
  onHandleNavItemClick: () => true,
};
