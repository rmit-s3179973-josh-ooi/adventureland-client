import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as sessionActions from '../actions/sessionActions';
import { Formik } from 'formik';

class Register extends Component {

	

	render() {		
		if (this.props.session.authenticated) {
	      return <Redirect to='/' />
	    }

		return (
			<div className="login-wrap" >
				<h1>Register</h1>
				<Formik
			      initialValues={{ email: '', password: '', name: '', c_password: '' }}
			      validate={values => {
			        let errors = {};
			        if (!values.email) {
			          errors.email = 'Required';
			        } else if (
			          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
			        ) {
			          errors.email = 'Invalid email address';
			        }else if(!values.name)
			        {
			        	errors.name = 'Required';
			        }else if(values.password !== values.c_password)
			        {
			        	errors.c_password = "confirm password does not match!";
			        }

			        return errors;
			      }}
			      onSubmit={(values, { setSubmitting }) => {
			        sessionActions.register(values); 
			        setSubmitting(false);       
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
			            <label>Name:</label><br />
			                <input
			                    type="text"
			                    name="name"
			                    onChange={handleChange}
			                    onBlur={handleBlur}
			                    value={values.name}
			                />
			                <div className="input-err">
			                    {errors.name && touched.name && errors.name}
			                </div>
			            </div>
			            <div className="input-wrap">
			            <label>Email:</label><br />
			                <input
			                    type="email"
			                    name="email"
			                    onChange={handleChange}
			                    onBlur={handleBlur}
			                    value={values.email}
			                />
			                <div className="input-err">
			                    {errors.email && touched.email && errors.email}
			                </div>
			            </div>
			            <div className="input-wrap">
			            <label>Password:</label><br />
			                <input
			                type="password"
			                name="password"
			                onChange={handleChange}
			                onBlur={handleBlur}
			                value={values.password}
			                />
			                <div className="input-err">
			                    {errors.password && touched.password && errors.password}
			                </div>
			            </div>
			            <div className="input-wrap">
			            <label>Confirm Password:</label><br />
			                <input
			                type="password"
			                name="c_password"
			                onChange={handleChange}
			                onBlur={handleBlur}
			                value={values.c_password}
			                />
			                <div className="input-err">
			                    {errors.c_password && touched.c_password && errors.c_password}
			                </div>
			            </div>
			          <div className="input-wrap">
			          <button type="submit" disabled={isSubmitting}>
			            Register
			          </button>
			          </div>
			        </form>
			      )}
			    </Formik>
			</div>
		);
	}
}

const mapState = ({session}) => ({
  session: session,
});

const mapDispatch = (dispatch) => {
  return {
    actions: bindActionCreators(sessionActions, dispatch)
  };
};

export default connect(mapState,mapDispatch)(Register);