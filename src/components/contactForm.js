import React, { Component } from "react";


class contactForm extends Component {

	render() {
		
		return (
			<div className="App">
				<form id="add-contact" className="module-active">
					<label for="add-contact" className="header">Add Contact</label>
					<input type="text" className="contact-name" name="fname" placeholder="Name"/>
					<input type="text" className="phone-number" name="number" placeholder="Phone number"/>   
					<input type="submit" value="create" className="submit"/>
				</form>
			</div>
		)
	}
}

export default contactForm;