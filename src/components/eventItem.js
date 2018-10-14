import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class EventItem extends Component {


	render() {		
		return (
			<Link to={`/e/${this.props.event.id}`}>
			<li className="event-item"><span className="cat-wrap" ><span className={"cat cat-"+this.props.event.category.id} >{this.props.event.category.name}</span></span><span className="event-name">{this.props.event.event_title}</span></li>
			</Link>
		);
	}
}

export default EventItem;