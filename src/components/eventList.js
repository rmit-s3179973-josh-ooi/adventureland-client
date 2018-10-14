import React, { Component } from 'react';
import EventItem from './eventItem';

class EventList extends Component {


	render() {		
		let events = this.props.events.map( evt => {
			return <EventItem key={evt.id} event={evt} />
		});

		return (
			<ul className="event-list">
				{events}
			</ul>
		);
	}
}

export default EventList;