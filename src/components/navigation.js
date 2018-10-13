import React, { Component } from 'react';
import NavigationItem from './navigationItem';

class Navigation extends Component {
    
    navigate(id) {
        this.props.navigate(id);
    }

    render() {
        let categories = this.props.categories.map(cat => {
            return <NavigationItem key={cat.name} item={cat} navigate={this.navigate.bind(this)}/>
        });

        return (
            <ul>
                {categories}
            </ul>
        );
    }
}

export default Navigation;
