import React, { Component } from 'react';
import NavigationItem from './navigationItem';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import * as sessionActions from '../actions/sessionActions';
import LogoutButton from './auth/logoutButton';

class Navigation extends Component {
    
    constructor(props)
    {
        super(props);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
    }

    handleLogoutClick()
    {        
        this.props.logout();
    }    

    render() {        
        let categories = this.props.categories.map(cat => {
            return <NavigationItem key={cat.name} item={cat} />
        });
        let authenticated = this.props.session.authenticated;
        
        return (
            <div className="nav">
                <div className="logo">
                    <Link to="/" >
                        Adventureland
                        </Link>
                </div>
                {
                        authenticated ? (
                            <LogoutButton />
                        ):   <Buttons />  
                    }
                <ul className="categories"> 
                    <Link to="/events" >
                    <li>Events</li>
                    </Link>
                    { authenticated && (<Link to="/event/new"><li>Create Event</li></Link>)}
                    <li>Categories</li>
                    <ul>
                    {categories}
                    </ul>
                </ul>
            </div>
        );
    }

}

const Buttons = () => (
<ul>
    <Link to="/login"><li>Login</li></Link>    
    <Link to="/register"><li>Register</li></Link>
</ul>
);



const mapStateToProps = state => ({
    categories : state.categories.items,
    session: state.session
});

const mapDispatch = (dispatch) => {
  return {
    actions: bindActionCreators(sessionActions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatch)(Navigation);
