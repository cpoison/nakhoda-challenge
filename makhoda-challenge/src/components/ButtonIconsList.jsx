import React, { Component } from "react";
import "./ButtonIconsList.css";

class ButtonIconsList extends Component {
	render() {
		return (
			<div className={`button-container ${this.props.align}`}>
				{this.props.list.map(button => (
					<button type="button" key={button.label} className="button-icon">
						<i className={`fas fa${button.icon}`} />
						<label>{button.label}</label>
					</button>
				))}
			</div>
		);
	}
}

export default ButtonIconsList;
