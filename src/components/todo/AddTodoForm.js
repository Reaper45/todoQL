/**
 * Created by joram on 5/3/18.
 */

 import React from 'react'
 import { connect } from 'react-redux'
 import { Field, reduxForm, formValueSelector } from 'redux-form'

 let AddTodoForm = props => {
	const { newTask, handleSubmit, pristine, reset, submitting } = props	 
	return (
		<form onSubmit={handleSubmit}>
			<div>
				<Field
					name="task"
					component="input"
					type="text"
					placeholder="What to be done!"
				/>
				<button type="submit" disabled={pristine || submitting}>
				Submit
				</button>
			</div>
		</form>
	 )
 }
 
 AddTodoForm = reduxForm({
	form: 'addTodoFormValues' // unique idetifier for this form
  })(AddTodoForm)

 const selector = formValueSelector('addTodoFormValues') 
 AddTodoForm = connect(state => {
	 const task = selector(state, 'task')
	 return {
		newTask: task
	 }
 })(AddTodoForm)

 export default AddTodoForm