import React, { Component } from "react";

class ContactItems extends Component {

	render() {
		
		return (
			<div ref="contacts" id="contacts">
				<div className="add-contact">Add Contact</div>
				<ul id="contact-list">
					<li>
						<b>this.props.contactItems.fname</b>	
						<b>this.props.contactItems.phone</b>
					</li>
				</ul>   
			</div>
		)
	}
}

export default ContactItems