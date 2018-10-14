import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { logout } from '../../actions/sessionActions';
import { bindActionCreators } from 'redux';

const LogoutButton = ({ history, logout }) => (
	<ul>
  <a href="#" onClick={() => logout(history)}>
   <li> Logout</li>
  </a>
  </ul>
);

const { object, func } = PropTypes;

LogoutButton.propTypes = ({
  history: object.isRequired,
  logout: func.isRequired
});

const mapDispatch = dispatch => ({
  logout: history => bindActionCreators(logout(history), dispatch)
});

export default connect(null, mapDispatch)(withRouter(LogoutButton));