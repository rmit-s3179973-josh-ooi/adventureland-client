import React, { Component } from 'react';
import { connect } from 'react-redux';
import { exitEvent, joinEvent } from '../actions/eventActions';

class Event extends Component {
	constructor(props)
	{
		super(props);

		this.handlerJoinEvent = this.handlerJoinEvent.bind(this);
		this.handlerExitEvent = this.handlerExitEvent.bind(this);
	}

	handlerExitEvent()
	{
		this.props.exitEvent(this.props.event.id);
	}

	handlerJoinEvent()
	{
		this.props.joinEvent(this.props.event.id);
	}

	render() {
		let users = this.props.event.users ? this.props.event.users.map(u =>{
			return <li key={u.id}>{u.name}</li>
		}) : ( "empty");
		
		let hasJoin = this.props.event.users.find(u => u.id === this.props.user.id) ? true : false;
		
		return (
			<div className="event-wrap">
				<div className="event-title"><h1>Event: {this.props.event.event_title}</h1></div>
				<div className="event-info-wrap">				
				<div className="event-date">
				<span className="date"><strong>Start Date</strong>: {this.props.event.start_datetime}</span>
				<span className="date"><strong>End Date</strong>: {this.props.event.end_datetime}</span>
				</div>
				<h3>Event Description </h3>
				<p>{this.props.event.event_description}</p>
				
				</div>
				<div className="event-options">
					<div className="options-wrap">
						{ hasJoin === true ?					
						(<button className="btn btn-event-action btn-exit" onClick={this.handlerExitEvent} >Exit</button> ) :
						(<button className="btn btn-event-action btn-join" onClick={this.handlerJoinEvent} >Join</button>) 
						}
					</div>
					<h3>Going</h3>
					<hr/>
					<ul className="users-wrap">
						
						{users}
					</ul>
					
				</div>
			</div>

		);
	}
}

const mapState = ({session}) => ({	
	user: session.user
});

export default connect(mapState,{ exitEvent, joinEvent })(Event);