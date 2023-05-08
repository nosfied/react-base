/* eslint-disable react/prop-types */
/* eslint-disable react/no-typos */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import propTypes from 'prop-types';

export default function MyRoute({ component: Component, isClosed, ...rest }) {
  const isLoggedId = false;
  if (isClosed && !isLoggedId) {
    return (
      <Redirect
        to={{ pathname: '/login', state: { prevPath: rest.location.pathname } }}
      />
    );
  }

  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Route {...rest} component={Component} />;
}

MyRoute.defaultProps = {
  isClosed: false,
};

MyRoute.propTypes = {
  component: propTypes.oneOfType([propTypes.element, propTypes.func])
    .isRequired,
  isClosed: propTypes.bool,
};
