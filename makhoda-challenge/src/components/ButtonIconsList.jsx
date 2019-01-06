import React from "react";
import "./ButtonIconsList.css";

const ButtonIconsList = props => {
	return (
		<div className={`button-container ${props.align}`}>
			{props.list.map(button => (
				<button type="button" key={button.label} className="button-icon">
					<i className={`fas fa${button.icon}`} />
					<label>{button.label}</label>
				</button>
			))}
		</div>
	);
};

export default ButtonIconsList;
