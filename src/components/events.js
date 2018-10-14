import React, { Component } from 'react';
import EventList from './eventList';
import { Link } from 'react-router-dom';

class Events extends Component {


	render() {
		let authenticated = this.props.authenticated;		
		return (
			<div className="event-wrap">
				<h1>Events
				{authenticated && (<span className="btn-wrap"><Link to="event/new"><span className="btn btn-create-event">Create New Event</span></Link></span>)}
				</h1>
				<EventList events={this.props.events} />
			</div>

		);
	}
}

export default Events;