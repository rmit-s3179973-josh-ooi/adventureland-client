import React, { Component } from 'react';


class NavigationItem extends Component {
    
    navigate(name) {
        this.props.navigate(name);
    }

    render() {        

        return (
            <li><a href="#" onClick={this.navigate.bind(this, this.props.item.name)}>{this.props.item.name}</a></li>
        );
    }
}

export default NavigationItem;
