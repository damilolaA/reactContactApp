import React, { Component } from "react";

import PropTypes from "prop-types";

class contactForm extends Component {

	constructor() {
		super()
		this.state = {
			contactDetails: {},
			errorMessages:{}
		}
	}

	manageSubmit(e) {
		e.preventDefault();

		if(this.refs.fname.value === "" || this.refs.number.value === "") {
			this.setState({errorMessages:{
				fname: "Please enter your first name",
				phone: "Please enter your phone number"
			}})
		} else {
			this.setState({contactDetails: {
				fname: this.refs.fname.value,
				phone: this.refs.number.value
			}}, () => {
				//console.log(this.state.contactDetails);
				this.props.addContact(this.state.contactDetails)
			})
		}
	}

	render() {
		
		return (
			<div className="App">
				<form id="add-contact" className="module-active" onSubmit={this.manageSubmit.bind(this)}>
					<label htmlFor="add-contact" className="header">Add Contact</label>
					<input type="text" className="contact-name" ref="fname" placeholder="Name"/>
					<input type="text" className="phone-number" ref="number" placeholder="Phone number"/>   
					<input type="submit" value="create" className="submit"/>
				</form>
			</div>
		)
	}
}

contactForm.propTypes = {
	addContact: PropTypes.func
}

export default contactForm;