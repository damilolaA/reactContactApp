import React, { Component } from "react";


class contactForm extends Component {

	constructor() {
		super()
		this.state = {
			contactDetails: {}
		}
	}

	manageSubmit(e) {
		if(this.ref.fname.value === "" || this.ref.fname.value === "") {
			
		}
		e.preventDefault();
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

export default contactForm;