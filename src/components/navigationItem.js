import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class NavigationItem extends Component {
    
    navigate(name) {
        this.props.navigate(name);
    }

    render() {                
        return (

        	<Link to={`/c/${this.props.item.id}`}>
        	<li className="nav-item">{this.props.item.name}</li>
        	</Link>            
        );
    }
}

export default NavigationItem;
