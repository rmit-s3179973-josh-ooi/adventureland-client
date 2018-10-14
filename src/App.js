import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchEvents } from './actions/eventActions';
import { fetchCategories } from './actions/categoryActions';

import Navigation from './components/navigation';
import Events from './components/events';
import Category from './components/category';
import Login from './components/login';
import Register from './components/register';
import Event from './components/event';
import PrivateRoute from './components/privateRoute';
import CreateEvent from './components/createEvent';

import './styles/app.scss';

class App extends Component {



    componentWillMount()
    {
        this.props.fetchEvents();
        this.props.fetchCategories();
    }

    componentWillReceiveProps(nextProps)
    {
        if(nextProps.event.event)
        {
            nextProps.events.forEach((evt,key) => {                
                if(evt.id === nextProps.event.event.id){                    
                    nextProps.events.splice(key,1,nextProps.event.event);                    
                }
            })            
        }else if(Object.keys(nextProps.newEvent).length > 0) {                        
            nextProps.events.push(nextProps.newEvent);
        }

    }

    render() {        
        
        let events = this.props.events;        
        let categories = this.props.categories;
        let authenticated = this.props.sessions.authenticated;
        return (
                
                <Router>
                    <div className="App">
                        <div className="left">
                            <Navigation />
                        </div>
                        <div className="right">

                            {(events.length  > 0 )&&  (
                                <Route exact path='/' render={()=>(<Events authenticated={authenticated} events={events}/> )} />
                            )}
                            
                            {(categories.length > 0) && (events.length > 0) &&  (
                            <Route path='/c/:id' render={ ({match}) => (
                                <Category events={events.filter(e => e.category_id === parseInt(match.params.id) )} 
                                    category={categories.find(c => c.id === parseInt(match.params.id) )} />
                            )} />
                            )}                            
                            {(events.length  > 0 )&&  (
                                <Route exact path='/events' render={()=>(<Events authenticated={authenticated} events={events}/> )} />
                            )}
                            <Route path='/login' component={Login} />
                            <Route path='/register' component={Register} />
                            {(events.length  > 0 )&&  (
                            <Route path='/e/:id' render={ ({match}) => (
                                <Event event={events.find(e => e.id === parseInt(match.params.id) )}/>
                                )} />
                            )}

                            <PrivateRoute path="/event/new" exact component={CreateEvent} authenticated={authenticated}/>
                            
                            
                            
                        </div>
                    </div>
                </Router>
            
        );
    }
}

const mapStateToProps = state => ({
    events : state.events.items,
    event: state.events.item,
    newEvent: state.events.newItem,
    categories: state.categories.items,
    sessions: state.session
});

export default connect(mapStateToProps, { fetchEvents, fetchCategories })(App);
