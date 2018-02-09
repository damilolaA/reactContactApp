import React, { Component } from "react";

class ContactItems extends Component {

	render() {
		return (
			<li>
				<p>{this.props.name}</p>
				<p>{this.props.phone}</p>
			</li>
		)
	}
}

export default ContactItems