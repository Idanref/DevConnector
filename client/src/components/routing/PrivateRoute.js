import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Course code - doesn't work - blank screen

// const PrivateRoute = ({ component: Component, auth: { isAuthenticated, loading }, ...rest }) => (
//   <Route {...rest} render={(props) => (!isAuthenticated && !loading ? <Navigate to='/login' /> : <Component {...props} />)} />
// );

const PrivateRoute = ({ auth: { isAuthenticated }, children }) => {
  return isAuthenticated ? children : <Navigate to='/login' />;
};

PrivateRoute.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(PrivateRoute);
