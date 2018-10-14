import React, { Component } from 'react';
import EventList from './eventList';

class Category extends Component {
	
	
	render() {

		return (
			<div className="category-wrap">
				<h1>Category: {this.props.category.name} </h1>
				<EventList events={this.props.events} />
			</div>
		);
	}
}


export default Category;