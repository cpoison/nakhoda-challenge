import React from "react";

const Menu = props => {
	return (
		<nav className="menu">
			<ul>
				{props.list.map(item => (
					<li key={item.text}>
						<a
							href={`#${item.text}`}
							className={item.selected ? "selected" : ""}
						>
							{item.text}
						</a>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Menu;
