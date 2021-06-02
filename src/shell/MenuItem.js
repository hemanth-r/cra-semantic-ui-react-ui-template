import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
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

export default function MenuItem({
  name, label, parent, activeItem, onHandleNavItemClick, visible,
}) {
  const classes = useStyles();
  return (
    <Fragment>
      {
        (visible)
          ? (
            <Link to={`/app/${parent}/${name}`} className={classes.link}>
              <Menu.Item
                as="div"
                name={name}
                active={activeItem === name}
                onClick={onHandleNavItemClick}
              >
                {label}
              </Menu.Item>
            </Link>
          )
          : null
      }
    </Fragment>
  );
}

MenuItem.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  parent: PropTypes.string,
  activeItem: PropTypes.string,
  visible: PropTypes.bool,
  onHandleNavItemClick: PropTypes.func,
};

MenuItem.defaultProps = {
  name: '',
  label: '',
  parent: '',
  activeItem: '',
  visible: true,
  onHandleNavItemClick: () => true,
};
