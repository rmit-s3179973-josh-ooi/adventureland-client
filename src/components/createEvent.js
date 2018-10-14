import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Formik } from 'formik';
import { connect } from 'react-redux';
import { createEvent } from '../actions/eventActions';

class CreateEvent extends Component {


	render() {
		let categories = this.props.categories.map(c => {
			return <option key={c.id} value={c.id}>{c.name}</option>;
		})
		return (
			<div className="event-wrap">
				<h1>Create New Event</h1>
				<Form categories={categories} createEvent={this.props.createEvent}/>
			</div>

		);
	}
}
const Form = withRouter(({categories, createEvent, history}) => (
		<Formik
	      initialValues={{ title: '', description: '', location: '', start_date: '', end_date: '', category:'1' }}
	      validate={values => {
	        let errors = {};
	        if (!values.title) {
	          errors.title = 'Required';
	        }else if(!values.start_date)
	        {
	        	errors.start_date = 'Required';
	        }else if(!values.end_date)
	        {
	        	errors.end_date = 'Required';
	        }else if(values.end_date < values.start_date)
	        {
	        	errors.end_date = 'invalid start date';
	        }else if(!values.category)
	        {
	        	errors.catgory = 'Required';
	        }

	        let startDate = new Date(values.start_date);
	        
	        if(startDate < Date.now())
	        {
	        	errors.start_date = 'start date can\'t be in the pass';
	        }
	        return errors;
	      }}
	      onSubmit={(values, { setSubmitting }) =>{
	        createEvent(values, history);	        	        
	      }}
	    >
	      {({
	        values,
	        errors,
	        touched,
	        handleChange,
	        handleBlur,
	        handleSubmit,
	        isSubmitting,
	        /* and other goodies */
	      }) => (
	        <form onSubmit={handleSubmit}>
	            <div className="input-wrap">
	            <label>Event Title:</label><br />
	                <input
	                    type="text"
	                    name="title"
	                    onChange={handleChange}
	                    onBlur={handleBlur}
	                    value={values.title}
	                />
	                <div className="input-err">
	                    {errors.title && touched.title && errors.title}
	                </div>
	            </div>
	            <div className="input-wrap">
	            <label>Location:</label><br />
	                <input
	                type="text"
	                name="location"
	                onChange={handleChange}
	                onBlur={handleBlur}
	                value={values.location}
	                />
	                <div className="input-err">
	                    {errors.location && touched.location && errors.location}
	                </div>
	            </div>
	            <div className="input-wrap">
	            <label>Event Start Date:</label><br />
	                <input
	                type="datetime-local"
	                name="start_date"
	                onChange={handleChange}
	                onBlur={handleBlur}
	                value={values.start_date}			                
	                />
	                <div className="input-err">
	                    {errors.start_date && touched.start_date && errors.start_date}
	                </div>
	            </div>
	            <div className="input-wrap">
	            <label>Event End Date:</label><br />
	                <input
	                type="datetime-local"
	                name="end_date"
	                onChange={handleChange}
	                onBlur={handleBlur}
	                value={values.end_date}
	                />
	                <div className="input-err">
	                    {errors.end_date && touched.end_date && errors.end_date}
	                </div>
	            </div>
	            <div className="input-wrap">
	            <label>Pick a Category:</label><br />
	                <select name="category" 
	                onChange={handleChange}
	                onBlur={handleBlur}
	                value={values.end_date}
	                >
					{categories}
					</select>
	                <div className="input-err">
	                    {errors.category && touched.category && errors.category}
	                </div>
	            </div>
	            <div className="input-wrap">
	            <label>Event Description:</label><br />
	            	<textarea 
	            	rows="4" cols="50"
	            	name="description"
	            	onChange={handleChange}
	                onBlur={handleBlur}
	                value={values.description}
	                />
	            </div>
	          <div className="input-wrap">
	          <button type="submit" disabled={isSubmitting}>
	            Submit
	          </button>
	          </div>
	        </form>
	      )}
	    </Formik>

	));

const mapState = state => ({
	categories : state.categories.items
})



export default connect(mapState, { createEvent })(CreateEvent);
